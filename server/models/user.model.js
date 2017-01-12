var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname:   String,
  email:   String,
  phone:   String,
  gender:   Number,
  birthday: Date,
  avatar: { mimetype: String,
            data: String },
  address: {Street: String,
            BuildingNum: String,
            City: String,
            Country: String
          },
  isProvider: { type: Boolean, default: false },
  provider: { type: Schema.Types.ObjectId, ref: 'Provider' }
});

module.exports = mongoose.model('User', userSchema);