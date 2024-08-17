//Schema for storing values in a cart

const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    },
});

module.exports = mongoose.model('Cart', CartSchema);
