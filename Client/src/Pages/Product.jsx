import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Sidebar from '../Component/Sidebar'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    input{
        width: 300px;
        border: 1px solid black;
        height: 30px;
    }
    .forms{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    button{
        width:100%;
        height: 30px;
        border: 0;
        outline: 0;
        border-radius: 40px;
        background-color: lightblue;
        cursor: pointer;
    }
    select{
        height: 30px;
    }
`

const Product = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (e) => {
        const selectedCategoryName = e.target.value;
        setSelectedCategory(selectedCategoryName);
    };

    const Submit = async (e) => {
        e.preventDefault();
        //code for creating a new product into product sce=hema
        try {
            const response = await axios.post('http://localhost:8080/product/createproduct', { name: name, price: price, categoryId: selectedCategory });
            console.log(response)
            alert("Product Added Successfully");
        } catch (error) {
            console.error('Error submitting product:', error);
        }
        setname('')
        setprice('')
        setSelectedCategory('')
    };

    useEffect(() => {
        const getcategories = async () => {
            const res = await axios.get('http://localhost:8080/category/getcategory');// code for getting values inside category schema
            setcategory(res.data);
        }
        getcategories();
    }, [])

    return (
        <Container>
            <Sidebar />
            <form onSubmit={Submit}>
                <div className='forms'>
                    <div className='box'>
                        <label htmlFor="">Name :</label>
                        <input type="text" placeholder='Enter product name' value={name} onChange={(e) => setname(e.target.value)} required />
                    </div>
                    <div className='box'>
                        <label htmlFor="">Price :</label>
                        <input type="number" placeholder='Enter price' value={price} onChange={(e) => setprice(e.target.value)} required />
                    </div>
                    <div className='box'>
                        <label htmlFor="category">Category :</label>
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">Select a category</option>
                            {category.map(category => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button>Add Product</button>
                </div>
            </form>
        </Container>
    )
}

export default Product