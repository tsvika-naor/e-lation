var router = require('express').Router();
var Post = require('../models/post.model');
var Comment = require('../models/comment.model');
var handleError = require('./utils');

router.post('/get', function (req, res) {
    Post.find(req.body, function (err, posts) {
        if (err) handleError(err);

        res.JSON(posts);
    });
});

router.post('/post/like', function (req, res) {
    Post.findOneAndUpdate({ _id: req.body._id }, { likes: req.body.likes }, function (err, obj) {
        if (err) handleError(err);

        res.JSON(obj);
    });
});

router.post('/comment/like', function (req, res) {
    Comment.findOneAndUpdate({ _id: req.body._id }, { likes: req.body.likes }, function (err, obj) {
        if (err) handleError(err);

        res.JSON(obj);
    });
});

router.post('/comment/post', function (req, res) {
    Comment.create(req.body, function (err, doc) {
        if (err) handleError(err);

        if (req.body.parent === null || typeof req.body.parent === undefined) {
            Post.findOne({ _id: req.body.subject }, function (err, post) {
                if (err) handleError(err);

                post.comments.addToSet(doc);
                post.save(function (err) {
                    if (err) handleError(err);

                    res.JSON(doc);
                });
            });
        } else {
            Comment.findOne({ _id: req.body.parent }, function (err, comment) {
                if (err) handleError(err);

                comment.comments.addToSet(doc);
                comment.save(function (err) {
                    if (err) handleError(err);

                    res.JSON(doc);
                });
            });
        }
    });
});

module.exports = router;