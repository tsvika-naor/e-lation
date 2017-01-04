var userRoutes = require('./user.route');

module.exports = function(app) {
    app.use('/user', userRoutes);
};