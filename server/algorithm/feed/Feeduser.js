var Post = require('../../models/post.model');
var User = require('../../models/user.model');
var Event = require('../../models/event.model');
var Group = require('../../models/group.model');
var handleError = require('../../routes/utils');

module.exports = function (app) {
    app.get('/feed/get/:id', function (req, res) {
        var postFeed = [];

        //get user by id
        User.findOne({ _id: req.params.id }, function (err, user) {
            if (err) handleError(err);

            //post by interest
            Post.find({ tags: { "$in": [user.interests] } }, function (err, posts) {
                if (err) handleError(err);
                postFeed.concat(posts);

                //post by event that user is in
                Event.find({ members: { "$in": [user._id] } })
                    .populate({
                        path: 'posts', populate: [
                            { path: 'user', select: '_id firstName lastName' },
                            {
                                path: 'comments', populate: [
                                    { path: 'user', select: '_id firstName lastName' },
                                    { path: 'comments' }
                                ]
                            }
                        ]
                    })
                    .exec(function (err, events) {
                        if (err) handleError(err);
                        events.forEach(function (event) {
                            if (err) handleError(err);
                            postFeed.concat(event.posts);

                            //post that have amount of likes
                            Post.find({ likes: { $exists: true }, $where: 'this.likes.length>1' }, function (err, posts) {
                                if (err) handleError(err);
                                postFeed.concat(posts);

                                //post that user likes
                                Post.find({ likes: { "$in": [user._id] } }, function (err, posts) {
                                    if (err) handleError(err);
                                    postFeed.concat(posts);
                                    res.JSON(postweight(dedup(posts)));
                                });
                            });
                        });
                    });
            });
        });
    });
};

function postweight(posts) {
    posts.forEach(function (post) {
        //TODO post that user is in the event get more weight
        //defult weight to posts
        post.weight = 50 + post.likes * 5 + post.comments.lengh * 3;
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
    var timenow = new date();
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
