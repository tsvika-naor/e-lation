var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName:   String,
  email:   String,
  phone:   String,
  gender:   Number,
  birthday: Date,
  avatar: { mimeType: String,
            data: String },
  address: {street: String,
            buildingNum: String,
            city: String,
            country: String
          },
  isProvider: { type: Boolean, default: false },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider' }
});

module.exports = mongoose.model('User', userSchema);