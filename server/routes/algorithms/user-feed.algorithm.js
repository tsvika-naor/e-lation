var handleError = require('../utils');
var router = require('express').Router();
var Promise = require("bluebird");

var Post = require('../../models/post.model');
var User = require('../../models/user.model');
var Event = require('../../models/event.model');
var Group = require('../../models/group.model');
var Provider = require('../../models/provider.model');

module.exports = function (req, res) {
    initFeed(req.params.id)
        .spread(getByInterests)
        .spread(getByLikes)
        .spread(getByProviders)
        .spread(getByEvents)
        .spread(getByGroups)
        .spread(function (user, feed) {
            res.json(postweight(dedup(feed)));
        })
        .catch(function (err) {
            handleError(res, err);
        });
};

function initFeed(userId) {
    return new Promise(function (resolve, reject) {
        var feed = [];

        //get user by id
        User.findById(userId, function (err, user) {
            if (err) {
                reject(err);
            } else {
                resolve([user, feed]);
            }
        });
    });
}

function getByInterests(user, feed) {
    return new Promise(function (resolve, reject) {
        //post by interest
        Post.find({ tags: { "$in": user.interests } }, function (err, posts) {
            if (err) {
                reject(err);
            } else {
                Array.prototype.push.apply(feed, posts);
                resolve([user, feed]);
            }
        });
    });
}

function getByLikes(user, feed) {
    return new Promise(function (resolve, reject) {
        //posts that user likes
        Post.find({ likes: user._id }, function (err, posts) {
            if (err) {
                reject(err);
            } else {
                Array.prototype.push.apply(feed, posts);
                resolve([user, feed]);
            }
        });
    });
}

function getByProviders(user, feed) {
    return new Promise(function (resolve, reject) {
        //providers that user follows
        Provider.find({ "user.followers": user._id })
            .populate({
                path: 'user', populate: {
                    path: 'posts', populate: [
                        { path: 'user', select: 'firstName lastName avatar' },
                        {
                            path: 'comments', populate: [
                                { path: 'user', select: 'firstName lastName avatar' },
                                { path: 'comments' }
                            ]
                        }
                    ]
                }
            })
            .exec(function (err, providers) {
                if (err) {
                    reject(err);
                } else {
                    providers.forEach(function (provider) {
                        if (err) {
                            reject(err);
                        } else {
                            Array.prototype.push.apply(feed, provider.user.posts);
                        }
                    });
                    resolve([user, feed]);
                }
            });
    });
}

function getByEvents(user, feed) {
    var query = {
        $or: [
            { members: user._id },
            { admins: user._id },
            { owner: user._id },
            { "provider.user": user._id }
        ]
    };

    return new Promise(function (resolve, reject) {
        //post by event that user is in
        Event.find(query)
            .populate({
                path: 'posts', populate: [
                    { path: 'user', select: 'firstName lastName avatar' },
                    {
                        path: 'comments', populate: [
                            { path: 'user', select: 'firstName lastName avatar' },
                            { path: 'comments' }
                        ]
                    }
                ]
            })
            .exec(function (err, events) {
                if (err) {
                    reject(err);
                } else {
                    events.forEach(function (event) {
                        if (err) {
                            reject(err);
                        } else {
                            Array.prototype.push.apply(feed, event.posts);
                        }
                    });
                    resolve([user, feed]);
                }
            });
    });
}

function getByGroups(user, feed) {
    var query = {
        $or: [
            { members: user._id },
            { admins: user._id },
            { owner: user._id },
            { "provider.user": user._id }
        ]
    };

    return new Promise(function (resolve, reject) {
        //post by group that user is in
        Group.find(query)
            .populate({
                path: 'posts', populate: [
                    { path: 'user', select: 'firstName lastName avatar' },
                    {
                        path: 'comments', populate: [
                            { path: 'user', select: 'firstName lastName avatar' },
                            { path: 'comments' }
                        ]
                    }
                ]
            })
            .exec(function (err, groups) {
                if (err) {
                    reject(err);
                } else {
                    groups.forEach(function (group) {
                        if (err) {
                            reject(err);
                        } else {
                            Array.prototype.push.apply(feed, group.posts);
                        }
                    });
                    resolve([user, feed]);
                }
            });
    });
}


function postweight(posts) {
    posts.forEach(function (post) {
        //TODO post that user is in the event get more weight
        //defult weight to posts
        post.weight = 50 + (post.likes || []).length * 5 + (post.comments || []).length * 3;
        post = decreaseweight(post);

    });
    //sort by the weight
    return posts.sort(function (a, b) {
        if (a.weight < b.weight) {
            return -1;
        }
        if (a.weight > b.weight) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
}

//needed to run x time
function decreaseweight(post) {
    var timenow = new Date();
    //the post dont lost weight the same day that he posted
    if (timenow.getDay() != post.date.getDay()) {
        var day = Math.abs(timenow.getDay() - post.date.getDay());
        var time = (timenow.getHours() + (24 - post.date.getHours())) + 24 * (day - 1);
        post.weight = post.weight - time * 2;
    }

    return post;
}

//check for duplicate in the postfeed
function dedup(arr) {
    var seen = {};
    return arr.filter(function (item) {
        return seen.hasOwnProperty(item._id) ? false : (seen[item._id] = true);
    });
}