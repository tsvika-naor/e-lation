var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  body: String,
  title: String,
  media: [{ mediaType: Number,
            mimeType: String,
            name: String,
            data: String }],
  date: { type: Date, default: Date.now },
  tags: [String],
  likes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', postSchema);