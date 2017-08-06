var handleError = require('../routes/utils');
var router = require('express').Router();
var Promise = require("bluebird");

var Post = require('../models/post.model');
var User = require('../models/user.model');
var Event = require('../models/event.model');
var Group = require('../models/group.model');
var Provider = require('../models/provider.model');

router.post('/all', function(req, res) {
    init(req.body.query)
        .spread(providerSearch)
        .spread(userSearch)
        .spread(interestSearch)
        .spread(groupSearch)
        .spread(eventSearch)
        .spread(function(query, result) {
            console.log(result);
            res.json(result);
        })
        .catch(function(err) {
            handleError(res, err);
        });
});

router.post('/provider', function(req, res) {
    init(req.body.query)
        .spread(providerSearch)
        .spread(function(query, result) {
            res.json(result);
        })
        .catch(handleError);
});

router.post('/user', function(req, res) {
    init(req.body.query)
        .spread(userSearch)
        .spread(function(query, result) {
            res.json(result);
        })
        .catch(handleError);
});

router.post('/interest', function(req, res) {
    init(req.body.query)
        .spread(interestSearch)
        .spread(function(query, result) {
            res.json(result);
        })
        .catch(handleError);
});

router.post('/group', function(req, res) {
    init(req.body.query)
        .spread(groupSearch)
        .spread(function(query, result) {
            res.json(result);
        })
        .catch(handleError);
});

router.post('/event', function(req, res) {
    init(req.body.query)
        .spread(eventSearch)
        .spread(function(query, result) {
            res.json(result);
        })
        .catch(handleError);
});

function init(query) {
    return new Promise(function(resolve, reject) {
        resolve([query, {}]);
    });
}

function providerSearch(query, result) {
    return new Promise(function(resolve, reject) {
        if (typeof query === "string") {
            providerSearchByName(query, result)
                .spread(providerSearchByService)
                .spread(function(query, result) {
                    result.providers = dedup(result.providers);
                    resolve([query, result]);
                });
        } else {
            providerSearchByParams(query, result)
                .spread(function(query, result) {
                    resolve([query, result]);
                });
        }
    });
}

function providerSearchByName(query, result) {
    return new Promise(function(resolve, reject) {
        Provider.aggregate([
            {
                $project: {
                    user: {
                        firstName: true,
                        lastName: true,
                        avatar: true
                    },
                    name: { $concat: ["$user.firstName", " ", "$user.lastName"] }
                }
            },
            { $match: { name: { $regex: new RegExp(query, "ig") } } },
            { $sort: { rank: -1 } }
        ], function(err, providers) {
            if (typeof result.providers === "undefined") {
                result.providers = [];
            }

            if (err) {
                reject(err);
            } else {
                result.providers = result.providers.concat(providers);
                resolve([query, result]);
            }
        });
    });
}

function providerSearchByService(query, result) {
    return new Promise(function(resolve, reject) {
        Provider.find({ "services.name": { $regex: new RegExp(query, "ig") } })
            .populate({ path: 'user', select: 'firstName lastName avatar' })
            .sort({ rank: "desc" })
            .exec(function(err, providers) {
                if (typeof result.providers === "undefined") {
                    result.providers = [];
                }

                if (err) {
                    reject(err);
                } else {
                    result.providers = result.providers.concat(providers);
                    resolve([query, result]);
                }
            });
    });
}

function providerSearchByParams(query, result) {
    return new Promise(function(resolve, reject) {
        Provider.find(query)
            .populate({ path: 'user', select: 'firstName lastName avatar' })
            .sort({ rank: "desc" })
            .exec(function(err, providers) {
                if (typeof result.providers === "undefined") {
                    result.providers = [];
                }

                if (err) {
                    reject(err);
                } else {
                    result.providers = result.providers.concat(providers);
                    resolve([query, result]);
                }
            });
    });
}

function userSearch(query, result) {
    return new Promise(function(resolve, reject) {
        User.aggregate([
            {
                $project: {
                    firstName: true,
                    lastName: true,
                    avatar: true,
                    name: { $concat: ["$firstName", " ", "$lastName"] }
                }
            },
            { $match: { name: { $regex: new RegExp(query, "ig") } } },
            { $sort: { rank: -1 } }
        ], function(err, users) {
            if (err) {
                reject(err);
            } else {
                result.users = users;
                resolve([query, result]);
            }
        });
    });
}

function interestSearch(query, result) {
    return new Promise(function(resolve, reject) {
        Post.find({ tags: { "$in": [query] } }, function(err, posts) {
            if (err) {
                reject(err);
            } else {
                result.posts = posts;
                resolve([query, result]);
            }
        });
    });
}

function groupSearch(query, result) {
    if (typeof query == "string") {
        query = {
            $or: [
                { name: { $regex: new RegExp(query, "ig") } },
                { type: { $regex: new RegExp(query, "ig") } }
            ]
        };
    }

    return new Promise(function(resolve, reject) {
        Group.find(query, function(err, groups) {
            if (err) {
                reject(err);
            } else {
                result.groups = groups;
                resolve([query, result]);
            }
        });
    });
}

function eventSearch(query, result) {
    if (typeof query == "string") {
        query = {
            $or: [
                { name: { $regex: new RegExp(query, "ig") } },
                { type: { $regex: new RegExp(query, "ig") } }
            ]
        };
    }

    return new Promise(function(resolve, reject) {
        Event.find(query, function(err, events) {
            if (err) {
                reject(err);
            } else {
                result.events = events;
                resolve([query, result]);
            }
        });
    });
}

//check for duplicate in the postfeed
function dedup(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item._id) ? false : (seen[item._id] = true);
    });
}

module.exports = router;