var router = require('express').Router();
var Event = require('../models/event.model');


router.get('/:id', function (req, res) {
    Event.findOne({ _id: req.params.id })
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
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

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
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.json(events);
        });
});

router.post('/new', function (req, res) {
    Event.create(req.body, function (err, doc) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        if (!doc.isProvider) {
            res.json(doc);
        }
    });
});

router.post('/update', function (req, res) {
    Event.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }
        res.json(obj);
    });
});

router.post('/member/add', function (req, res) {
    Event.findOne({ _id: req.body.parent }, function (err, event) {
        if (err) {
            handleError(res, err);
        } else if (event === null) {
            handleError(res, {
                name: "Invalid",
                message: "The event does not exist."
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
                    event.members.addToSet(member);
                    event.save(function (err) {
                        if (err) handleError(res, err);

                        res.json(member);
                    });
                }
            });
        }
    });
});

router.post('/admin/add', function (req, res) {
    Event.findOne({ _id: req.body.parent }, function (err, event) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if (err) handleError(res, err);

            event.admins.addToSet(admin);
            event.save(function (err) {
                if (err) handleError(res, err);

                res.json(admin);
            });
        });
    });
});

router.post('/member/remove', function (req, res) {
    Event.findOne({ _id: req.body.parent }, function (err, event) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, member) {
            if (err) handleError(res, err);

            event.members.pull(member._id);
            event.save(function (err) {
                if (err) handleError(res, err);

                res.json(member);
            });
        });
    });
});

router.post('/admin/remove', function (req, res) {
    Event.findOne({ _id: req.body.parent }, function (err, event) {
        if (err) handleError(res, err);

        User.findOne({ _id: req.body.child._id }, function (err, admin) {
            if (err) handleError(res, err);

            event.admins.pull(admin._id);
            event.save(function (err) {
                if (err) handleError(res, err);

                res.json(admin);
            });
        });
    });
});

router.delete('/:id', function (req, res) {
    Event.findByIdAndRemove(req.params._id, function (err) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        res.send(req.params._id);
    });
});

module.exports = router;