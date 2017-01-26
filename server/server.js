// Load express
var app     = require('express')();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://heroku_7h2r3npw:s4i8a900gf6p41bt1me1gru0u6@ds151228.mlab.com:51228/heroku_7h2r3npw');
var db = mongoose.connection;

require('./routes/index')(app, __dirname);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// Bind to port
app.listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});