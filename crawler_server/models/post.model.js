var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  body: String,
  title: String,
  source: String,
  hyperlink: String,
  rtl: { type: Boolean, default: false },
  media: [{ mediaType: Number,
            mimeType: String,
            data: String }],
  date: { type: Date, default: Date.now },
  tags: [String],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', postSchema);