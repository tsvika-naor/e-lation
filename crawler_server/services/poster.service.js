var Promise = require("bluebird");
var mongoose = require('mongoose');
var Post = require('../models/post.model');

mongoose.Promise = Promise;
mongoose.connect('mongodb://heroku_7h2r3npw:s4i8a900gf6p41bt1me1gru0u6@ds151228.mlab.com:51228/heroku_7h2r3npw');

mongoose.connection.on('error', function (error) {
    console.error(error.name + ": " + error.message);
});

mongoose.connection.once('open', function () {
    console.log("Connected to MongoDB");
});

module.exports = {
    postArticles: function (siteData) {
        return new Promise(function (resolve, reject) {
            Post.create(siteData.items, function (err) {
                if (err) reject(err);

                Post.findOne({ source: siteData.source }).sort('-date').exec(function (err, post) { //test needed
                    if (err) reject(err);

                    resolve(siteData);
                });
            });
        });
    },

    getLastDate: function (source) {
        return new Promise(function (resolve, reject) {
            Post.findOne({ source: source }).sort('-date').exec(function (err, post) { //test needed
                if (err) reject(err);
                if (post === null) resolve(null);
                else resolve(post.date);
            });
        });
    }
};