var router = require('express').Router();
var Event = require('../models/event.model');


router.get('/:id', function (req, res) {
    Event.findOne({ _id: req.params.id })
    //.populate('provider')
        .exec(function (err, event) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.JSON(event);
        });
});

router.post('/member/add', function (req, res) {
    Event.find(req.body)
    //.populate('provider')
        .exec(function (err, events) {
            if (err) {
                console.error(err);
                res.status(400).send(err);
            }

            res.JSON(events);
        });
});

router.post('/new', function (req, res) {
    var providerData = Object.assign(req.body.provider);
    delete req.body.provider;

    Event.create(req.body, function (err, doc) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }

        if (!doc.isProvider) {
            res.JSON(doc);
        }

        providerData.event = doc;
        var provider = new Provider(providerData);
        provider.save(function (err) {
            res.JSON(doc);
        });


    });
});

router.post('/update', function (req, res) {
    Event.findOneAndUpdate({ _id: req.body._id }, req.body, function (err, obj) {
        if (err) {
            console.error(err);
            res.status(400).send(err);
        }
        res.JSON(obj);
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