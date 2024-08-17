const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/getusers', userController.getUsers); //route for getting user values
router.post('/postusers', userController.postUsers); //route for creating a new user


module.exports = router;
