//Schema for storing values of orders

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: [
        {
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
                default: 1,
                required: true,
            },
            totalPrice: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
