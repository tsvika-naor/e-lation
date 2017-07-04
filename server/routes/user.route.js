var router = require('express').Router();
var User = require('../models/user.model');
var Provider = require('../models/provider.model');
var user = require('../services/user.service');
var handleError = require('./utils');

router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) handleError(res, err);

        res.json(user);
    });
});

router.post('/find', function (req, res) {
    User.find(req.body)
        .exec(function (err, users) {
            if (err) handleError(res, err);

            res.json(users);
        });
});

// test only
router.get('/links/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) handleError(res, err, 500);

        req.body.user = user;
        next();
    });
}, user.getUserData, function (req, res) {
    res.json(req.body.userData);
});

router.post('/new', function (req, res, next) {
    req.body.user.auth_id = {
        kind: req.get('provider'),
        value: req.token
    };

    User.create(req.body.user, function (err, user) {
        if (err) handleError(res, err);

        req.body.user = user;
        if (!user.isProvider) {
            next();
        } else {
            //req.body.provider.user = user._id;
            // Create Provider
            next();
        }
    });
}, user.getUserData, function (req, res) {
    res.json(req.body.userData);
});

router.post('/update', function (req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, obj) {
        if (err) handleError(res, err);

        res.json(obj);
    });
});

router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params._id, function (err) {
        if (err) handleError(res, err);

        res.send(req.params._id);
    });
});

module.exports = router;