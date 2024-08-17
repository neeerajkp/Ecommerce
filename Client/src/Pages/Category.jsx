import React from 'react'
import axios from 'axios'
import { useState } from 'react'
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
    }
    input{
        width: 300px;
        height: 30px;
        border: 1px solid black;
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
    .forms{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`

const Category = () => {
    const [name, setname] = useState('')
    const [tax, settax] = useState('')

    const Add = async (e) => {
        e.preventDefault();
        //code for adding a new category into category schema
        try {
            const response = await axios.post('http://localhost:8080/category/createcategory', { name: name, tax: tax });
            console.log(response.data);
            alert("Category Added Successfully")
        } catch (error) {
            alert("Category not Added")
        }
        setname('');
        settax('');

    }


    return (
        <Container>
            <Sidebar />
            <form onSubmit={Add}>
                <div className="forms">
                    <div className='box'>
                        <label htmlFor="">Name :</label>
                        <input type="text" placeholder='Enter Category' value={name} onChange={(e) => setname(e.target.value)} required />

                    </div>
                    <div className='box'>
                        <label htmlFor="">Tax :</label>
                        <input type="number" placeholder='Enter Tax' value={tax} onChange={(e) => settax(e.target.value)} required />
                    </div>
                    <button>Add Category</button>
                </div>
            </form>
        </Container>
    )
}

export default Category