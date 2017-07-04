var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  date: { type: Date, default: Date.now },
  rating: {type: Number, min: -3, max: 3}
});

module.exports = mongoose.model('Review', reviewSchema);