var router = require('express').Router();
var Event = require('../models/event.model');
var http = require('http');


router.get('/:id', function (req, res) {
    User.findOne({ _id: req.params.id })
    //.populate('provider')
        .exec(function (err, user) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.JSON(user);
        });
});

router.post('/member/add', function (req, res) {
    User.find(req.body)
    //.populate('provider')
        .exec(function (err, users) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.JSON(users);
        });
});

router.post('/new', function (req, res) {
    var providerData = Object.assign(req.body.provider);
    delete req.body.provider;

    User.create(req.body, function (err, doc) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        if (!doc.isProvider) {
            res.JSON(doc);
        }

        providerData.user = doc;
        var provider = new Provider(providerData);
        provider.save(function (err) {
            res.JSON(doc);
        });


    });
});

router.post('/update', function (req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }
        res.JSON(obj);
    });
});

router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params._id, function (err) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        res.send(req.params._id);
    });
});

module.exports = router;