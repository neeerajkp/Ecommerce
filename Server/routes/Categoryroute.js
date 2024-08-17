const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');

router.get('/getcategory', categoryController.getCategory); //route for getting category
router.get('/:name', categoryController.getCategoryByName); //route for getting category based on name
router.post('/createcategory', categoryController.createCategory); //route fro creating a category


module.exports = router;
