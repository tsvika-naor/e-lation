var router = require('express').Router();
var Group = require('../models/group.model');
var User = require('../models/user.model');
var handleError = require('./utils');

//findOne
router.get('/:id', function (req, res) {
    Group.findById(req.params.id)
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
            if (err) return handleError(res, err);

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
            if (err) return handleError(res, err);

            res.json(groups);
        });
});

router.post('/new', function (req, res) {
    Group.create(req.body, function (err, doc) {
        if (err) return handleError(res, err);

        res.json(doc);
    });
});

router.post('/update', function (req, res) {
    Group.findByIdAndUpdate(req.body._id, req.body, function (err, obj) {
        if (err) return handleError(res, err);

        res.json(obj);
    });
});

router.post('/member/add', function (req, res) {
    Group.findByIdAndUpdate(req.body.parent, { $addToSet: { members: req.body.child } }, function (err, group) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/member/remove', function (req, res) {
    Group.findByIdAndUpdate(req.body.parent, { $pull: { members: req.body.child } }, function (err, group) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/promote', function (req, res) {
    Group.findByIdAndUpdate(req.body.parent, {
        $addToSet: { admins: req.body.child },
        $pull: { members: req.body.child }
    }, function (err, group) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/revoke', function (req, res) {
    Group.findByIdAndUpdate(req.body.parent, {
        $pull: { admins: req.body.child },
        $addToSet: { members: req.body.child }
    }, function (err, group) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/remove', function (req, res) {
    Group.findByIdAndUpdate(req.body.parent, { $pull: { admins: req.body.child } }, function (err, group) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.delete('/:id', function (req, res) {
    Group.findByIdAndRemove(req.params._id, function (err) {
        if (err) return handleError(res, err);

        res.send(req.params._id);
    });
});

module.exports = router;