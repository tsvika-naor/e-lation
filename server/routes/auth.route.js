var router = require('express').Router();

router.post('/login', function(req, res) {
    console.log("login triggered");
    res.status(200).send();
});

module.exports = router;