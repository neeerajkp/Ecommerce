const Category = require('../models/Categorymodel')

//code for fetching categories from category schema
const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
        console.log(category);
    } catch (error) {
        console.log(error)
    }

}
//code for creating a new category 
const createCategory = async (req, res) => {
    const { name, tax } = req.body;
    try {
        const category = await Category.findOne({ name })
        if (!category) {
            const newcategory = new Category({ name, tax })
            await newcategory.save();
            res.json({ message: 'Category created successfully', category: newcategory });
        }
    } catch (error) {
        res.status(500).json({ message: 'Already Present', error: error.message });
    }
}

//code for fetching categories from category schema based on category name
const getCategoryByName = async (req, res) => {
    try {
        const categoryName = req.body;
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category', error });
    }
}
module.exports = { getCategory, createCategory, getCategoryByName };