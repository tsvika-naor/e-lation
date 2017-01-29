var router = require('express').Router();
var Provider = require('../models/provider.model');
var Review = require('../models/review.model');

router.get('/:id', function (req, res) {
    Provider.findOne({ _id: req.params.id }, function (err, user) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.JSON(user);
        });
});

router.post('/review/new', function (req, res) {
    Review.create(req.body, function (err, doc) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        res.JSON(doc);
    });
});

router.post('/review/edit', function (req, res) {
    Review.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        res.JSON(obj);
    });
});

router.delete('/review/:id', function (req, res) {
    Review.findByIdAndRemove(req.params._id, function (err) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        res.send(req.params._id);
    });
});

module.exports = router;