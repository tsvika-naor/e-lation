// Load ExpressJS
var app = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Configure ExpressJS
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure & Connect to MongoDB w/ Mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://heroku_7h2r3npw:s4i8a900gf6p41bt1me1gru0u6@ds151228.mlab.com:51228/heroku_7h2r3npw');
var db = mongoose.connection;

// Load Routes
require('./algorithms/index')(app);
require('./routes/index')(app, __dirname);

// Listen to DB Events
db.on('error', function (error) {
    console.error(error.name + ": " + error.message);
});

db.once('open', function () {
    console.log("Connected to MongoDB");
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err);
});

// Bind to port
app.listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});