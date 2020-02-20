var router = require('express').Router();
var Post = require('../models/post.model');
var Comment = require('../models/comment.model');
var Group = require('../models/group.model');
var Event = require('../models/event.model');
var User = require('../models/user.model');
var lang = require('../services/lang.service');
var feedLoader = require('./algorithms/user-feed.algorithm');
var handleError = require('./utils');

router.get('/:id', feedLoader);

router.post('/get', function (req, res) {
    Post.find(req.body, null, { sort: { date: -1 } })
        .populate([
            { path: 'user', select: 'firstName lastName avatar' },
            {
                path: 'comments', populate: [
                    { path: 'user', select: 'firstName lastName' },
                    { path: 'comments' }
                ]
            }
        ])
        .exec(function (err, posts) {
            if (err) return handleError(res, err);

            res.json(posts);
        });
});

router.get('/post/:id', function (req, res) {
    Post.findById(req.params.id)
        .populate([
            { path: 'user', select: 'firstName lastName avatar' },
            {
                path: 'comments', populate: [
                    { path: 'user', select: 'firstName lastName' },
                    { path: 'comments' }
                ]
            }
        ])
        .exec(function (err, post) {
            if (err) return handleError(res, err);

            res.json(post);
        });
});

router.post('/post', function (req, res) {
    req.body.child.rtl = lang.isRTL(req.body.child.body);

    Post.create(req.body.child, function (err, post) {
        if (err) return handleError(res, err);

        post.populate([
            { path: 'user', select: 'firstName lastName avatar' },
            {
                path: 'comments', populate: [
                    { path: 'user', select: 'firstName lastName' },
                    { path: 'comments' }
                ]
            }
        ]);

        if (req.body.parent !== null && typeof req.body.parent !== undefined) {
            if (req.body.type === 'event') {
                Event.findByIdAndUpdate(req.body.parent, { $addToSet: { posts: post } }, function (err, doc) {
                    if (err) return handleError(res, err);

                    res.json(post);
                });
            } else if (req.body.type === 'group') {
                Group.findByIdAndUpdate(req.body.parent, { $addToSet: { posts: post } }, function (err, doc) {
                    if (err) return handleError(res, err);

                    res.json(post);
                });
            } else if (req.body.type === 'user') {
                User.findByIdAndUpdate(req.body.parent, { $addToSet: { posts: post } }, function (err, doc) {
                    if (err) return handleError(res, err);

                    res.json(post);
                });
            }
        } else {
            res.json(post);
        }
    });
});

router.post('/post/like', function (req, res) {
    Post.findById(req.body.parent)
        .populate([
            { path: 'user', select: 'firstName lastName avatar' },
            {
                path: 'comments', populate: [
                    { path: 'user', select: 'firstName lastName' },
                    { path: 'comments' }
                ]
            }
        ])
        .exec(function (err, post) {
            if (err) return handleError(res, err);

            if (post.likes.indexOf(req.body.child) > -1)
                post.likes.pull(req.body.child);
            else
                post.likes.addToSet(req.body.child);

            post.save(function (err, doc) {
                if (err) return handleError(res, err);

                res.json(doc);
            });
        });
});

router.post('/comment/like', function (req, res) {
    Comment.findById(req.body.parent, function (err, comment) {
        if (err) return handleError(res, err);

        if (comment.likes.indexOf(req.body.child) > -1)
            comment.likes.pull(req.body.child);
        else
            comment.likes.addToSet(req.body.child);

        comment.save(function (err, doc) {
            if (err) return handleError(res, err);
            res.json(doc);
        });
    });
});

router.post('/comment/post', function (req, res) {
    Comment.create(req.body, function (err, doc) {
        if (err) return handleError(res, err);

        doc.populate({ path: 'user', select: 'firstName lastName avatar' });

        if (req.body.parent === null || typeof req.body.parent === undefined) {
            console.log("post");
            Post.findByIdAndUpdate(req.body.subject, { $addToSet: { comments: doc } }, function (err, post) {
                if (err) return handleError(res, err);
                
                res.json(doc);
            });
        } else {
            console.log("comment");
            Comment.findByIdAndUpdate(req.body.parent, { $addToSet: { comments: doc } }, function (err, comment) {
                if (err) return handleError(res, err);

                res.json(doc);
            });
        }
    });
});

module.exports = router;