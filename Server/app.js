const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const userRoutes = require('./routes/Userroute')
const categoryRoutes = require('./routes/Categoryroute')
const productCategory = require('./routes/Productroute')
const orderRoutes = require('./routes/Orderroute')
const cart = require('./routes/Cartroute')
const order = require('./routes/Orderroute')

app.use('/user', userRoutes); //user routes
app.use('/category', categoryRoutes); //category routes
app.use('/product', productCategory); //product routes
app.use('/order', orderRoutes) //order routes
app.use('/cart', cart); //cart routes
app.use('/order', order); //order routes


mongoose.connect(process.env.DATABASE_URL).then(() => { console.log("Database connected") }).catch((e) => { console.log("Database not connected", e) })
app.listen(8080, () => { console.log("Server Running at port 8080") })