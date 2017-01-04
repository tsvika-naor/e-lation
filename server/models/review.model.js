var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  userId: ObjectId,
  text: String,
  date: { type: Date, default: Date.now },
  rating: {type: Number, min: 1, max: 5}
});

module.exports = mongoose.model('Review', reviewSchema);