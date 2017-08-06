var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fieldSchema = new Schema({
  name: String,
  keywords: [String]
});

module.exports = mongoose.model('Field', fieldSchema);