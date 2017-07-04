var router = require('express').Router();
var user = require('../services/user.service');

router.post('/login', user.verifyToken, user.verifyUser, user.getUserData, function (req, res) {
    res.json(req.body.userData);
});

router.post('/register', user.verifyToken, user.getProfile, function (req, res) {
    res.json(req.body.profile);
});

module.exports = router;