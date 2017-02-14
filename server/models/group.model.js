var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  name: String,
  description: String,
  avatar: { mimeType: String,
            data: String },
  groupType: [String],
  address: { street: String,
             buildingNum: String,
             city: String,
             country: String },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Group', groupSchema);