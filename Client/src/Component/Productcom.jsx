// src/components/Product.js
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  height: 160px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  background-color: aliceblue;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const ProductCategory = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const ProductTax = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

const BuyButton = styled.button`
  width: 80px;
  height: 25px;
  border: 0;
  outline: 0;
  border-radius: 30px;
  background-color: lightblue;
  cursor: pointer;
`;

const Product = ({ product }) => {
  const handleAddToCart = async () => {
    //code for sending product details to cart when user buy a product
    try {
      const response = await axios.post('http://localhost:8080/cart/postcart', { product: product._id, category: product.category._id, quantity: product.quantity });
      console.log('Product added to cart:', response.data);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error.message);
      alert('Failed to add product to cart.');
    }
  };

  return (
    //Product component for displaying each product
    <ProductContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <ProductCategory>Category: {product.category.name}</ProductCategory>
      <ProductTax>Tax: {product.category.tax}%</ProductTax>
      <BuyButton onClick={handleAddToCart}>Buy</BuyButton>
    </ProductContainer>
  );
};

export default Product;
