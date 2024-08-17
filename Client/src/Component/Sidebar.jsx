import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 15%;
    height: 100vh;
    display: flex;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    flex-direction: column;
    background-color: aliceblue;
    align-items: center;
    gap: 30px;
    position: fixed;
    left: 0;
    a{
        text-decoration: none;
        color: black;
    }
    .box{
        background-color: lightblue;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Sidebar = () => {
    return (
        //a sidebar component to display in admin dashboar for navigating through pages
        <Container>
            <h3>Admin </h3>
            <div className='box'><a href="/admin-dashboard">Dashboard</a></div>
            <div className='box'><a href="/category">Add Category</a></div>
            <div className='box'><a href="/product">Add Product</a></div>
            <div className='box'><a href="/">Log out</a></div>

        </Container>
    )
}

export default Sidebar