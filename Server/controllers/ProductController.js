const Product = require('../models/Productmodel')
const Category = require('../models/Categorymodel')

//code for getting product details
const getProducts = async (req, res) => {
    try {
        const product = await Product.find().populate('category');
        res.json(product);
        console.log(product);
    } catch (error) {
        res.json({ message: "No products" })
    }
}

//code for creating a new product 
const createProduct = async (req, res) => {
    const { name, price, categoryId } = req.body;
    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(400).json({ message: 'Category not found' });
        }

        const newProduct = new Product({
            name,
            price,
            category: categoryId
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = { getProducts, createProduct };