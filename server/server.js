// Load express
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
require('./routes/index')(app);

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/www'));

// Initialize auth
//var auth = require('./modules/googleIdTokenAuth')(pool);
//var auth = require('./modules/googleIdTokenAuth-Mock');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// Bind to port
app.listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});