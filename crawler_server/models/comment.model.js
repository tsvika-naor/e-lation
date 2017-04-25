var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  parent: { type: Schema.Types.ObjectId, ref: 'Comment' },
  subject: { type: Schema.Types.ObjectId, ref: 'Post' },
  text: String,
  date: { type: Date, default: Date.now },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Comment', commentSchema);