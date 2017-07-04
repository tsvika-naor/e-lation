var Promise = require("bluebird");
var User = require('../models/user.model');
var Provider = require('../models/provider.model');
var Group = require('../models/group.model');
var Event = require('../models/event.model');
var google = require('./google.service');
var facebook = require('./facebook.service');
var handleError = require('../routes/utils');

module.exports = {
    verifyToken: function (req, res, next) {
        var provider = req.get('provider');
        console.log("Verify " + provider + " token");
        if (provider === 'google') {
            google.verifyToken(req, res, next);
        } else if (provider === 'facebook') {
            facebook.verifyToken(req, res, next);
        } else {
            handleError(res, {
                name: "InvalidAuthProvider",
                message: "The Authentication Provider \"" + provider + "\" is not supported."
            }, 401);
        }
    },

    verifyUser: function (req, res, next) {
        var provider = req.get('provider');
        User.findOne({ 'auth_id.kind': provider, 'auth_id.value': req.body.userId }, function (err, user) {
            if (err) {
                handleError(res, err, 401);
            } else if (user === null) {
                handleError(res, {
                    name: "Unauthorized",
                    message: "The user does not exist."
                }, 401);
            } else {
                req.body.user = user;
                next();
            }
        });
    },

    getProfile: function (req, res, next) {
        var provider = req.get('provider');
        console.log("Get " + provider + " profile");
        if (provider === 'google') {
            google.getProfile(req, res, next);
        } else if (provider === 'facebook') {
            facebook.getProfile(req, res, next);
        } else {
            handleError(res, {
                name: "InvalidAuthProvider",
                message: "The Authentication Provider \"" + provider + "\" is not supported."
            }, 401);
        }
    },

    getUserData: function (req, res, next) {
        var userData = {
            user: req.body.user,
            links: {
                userLinks: [
                    { _id: req.body.user._id, type: 'user', name: 'Profile' }
                ],
                providers: [],
                groups: [],
                events: []
            }
        };

        getProviderId(userData)
            .then(getProviders)
            .then(getGroups)
            .then(getEvents)
            .then(function (data) {
                delete data.user.providerId;
                req.body.userData = data;
                next();
            })
            .catch(function (err) {
                handleError(res, err);
            });
    }
};

function getProviderId(data) {
    return new Promise(function (resolve, reject) {
        // Skip the query if user is not a Provider
        if (!data.user.isProvider) {
            resolve(data);
        } else {
            // User's Provider page
            Provider.findOne({ user: data.user._id }, function (err, provider) {
                if (err) {
                    reject(err);
                } else if (provider === null) {
                    reject({
                        name: "ProviderNotFound",
                        message: "No Provider account found for user."
                    });
                } else {
                    data.user.providerId = provider._id;
                    data.links.userLinks.push({ _id: provider._id, type: 'provider', name: 'Provider Page' });
                    resolve(data);
                }
            });
        }
    });
}

function getProviders(data) {
    return new Promise(function (resolve, reject) {
        // Providers that user is a customer of
        Provider.find({ 'fields.customers': { "$in": [data.user._id] } })
            .populate({ path: 'user', select: '_id firstName lastName' })
            .exec(function (err, providers) {
                if (err) {
                    reject(err);
                } else {
                    data.links.providers = providers;
                    resolve(data);
                }
            });
    });
}

function getGroups(data) {
    return new Promise(function (resolve, reject) {
        // Groups that user is an admin/member/owner/provider of
        Group.find()
            .or([
                { owner: data.user },
                { Provider: data.user.providerId },
                { admins: { "$in": [data.user._id] } },
                { members: { "$in": [data.user._id] } }
            ])
            .exec(function (err, groups) {
                if (err) {
                    reject(err);
                } else {
                    data.links.groups = groups;
                    resolve(data);
                }
            });
    });
}

function getEvents(data) {
    return new Promise(function (resolve, reject) {
        // Events that user is an admin/member/owner/provider of
        Event.find()
            .or([
                { owner: data.user },
                { Provider: data.user.providerId },
                { admins: { "$in": [data.user._id] } },
                { members: { "$in": [data.user._id] } }
            ])
            .exec(function (err, events) {
                if (err) {
                    reject(err);
                } else {
                    data.links.events = events;
                    resolve(data);
                }
            });
    });
}