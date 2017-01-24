var path = require('path');
var userRoutes = require('./user.route');
var authRoutes = require('./auth.route');

module.exports = function(app, rootDir) {
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
    
    // Catch all requests for assets (js, css, etc.)
    app.get('*.*$', function(req, res) {
        res.sendFile(path.join(rootDir, 'www', req.path));
    });

    // Catch all other routes and return the index file
    app.get('*', function(req, res) {
        res.sendFile(path.join(rootDir, 'www', 'index.html'));
    });
};