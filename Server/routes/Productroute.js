const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/getproduct', productController.getProducts); //route for getting product details
router.post('/createproduct', productController.createProduct) //route fro creating a product


module.exports = router;
