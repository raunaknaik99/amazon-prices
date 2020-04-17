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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);