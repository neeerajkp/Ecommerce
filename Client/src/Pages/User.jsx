// src/pages/User.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideUser from '../Component/SideUser';
import Product from '../Component/Productcom';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 16px;
  margin-left: 15%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const User = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            //code for fetching the products from product schema
            try {
                const response = await axios.get('http://localhost:8080/product/getproduct');
                setProducts(response.data);
                console.log('Fetched products:', response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container>
            <SideUser />
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </Container>
    );
};

export default User;
