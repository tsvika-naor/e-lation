var router = require('express').Router();
var Group = require('../models/group.model');
var User = require('../models/user.model');
var handleError = require('./utils');

//findOne
router.get('/:id', function (req, res) {
    Group.findOne({ _id: req.params.id })
        .populate([
            { path: 'owner', select: 'firstName lastName avatar' },
            { path: 'admins', select: 'firstName lastName avatar' },
            { path: 'members', select: 'firstName lastName avatar' },
            { path: 'provider', select: 'user', populate: { path: 'user', select: 'firstName lastName avatar' } },
            {
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
        ])
        .exec(function (err, groups) {
            if (err) handleError(res, err);

            res.json(groups);
        });
});

router.post('/find', function (req, res) {
    Group.find(req.body)
        .populate([
            { path: 'owner', select: 'firstName lastName avatar' },
            { path: 'admins', select: 'firstName lastName avatar' },
            { path: 'members', select: 'firstName lastName avatar' },
            { path: 'provider', select: 'user', populate: { path: 'user', select: 'firstName lastName avatar' } },
            {
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
        ])
        .exec(function (err, groups) {
            if (err) handleError(res, err);

            res.json(groups);
        });
});

router.post('/new', function (req, res) {
    Group.create(req.body, function (err, doc) {
        if (err) handleError(res, err);

        res.json(doc);
    });
});

router.post('/update', function (req, res) {
    Group.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) handleError(res, err);

        res.json(obj);
    });
});

router.post('/member/add', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, member) {
            if (err) handleError(res, err);

            group.members.addToSet(member);
            group.save(function (err) {
                if (err) handleError(res, err);

                res.json(member);
            });
        });
    });
});

router.post('/admin/add', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if (err) handleError(res, err);

            group.admins.addToSet(admin);
            group.save(function (err) {
                if (err) handleError(res, err);

                res.json(admin);
            });
        });
    });
});

router.post('/member/remove', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if (err) {
            handleError(res, err);
        } else if (group === null) {
            handleError(res, {
                name: "Invalid",
                message: "The group does not exist."
            }, 401);
        } else {
            User.findOne({ _id: req.body.child._id }, function (err, member) {
                if (err) {
                    handleError(res, err);
                } else if (member === null) {
                    handleError(res, {
                        name: "Invalid",
                        message: "The user does not exist."
                    }, 401);
                } else {
                    group.members.pull(member._id);
                    group.save(function (err) {
                        if (err) handleError(res, err);

                        res.json(member);
                    });
                }
            });
        }
    });
});

router.post('/admin/remove', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if (err) handleError(res, err);

            group.members.pull(admin._id);
            group.save(function (err) {
                if (err) handleError(res, err);

                res.json(admin);
            });
        });
    });
});

router.delete('/:id', function (req, res) {
    Group.findByIdAndRemove(req.params._id, function (err) {
        if (err) handleError(res, err);

        res.send(req.params._id);
    });
});

module.exports = router;