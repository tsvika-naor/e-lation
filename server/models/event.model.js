var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  ownerId: ObjectId,
  providerId: ObjectId,
  admins: [ObjectId],
  members: [ObjectId],
  name: String,
  description: String,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  media: [{ mediatype: String,
            name: String,
            data: String }],
  private: { type: Boolean, default: false },
  address: { Street: String,
             BuildingNum: String,
             City: String,
             Country: String },
  comments: [ObjectId]
});

module.exports = mongoose.model('Event', eventSchema);