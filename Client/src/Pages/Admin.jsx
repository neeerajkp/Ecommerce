import React from 'react'
import Sidebar from '../Component/Sidebar'
import OrderDashboard from '../Component/OrderDashboard'

const Admin = () => {
    return (
        //admin dashboard which calls sidebar and orgerdashboard component
        <div>
            <Sidebar />
            <OrderDashboard />
        </div>
    )
}

export default Admin