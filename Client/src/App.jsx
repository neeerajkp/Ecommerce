import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Admin from './Pages/Admin'
import User from './Pages/User'
import Cart from './Pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/category' exact element={<Category />} />
        <Route path='/product' exact element={<Product />} />
        <Route path='/admin-dashboard' exact element={<Admin />} />
        <Route path='/user-dashboard' exact element={<User />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
