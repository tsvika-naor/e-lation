var router = require('express').Router;
var model = require('../models/user.model');

//findOne
router.get('/:id', function(req, res) {
    model.findOne( { _id: req.params.id } ).exec( function(err, user) {
        if (err)
        {
            console.error(err);
            res.status(400).send(err);
        }

        res.JSON(user);
    });
});

router.get('/find', function(req, res) {
    
});

router.post('/new', function(req, res) {
    
});


module.exports = router;