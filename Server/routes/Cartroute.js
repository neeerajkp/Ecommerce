const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

router.post('/postcart', cartController.createCart); //route for creating a cart
router.get('/getcart', cartController.getCart); //route for getting cart values
router.delete('/clearcart', cartController.clearCart) //route for deleteing cart values


module.exports = router;
