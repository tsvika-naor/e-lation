var Promise = require("bluebird");
var Facebook = require('facebook-node-sdk');
var appID = "1246381665456070";
var appSecret = "4b3850f65940d22067b08355958abcbb";
var FB = new Facebook({ appID: appID, secret: appSecret });
var handleError = require('../routes/utils');

module.exports = {
    verifyToken: function(req, res, next) {
        callAPI("/debug_token?input_token=" + req.token + "&access_token=" + appID + "|" + appSecret)
            .then(function(userToken) {
                req.body.userId = userToken.data.user_id;
                next();
            })
            .catch(function(err) {
                handleError(res, err, 500);
            });
    },

    getProfile: function(req, res, next) {
        callAPI('/' + req.body.userId + '?fields=birthday,first_name,last_name,picture,location,gender,email')
            .then(function(user) {
                req.body.profile = {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    avatar: {
                        mimeType: "image/jpg",
                        data: user.picture.data.url
                    },
                    email: user.email
                };

                var location = user.location.split(', ');
                if (location.length == 2) {
                    req.body.profile.address = {
                        city: location[0],
                        country: location[1]
                    };
                } else if (location.length == 1) {
                    req.body.profile.address = { city: location[0] };
                }


                var birthday = user.birthday.split('/');
                if (birthday.length == 3)
                    req.body.profile.birthday = new Date(parseInt(birthday[2], 10), parseInt(birthday[0], 10) - 1, parseInt(birthday[1], 10));
                else if (birthday.length == 2)
                    req.body.profile.birthday = new Date(1999, parseInt(birthday[0], 10) - 1, parseInt(birthday[1], 10));
                else if (birthday.length == 1)
                    req.body.profile.birthday = new Date(parseInt(birthday[0], 10), 0, 1);

                var gender = user.gender;
                if (gender === 'male')
                    req.body.profile.gender = 0;
                else if (gender === 'female')
                    req.body.profile.gender = 1;
                else
                    req.body.profile.gender = -1;

                next();
            })
            .catch(function(err) {
                handleError(res, err);
            })
    }
};

function callAPI(path) {
    return new Promise(function(resolve, reject) {
        FB.api(path, function(err, result) {
            if (err || (result && result.error)) {
                reject(err || result.error);
            } else if (result && !result.error) {
                resolve(result);
            }
        });
    });
}