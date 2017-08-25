var path = require('path');
var authRoutes = require('./auth.route');
var userRoutes = require('./user.route');
var groupRoutes = require('./group.route');
var eventRoutes = require('./event.route');
var feedRoutes = require('./feed.route');
var searchRoutes = require('./algorithms/search.algorithm');
var providerRoutes = require('./provider.route');

module.exports = function (app, rootDir) {
    app.all('/api/*', function (req, res, next) {
        var token = req.get('Authorization');
        if (token) {
            req.token = token.slice(7);
        }
        next();
    });
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/group', groupRoutes);
    app.use('/api/event', eventRoutes);
    app.use('/api/feed', feedRoutes);
    app.use('/api/search', searchRoutes);
    app.use('/api/provider', providerRoutes);

    // Catch all requests for assets (js, css, etc.)
    app.get('*.*$', function (req, res) {
        res.sendFile(path.join(rootDir, 'www', req.path));
    });

    // Catch all other routes and return the index file
    app.get('*', function (req, res) {
        res.sendFile(path.join(rootDir, 'www', 'index.html'));
    });
};