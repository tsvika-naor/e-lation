// Load express
var express = require('express');
var app     = express();
app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/www'));

// Initialize auth
//var auth = require('./modules/googleIdTokenAuth')(pool);
//var auth = require('./modules/googleIdTokenAuth-Mock');

// Bind to port
app.listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});