var parse = require('../services/parse.service');
var getLastDate = require('../services/poster.service').getLastDate;

var siteData = {
    source: "beShape",
    link: 'http://beshape.co.il/category/%D7%91%D7%9C%D7%95%D7%92/',
    lastDate: null,
    rtl: true,
    newItems: 0,
    items: []
};

module.exports = {
    source: siteData.source,
    link: siteData.link,
    getLastDate: function ($) {
        return getLastDate(siteData.source)
            .then(function (date) {
                siteData.lastDate = date;
                return $;
            });
    },
    parse: function ($) {
        var foundItems = [];
        $("[class^='media small']").each(function (i, obj) {
            var title = $(obj).find('.media-heading.entry-title').text();
            var image = $(obj).find('.media-object').attr('src');
            var link = $(obj).find('.pull-left.image-link').attr('href');
            var desc = $(obj).find('.entry-excerpt').text();
            var date = parse.date($(obj).find('.entry-date').attr('datetime'), {d:2,m:1,y:0});
            var dateObj = parse.toDate(date, {});

            var item = {
                title: title,
                source: siteData.source,
                rtl: siteData.rtl,
                media: [{ mediaType: 0, data: image }],
                hyperlink: link,
                date: dateObj,
                body: desc,
                tags: ["fitness", "nutrition"]
            };

            if (siteData.lastDate === null || item.date > siteData.lastDate) {
                console.log("Crawling " + siteData.source + " - entry found: " + dateObj + ".");
                foundItems.push(item);
            }
        });

        Array.prototype.unshift.apply(siteData.items, foundItems);
        siteData.newItems = foundItems.length;
        return siteData;
    }
};