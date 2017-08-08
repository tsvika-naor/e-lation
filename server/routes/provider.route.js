var router = require('express').Router();
var Provider = require('../models/provider.model');
var Review = require('../models/review.model');
var handleError = require('./utils');

router.get('/:id', function (req, res) {
    Provider.findById(req.params.id)
        .populate([
            { path: 'user', select: 'firstName lastName avatar phone email' },
            { path: 'user', populate: { path: 'friends', select: 'firstName lastName avatar' } },
            { path: 'user', populate: { path: 'followers', select: 'firstName lastName avatar' } },
            { path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } },
            {
                path: 'user', populate: {
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
            }
        ])
        .exec(function (err, provider) {
            if (err) return handleError(res, err);

            Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                if (err) return handleError(res, err);

                provider.rank = count;
                res.json(provider);
            });
        });
});

router.post('/review/new', function (req, res) {
    Review.create(req.body.child, function (err, review) {
        if (err) return handleError(res, err);

        Provider.findByIdAndUpdate(req.body.parent, {
            $addToSet: { reviews: review },
            $inc: { rank: review.rating }
        }, { new: true })
            .populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } })
            .exec(function (err, provider) {
                if (err) return handleError(res, err);

                Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                    if (err) return handleError(res, err);

                    provider.rank = count;
                    res.json(provider);
                });
            });
    });
});

router.post('/review/edit', function (req, res) {
    Review.findByIdAndUpdate(req.body.child._id, req.body.child, function (err, review) {
        if (err) return handleError(res, err);

        var rankDiff = review.rating - req.body.child.rating;

        Provider.findByIdAndUpdate(req.body.parent, {
            $inc: { rank: rankDiff }
        }, { new: true })
            .populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } })
            .exec(function (err, provider) {
                if (err) return handleError(res, err);

                Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                    if (err) return handleError(res, err);

                    provider.rank = count;
                    res.json(provider);
                });
            });
    });
});

router.delete('/review/:id', function (req, res) {
    Review.findById(req.params._id, function (err, review) {
        if (err) return handleError(res, err);

        var rating = review.rating * -1;

        Review.findByIdAndRemove(req.params._id, function (err) {
            if (err) return handleError(res, err);

            Provider.findOneAndUpdate({ reviews: req.params._id }, {
                $pull: { reviews: review },
                $inc: { rank: rating }
            }, { new: true })
                .populate({ path: 'reviews', populate: { path: 'user', select: 'firstName lastName avatar' } })
                .exec(function (err, provider) {
                    if (err) {
                        return handleError(res, err);
                    } else if (provider === null) {
                        return handleError(res, {
                            name: "ProviderNotFound",
                            message: "No Provider account found for user."
                        });
                    } else {
                        Provider.count({ rank: { $gte: provider.rank } }, function (err, count) {
                            if (err) return handleError(res, err);

                            provider.rank = count;
                            res.json(provider);
                        });
                    }
                });
        });
    })
});

module.exports = router;