const Order = require('../models/Ordermodel');
const Product = require('../models/Productmodel');
const Category = require('../models/Categorymodel');

//code for creating a new order
const createOrder = async (req, res) => {
    const { cartItems } = req.body;

    try {
        // Calculate total amount
        let totalAmount = 0;

        // Prepare cart items with total price calculation
        const orderItems = await Promise.all(cartItems.map(async (item) => {
            const product = await Product.findById(item.product);
            const category = await Category.findById(item.category);

            if (!product || !category) {
                res.json('Not Found')
            }

            // Calculate item total price including tax
            const itemTotalPrice = product.price * item.quantity * (1 + category.tax / 100);
            totalAmount += itemTotalPrice;

            return {
                product: item.product,
                category: item.category,
                quantity: item.quantity,
                totalPrice: itemTotalPrice,
            };
        }));

        // Create new order
        const newOrder = new Order({
            cartItems: orderItems,
            totalAmount,
        });

        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//code for getting order details
const getOrder = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('cartItems.product')
            .populate('cartItems.category');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, getOrder };
