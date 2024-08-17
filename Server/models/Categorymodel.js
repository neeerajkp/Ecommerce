//Schema for storing values in  category

const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    tax: { type: Number, required: true }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;