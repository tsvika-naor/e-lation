var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({
    bio: String,
    rank: Number,
    services: [{
        name: String,
        description: String,
        customers: [{
            user: { type: Schema.Types.ObjectId, ref: 'User' },
            confirmed: { type: Boolean, default: false }
        }]
    }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    businessAddress: {
        street: String,
        buildingNum: String,
        city: String,
        country: String
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Provider', providerSchema);