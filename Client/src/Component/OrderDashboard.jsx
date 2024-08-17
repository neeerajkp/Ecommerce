import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'daisyui/dist/full.css'; // 
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
  margin-left: 15%;

`;

const StatCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const StatTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const StatValue = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ddd;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const OrderItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const OrderDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            //code for fetching data from order schema and store it in orders usestate
            try {
                const response = await axios.get('http://localhost:8080/order/getorder');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <DashboardContainer>
            <StatCard>
                <StatTitle>Orders Overview</StatTitle>
                <StatValue>Total Orders: {orders.length}</StatValue>
            </StatCard>

            {orders.map(order => (
                <div key={order._id}>
                    <StatCard>
                        <StatTitle>Order ID: {order._id}</StatTitle>
                        <StatValue>Total Amount: ${order.totalAmount.toFixed(2)}</StatValue>
                        <StatValue>Created At: {new Date(order.createdAt).toLocaleDateString()}</StatValue>
                    </StatCard>

                    <OrderItemTable>
                        <thead>
                            <tr>
                                <TableHeader>Product</TableHeader>
                                <TableHeader>Category</TableHeader>
                                <TableHeader>Quantity</TableHeader>
                                <TableHeader>Total Price</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {order.cartItems.map(item => (
                                <tr key={item.product}>
                                    <TableCell>{item.product.name}</TableCell>
                                    <TableCell>{item.category.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
                                </tr>
                            ))}
                        </tbody>
                    </OrderItemTable>
                </div>
            ))}
        </DashboardContainer>
    );
};

export default OrderDashboard;
