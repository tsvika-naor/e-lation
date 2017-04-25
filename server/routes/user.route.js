var router = require('express').Router();
var User = require('../models/user.model');
var Provider = require('../models/provider.model');
var handleError = require('./utils');

router.get('/:id', function (req, res) {
    User.findOne({ _id: req.params.id })
        .exec(function (err, user) {
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

router.post('/new', function (req, res) {
    var providerData = Object.assign(req.body.provider);
    delete req.body.provider;

    User.create(req.body, function (err, doc) {
        if (err) handleError(res, err);

        if (!doc.isProvider) {
            res.json(doc);
        }

        providerData.user = doc;
        var provider = new Provider(providerData);
        provider.save(function (err) {
            res.json(doc);
        });
    });
});

router.post('/update', function (req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
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