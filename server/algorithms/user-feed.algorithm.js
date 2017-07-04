var router = require('express').Router();
var Q = require("q");

var Post = require('../models/post.model');
var User = require('../models/user.model');
var Event = require('../models/event.model');
var Group = require('../models/group.model');
var handleError = require('../routes/utils');

router.get('/:id', function (req, res) {
    initFeed(req.params.id)
        .spread(getByInterests)
        .spread(getByLikes)
        .spread(getByEvents)
        .spread(getByGroups)
        .then(function (feed) {
            res.json({ posts: postweight(dedup(feed)) });
        })
        .catch(function (err) {
            handleError(res, err);
        });
});

module.exports = router;

function initFeed(userId) {
    var deferred = Q.defer();
    var feed = [];

    //get user by id
    User.findOne({ _id: userId }, function (err, user) {
        if (err) deferred.reject(err);
        deferred.resolve([user, feed]);
    });

    return deferred.promise;
}

function getByInterests(user, feed) {
    var deferred = Q.defer();

    //post by interest
    Post.find({ tags: { "$in": user.interests } }, function (err, posts) {
        if (err) deferred.reject(err);
        Array.prototype.push.apply(feed, posts);
        deferred.resolve([user, feed]);
    });

    return deferred.promise;
}

function getByLikes(user, feed) {
    var deferred = Q.defer();

    //post that user likes
    Post.find({ likes: { "$in": [user._id] } }, function (err, posts) {
        if (err) deferred.reject(err);
        Array.prototype.push.apply(feed, posts);
        deferred.resolve([user, feed]);
    });

    return deferred.promise;
}

function getByEvents(user, feed) {
    var deferred = Q.defer();

    //post by event that user is in
    Event.find({ members: { "$in": [user._id] } }, function (err, events) {
        if (err) deferred.reject(err);

        events.forEach(function (event) {
            if (err) deferred.reject(err);
            Array.prototype.push.apply(feed, event.posts);
        });

        deferred.resolve([user, feed]);
    });

    return deferred.promise;
}

function getByGroups(user, feed) {
    var deferred = Q.defer();

    //post by group that user is in
    Group.find({ members: { "$in": [user._id] } }, function (err, groups) {
        if (err) deferred.reject(err);

        groups.forEach(function (group) {
            if (err) deferred.reject(err);
            Array.prototype.push.apply(feed, group.posts);
        });

        deferred.resolve(feed);
    });

    return deferred.promise;
}



function postweight(posts) {
    posts.forEach(function (post) {
        //TODO post that user is in the event get more weight
        //defult weight to posts
        post.weight = 50 + post.likes.length * 5 + post.comments.length * 3;
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