var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname:   String,
  email:   String,
  phone:   String,
  gender:   String,
  birthday: Date,
  address: {Street: String,
            BuildingNum: String,
            City: String,
            Country: String
          },
  isProvider: { type: Boolean, default: false },
  providerId: Schema.Types.ObjectId
});

module.exports = mongoose.model('User', userSchema);