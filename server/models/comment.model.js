var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  userId: ObjectId,
  parentId: ObjectId,
  text: String,
  date: { type: Date, default: Date.now },
  likes: {type: Number, default: 0},
  comments: [ObjectId]
});

module.exports = mongoose.model('Comment', commentSchema);