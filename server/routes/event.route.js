var router = require('express').Router();
var Event = require('../models/event.model');


router.get('/:id', function (req, res) {
    Event.findById(req.params.id)
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
        .exec(function (err, event) {
            if (err) return handleError(res, err);

            res.json(event);
        });
});

router.post('/find', function (req, res) {
    Event.find(req.body)
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
        .exec(function (err, events) {
            if (err) return handleError(res, err);

            res.json(events);
        });
});

router.post('/new', function (req, res) {
    Event.create(req.body, function (err, event) {
        if (err) return handleError(res, err);

        res.json(event);
    });
});

router.post('/update', function (req, res) {
    Event.findByIdAndUpdate(req.body._id, req.body, function (err, event) {
        if (err) return handleError(res, err);

        res.json(event);
    });
});

router.post('/member/add', function (req, res) {
    Event.findByIdAndUpdate(req.body.parent, { $addToSet: { members: req.body.child } }, function (err, event) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/member/remove', function (req, res) {
    Event.findByIdAndUpdate(req.body.parent, { $pull: { members: req.body.child } }, function (err, event) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/promote', function (req, res) {
    Event.findByIdAndUpdate(req.body.parent, {
        $addToSet: { admins: req.body.child },
        $pull: { members: req.body.child }
    }, function (err, event) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/revoke', function (req, res) {
    Event.findByIdAndUpdate(req.body.parent, {
        $pull: { admins: req.body.child },
        $addToSet: { members: req.body.child }
    }, function (err, event) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.post('/admin/remove', function (req, res) {
    Event.findByIdAndUpdate(req.body.parent, { $pull: { admins: req.body.child } }, function (err, event) {
        if (err) return handleError(res, err, 401);

        res.json(req.body.child);
    });
});

router.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params._id, function (err) {
        if (err) return handleError(res, err);

        res.send(req.params._id);
    });
});

module.exports = router;