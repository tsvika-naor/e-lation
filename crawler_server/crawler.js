/**
 * Created by mac on 1/29/17.
 */

var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var app = express();

var hbs = exphbs.create({});

mongoose.connect('mongodb://heroku_78mgh6c4:le1ethf1qt6h5qj1o0lv4epqea@ds151049.mlab.com:51049/heroku_78mgh6c4');
var db = mongoose.connection;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crawlSchema = new Schema({
    title: String,
    image: String,
    link: String,
    date: Date,
    desc: String,
});

var Crawl = mongoose.model('Crawled', crawlSchema);

app.engine('handlebars', hbs.engine);

var server = app.listen(3000);
app.set('view engine', 'handlebars');

var products = [];

request('http://galtzhayek.com/%D7%91%D7%9C%D7%95%D7%92/page/7/', function (err, res, body) {
    var $ = cheerio.load(body);
    var productcolxn = {
        source: "Gal",
        link: 'http://galtzhayek.com/%D7%91%D7%9C%D7%95%D7%92/page/7/',
        items: []
    };

    $("[class^='media small']").each(function (i, obj) {
        var title = $(obj).find('.media-heading').text();//text();
        var image = $(obj).find('.media-object').attr('src');
        var link = $(obj).find('.pull-left.image-link').attr('href');
        var desc = $(obj).find('.entry-excerpt').text();
        var fromDay = $(obj).find('.entry-date').text().split("/");
        var fromHour = $(obj).find('.entry-time').text().split(":");
        var date = new Date(fromDay[2], fromDay[1] - 1, fromDay[0], fromHour[0], fromHour[1], 0, 0);

        var item = {
        title: title,
            image: image,
            link: link,
            date: date,
        desc: desc


    };

        Crawl.create(item, function (err, doc) {
            if (err) handleError(err);
        });

        productcolxn.items.push(item);
    });

    products.push(productcolxn);
    console.log(products);
});


app.get('/', function (req, res) {
    res.render('index', { products: products });
});
