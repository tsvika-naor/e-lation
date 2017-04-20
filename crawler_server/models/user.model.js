var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  auth_id: { kind: String, value: String },
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  gender: Number,
  interests: [String],
  birthday: Date,
  avatar: {
    mimeType: String,
    data: String
  },
  address: {
    street: String,
    buildingNum: String,
    city: String,
    country: String
  },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isProvider: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);