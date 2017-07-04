var feedRoutes = require('./user-feed.algorithm');
var searchRoutes = require('./search.algorithm');

module.exports = function (app) {
    app.all('/api/*', function (req, res, next) {
        var token = req.get('Authorization');
        if (token) {
            req.token = token.slice(7);
        }
        next();
    });

    app.use('/api/feed', feedRoutes);
    app.use('/api/search', searchRoutes);
};