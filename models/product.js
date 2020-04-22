const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);