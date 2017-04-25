var router = require('express').Router();
var Provider = require('../models/provider.model');
var Review = require('../models/review.model');
var handleError = require('./utils');

router.get('/:id', function (req, res) {
    Provider.findOne({ _id: req.params.id })
        .populate({ path: 'user', select: 'firstName lastName avatar phone email' })
        .populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName' } })
        .exec(function (err, user) {
            if (err) handleError(res, err);

            res.json(user);
        });
});

router.post('/review/new', function (req, res) {
    Review.create(req.body, function (err, doc) {
        if (err) handleError(res, err);

        res.json(doc);
    });
});

router.post('/review/edit', function (req, res) {
    Review.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) handleError(res, err);

        res.json(obj);
    });
});

router.delete('/review/:id', function (req, res) {
    Review.findByIdAndRemove(req.params._id, function (err) {
        if (err) handleError(res, err);

        res.send(req.params._id);
    });
});

module.exports = router;