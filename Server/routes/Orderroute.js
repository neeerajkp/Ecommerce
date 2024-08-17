const express = require('express');
const router = express.Router();
const orders = require('../controllers/OrderController');

router.post('/createorder', orders.createOrder); //route for creating an order
router.get('/getorder', orders.getOrder); //route for getting order details

module.exports = router;
