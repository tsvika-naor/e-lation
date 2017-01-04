var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({
  bio: String,
  rank: Number,
  reviews: [ObjectId],
  businessAddress: { Street: String,
                     BuildingNum: String,
                     City: String,
                     Country: String },
  userId: ObjectId
});

module.exports = mongoose.model('Provider', providerSchema);