import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SideUser from '../Component/SideUser'
import styled from 'styled-components'
const Container = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 20px;
  margin-left: 16%;
  text-align: center;

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
  }

  td {
    background-color: #fafafa;
  }
  button{
        width:20%;
        height: 40px;
        border: 0;
        margin-top: 20px;
        outline: 0;
        border-radius: 40px;
        background-color: lightblue;
        cursor: pointer;
        margin-left: 5px;
  }
  h1{
    font-size: 20px;
  }
`

const Cart = () => {
    const [cart, setcart] = useState([]);
    const handleSendCartData = async (e) => {
        e.preventDefault();
        //code for sending product details to cart
        try {
            if (!cart || cart.length === 0) {
                alert("No Products Available in Cart");
                return;
            }
            const response = await axios.post('http://localhost:8080/order/createorder', { cartItems: cart });
            console.log('Order created successfully:', response.data);
            alert('Order created successfully!');
        } catch (error) {
            console.error('Error creating order:', error.message);
            alert('Failed to create order.');
        }
    };
    const Clearcart = async (e) => {
        e.preventDefault();
        //code for clearing cart items after the user buys product successfully
        try {
            const response = await axios.delete('http://localhost:8080/cart/clearcart');
            console.log('Cart cleared successfully');
        } catch (error) {
            console.error('Error creating order:', error.message);
        }
    };

    useEffect(async () => {
        //code for fetching data from cart to display in cart page
        try {
            const response = await axios.get('http://localhost:8080/cart/getcart');
            setcart(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("error fetching data")
        }
    }, [])

    return (
        <Container>
            <SideUser />
            <h1>Shopping Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Tax</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item._id}>
                            <td>{item.product.name}</td>
                            <td>${item.product.price}</td>
                            <td>{item.category.name}</td>
                            <td>{item.category.tax}%</td>
                            <td>{item.quantity}</td>
                            <td>${(item.product.price * item.quantity * (1 + item.category.tax / 100)).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSendCartData}>Place Order</button>
            <button onClick={Clearcart}>Clear Cart</button>
        </Container>
    )
}

export default Cart