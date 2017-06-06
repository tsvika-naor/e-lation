/**
 * Created by mac on 1/29/17.
 */

var app = require('express')();
var request = require('request-promise');
var exphbs = require('express-handlebars');
var schedule = require('node-schedule')
var cheerio = require('./services/cheerio-loader.service');
var postArticles = require('./services/poster.service').postArticles;

var hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

var products = [];

var sites = {
    galtzhayek: require('./modules/gal-tzhayek.module'),
    beshape: require('./modules/beshape.module'),
};

var job = schedule.scheduleJob({ hour: 1, minute: 0 }, function () {
    for (var site in sites) {
        if (!sites.hasOwnProperty(site))
            continue;

        console.log("Crawling " + sites[site].source + " - started.");
        request({ uri: sites[site].link, transform: cheerio })
            .then(sites[site].getLastDate)
            .then(sites[site].parse)
            .then(postArticles)
            .then(function (siteData) {
                products.push(siteData); //TODO: Insert => Upsert || If exists already, edit; else push
                console.log("Crawling " + siteData.source + " - finished successfully (" + siteData.newItems + " posts added).");
            })
            .catch(function (err) {
                console.log("Crawling " + (err.site.source || sites[site].source) + " - failed.");
                console.error(err.stack.match(/^(.+\n.+\n.+\n)/)[0] + "...");
            });
    }
});

app.get('/', function (req, res) {
    res.render('index', { products: products });
});

app.listen(app.get('port'), function () {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});