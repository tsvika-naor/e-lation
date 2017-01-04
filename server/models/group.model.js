var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  ownerId: ObjectId,
  providerId: ObjectId,
  admins: [ObjectId],
  members: [ObjectId],
  name: String,
  description: String,
  groupType: [String],
  address: { Street: String,
             BuildingNum: String,
             City: String,
             Country: String },
});

module.exports = mongoose.model('Group', groupSchema);