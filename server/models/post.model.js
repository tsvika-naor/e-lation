var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  userId: Schema.Types.ObjectId,
  body: String,
  title: String,
  media: [{ mediatype: String,
            name: String,
            data: String }],
  date: { type: Date, default: Date.now },
  tags: [String],
  likes: { type: Number, default: 0 },
  comments: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Post', postSchema);