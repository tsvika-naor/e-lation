var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = new Schema({
  ownerId: Schema.Types.ObjectId,
  providerId: Schema.Types.ObjectId,
  admins: [Schema.Types.ObjectId],
  members: [Schema.Types.ObjectId],
  name: String,
  description: String,
  groupType: [String],
  address: { Street: String,
             BuildingNum: String,
             City: String,
             Country: String },
});

module.exports = mongoose.model('Group', groupSchema);