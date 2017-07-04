var router = require('express').Router();
var Provider = require('../models/provider.model');
var Review = require('../models/review.model');
var handleError = require('./utils');

router.get('/:id', function (req, res) {
    Provider.findOne({ _id: req.params.id })
        .populate({ path: 'user', select: 'firstName lastName avatar phone email' })
        .populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } })
        .populate({ path: 'fields', populate: { path: 'customers', select: 'firstName lastName avatar' } })
        .exec(function (err, provider) {
            if (err) handleError(res, err);

            Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                if (err) handleError(res, err);

                provider.rank = count;
                res.json(provider);
            });
        });
});

router.post('/review/new', function (req, res) {
    Review.create(req.body.child, function (err, doc) {
        if (err) handleError(res, err);

        Provider.findByIdAndUpdate(req.body.parent, {
            $addToSet: { reviews: doc },
            $inc: { rank: doc.rating }
        }, { new: true }, function (err, provider) {
            if (err) handleError(res, err);

            provider.populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } });

            Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                if (err) handleError(res, err);

                provider.rank = count;
                res.json(provider);
            });
        });
    });
});

router.post('/review/edit', function (req, res) {
    Review.findByIdAndUpdate(req.body.child._id, req.body.child, function (err, review) {
        if (err) handleError(res, err);

        var rankDiff = review.rating - req.body.child.rating;

        Provider.findByIdAndUpdate(req.body.parent, {
            $inc: { rank: rankDiff }
        }, { new: true }, function (err, provider) {
            if (err) handleError(res, err);

            provider.populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } });

            Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                if (err) handleError(res, err);

                provider.rank = count;
                res.json(provider);
            });
        });
    });
});

router.delete('/review/:id', function (req, res) {
    Review.findById(req.params._id, function (err, review) {
        if (err) handleError(res, err);

        var rating = review.rating * -1;

        Review.findByIdAndRemove(req.params._id, function (err) {
            if (err) handleError(res, err);

            Provider.findOneAndUpdate({ reviews: req.params._id }, {
                $pull: { reviews: review },
                $inc: { rank: rating }
            }, { new: true }, function (err, provider) {
                if (err) handleError(res, err);

                provider.populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } });

                Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                    if (err) handleError(res, err);

                    provider.rank = count;
                    res.json(provider);
                });
            });
        });
    })
});

module.exports = router;