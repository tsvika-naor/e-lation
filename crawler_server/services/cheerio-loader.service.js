var cheerio = require('cheerio');

module.exports = function (body) {
    return cheerio.load(body);
};