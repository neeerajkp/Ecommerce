const express = require('express');
const Cart = require('../models/Cart')

//code for fetching cart values 
const getCart = async (req, res) => {
    try {
        const response = await Cart.find().populate('product').populate('category');
        res.json(response);
        console.log(response);
    } catch (error) {
        res.json({ message: "No products" })
    }
}

//code for adding items into the cart
const createCart = async (req, res) => {
    const { product, category, quantity } = req.body;

    try {
        let cartItem = await Cart.findOne({ product: product });

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Cart({
                product: product,
                category: category,
                quantity: quantity
            });
        }

        const savedCartItem = await cartItem.save();
        res.status(201).json(savedCartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//code for clearing items inside the cart
const clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({});
        res.status(200).json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createCart, getCart, clearCart };
