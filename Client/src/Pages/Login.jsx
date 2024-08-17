import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box{
        display: flex;
        flex-direction: column;
    }
    input{
        width: 300px;
        border: 1px solid black;
        height: 30px;
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
    h1{
        font-size: 30px;
    }

`


const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    const Submit = async (e) => {
        e.preventDefault();
        //code for checking whether the username and password is correct and grant access
        try {
            const response = await axios.post('http://localhost:8080/user/postusers', { email: email, password: password })
            if (response.data == 'admin') {
                navigate('/admin-dashboard')
            }
            else if (response.data == 'user') {
                navigate('/user-dashboard')
            }
            else {
                alert('No user Found')
            }
        } catch (error) {
            alert("Please enter correct values")
        }
    }

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={Submit}>
                <div className="forms">
                    <div className='box'>
                        <label htmlFor="">Username :</label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className='box'>
                        <label htmlFor="">Password :</label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button>Login</button>
                </div>
            </form>
        </Container>
    )
}

export default Login