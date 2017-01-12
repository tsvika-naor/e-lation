var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  name: String,
  description: String,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  media: [{ mediaType: Number,
            mimeType: String,
            name: String,
            data: String }],
  private: { type: Boolean, default: false },
  address: { street: String,
             buildingNum: String,
             city: String,
             country: String },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('Event', eventSchema);