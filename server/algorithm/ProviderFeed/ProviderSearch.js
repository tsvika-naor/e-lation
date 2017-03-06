var Q = require("q");

var Post = require('../../models/post.model');
var User = require('../../models/user.model');
var Event = require('../../models/event.model');
var Group = require('../../models/group.model');
var handleError = require('../../routes/utils');


module.exports = function (app) {
    app.post('/api/search/all', function (req, res) {
        init(req.body.query)
            .spread(providerSearch)
            .spread(userSearch)
            .spread(interestSearch)
            .spread(groupSearch)
            .spread(eventSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });

    app.post('/api/search/provider', function (req, res) {
        init(req.body.query)
            .spread(providerSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });

    app.post('/api/search/user', function (req, res) {
        init(req.body.query)
            .spread(userSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });

    app.post('/api/search/interest', function (req, res) {
        init(req.body.query)
            .spread(interestSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });

    app.post('/api/search/group', function (req, res) {
        init(req.body.query)
            .spread(groupSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });

    app.post('/api/search/event', function (req, res) {
        init(req.body.query)
            .spread(eventSearch)
            .spread(function (query, result) {
                res.json(result);
            })
            .catch(handleError);
    });
}

function init(query) {
    var deferred = Q.defer();

    deferred.resolve([query, {}]);

    return deferred.promise;
}

function providerSearch(query, result) {
    var deferred = Q.defer();

    if (typeof query == "string") {
        return providerSearchByName;
    }
    
    return providerSearchByName
        .spread(providerSearchByParams)
        .spread(function (query, result) {
            result.providers = dedup(result.providers);
        });
}

function providerSearchByName(query, result) {
    var deferred = Q.defer();

    User.find({
        isProvider: true,
        $where: function () { var name = this.firstName + ' ' + this.lastName; return name.includes(query); }
    })
        .sort({ rank: "desc" })
        .exec(function (err, providers) {
            if (err) deferred.reject(err);

            result.providers = result.providers.concat(providers);
            deferred.resolve([query, result]);
        });

    return deferred.promise;
}

function providerSearchByParams(query, result) {
    var deferred = Q.defer();

    Provider.find(query)
        .sort({ rank: "desc" })
        .exec(function (err, providers) {
            if (err) deferred.reject(err);

            result.providers = result.providers.concat(providers);
            deferred.resolve([query, result]);
        });

    return deferred.promise;
}

function userSearch(query, result) {
    var deferred = Q.defer();
    if (typeof query == "string") {
        query = { name: query };
    }

    User.find(query)
        .sort({ rank: "desc" })
        .exec(function (err, users) {
            if (err) deferred.reject(err);

            result.users = users;
            deferred.resolve([query, result]);
        });

    return deferred.promise;
}

function interestSearch(query, result) {
    var deferred = Q.defer();

    Post.find({ tags: { "$in": [query] } }, function (err, posts) {
        if (err) deferred.reject(err);
        Array.prototype.push.apply(feed, posts);

        result.posts = feed;
        deferred.resolve([query, result]);
    });

    return deferred.promise;
}

function groupSearch(query, result) {
    var deferred = Q.defer();
    if (typeof query == "string") {
        query = { name: query };
    }

    Group.find(query)
        .sort({ rank: "desc" })
        .exec(function (err, groups) {
            if (err) deferred.reject(err);

            result.groups = groups;
            deferred.resolve([query, result]);
        });

    return deferred.promise;
}

function eventSearch(query, result) {
    var deferred = Q.defer();
    if (typeof query == "string") {
        query = { name: query };
    }

    Event.find(query)
        .sort({ rank: "desc" })
        .exec(function (err, events) {
            if (err) deferred.reject(err);

            result.events = events;
            deferred.resolve([query, result]);
        });

    return deferred.promise;
}

//check for duplicate in the postfeed
function dedup(arr) {
    var seen = {};
    return arr.filter(function (item) {
        return seen.hasOwnProperty(item._id) ? false : (seen[item._id] = true);
    });
}