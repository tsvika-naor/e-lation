var router = require('express').Router();
var Group = require('../models/group.model');
var User = require('../models/user.model');
var handleError = require('./utils');

//findOne
router.get('/:id', function (req, res) {
    Group.findOne({ _id: req.params.id })
        .populate({ path: 'owner admins members', select: '_id firstName lastName' })
        .populate({ path: 'provider', select: '_id Group', populate: { path: 'Group', select: '_id firstName lastName' } })
        .exec(function (err, Group) {
            if(err) handleError(err);

            res.JSON(Group);
        });
});

router.post('/find', function (req, res) {
    Group.find(req.body)
        .populate({ path: 'owner admins members', select: '_id firstName lastName' })
        .populate({ path: 'provider', select: '_id Group', populate: { path: 'Group', select: '_id firstName lastName' } })
        .exec(function (err, groups) {
            if(err) handleError(err);

            res.JSON(groups);
        });
});

router.post('/new', function (req, res) {
    Group.create(req.body, function (err, doc) {
        if(err) handleError(err);

        res.JSON(doc);
    });
});

router.post('/update', function (req, res) {
    Group.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if(err) handleError(err);

        res.JSON(obj);
    });
});

router.post('/member/add', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if(err) handleError(err);

        User.findOne({ _id: req.body.child._id }, function (err, member) {
            if(err) handleError(err);

            group.members.addToSet(member);
            group.save(function (err) {
                if (err) handleError(err);

                res.JSON(member);
            });
        });
    });
});

router.post('/admin/add', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if(err) handleError(err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if(err) handleError(err);

            group.admins.addToSet(admin);
            group.save(function (err) {
                if (err) handleError(err);

                res.JSON(admin);
            });
        });
    });
});

router.post('/member/remove', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if(err) handleError(err);

        User.findOne({ _id: req.body.child._id }, function (err, member) {
            if(err) handleError(err);

            group.members.pull(member._id);
            group.save(function (err) {
                if (err) handleError(err);

                res.JSON(member);
            });
        });
    });
});

router.post('/admin/remove', function (req, res) {
    Group.findOne({ _id: req.body.parent }, function (err, group) {
        if(err) handleError(err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if(err) handleError(err);

            group.members.pull(admin._id);
            group.save(function (err) {
                if (err) handleError(err);

                res.JSON(admin);
            });
        });
    });
});

router.delete('/:id', function (req, res) {
    Group.findByIdAndRemove(req.params._id, function (err) {
        if (err) handleError(err);

        res.send(req.params._id);
    });
});

module.exports = router;