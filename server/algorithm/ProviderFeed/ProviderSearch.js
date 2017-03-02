var Provider = require('../../models/provider.model');


module.exports = function (app) {
    app.post('/get-data-for-search', function (req, res) {
        //query is the name of the data get from the user to search
        Provider.find({ field: req.body.query, "businessAddress.City": User.City })
            .sort({ rank: "desc" })
            .exec(function (err, posts) {
                if (err) handleError(err);
                //retun the Provider by the city address and field
                res.JSON(Provider);
            });
    });
}