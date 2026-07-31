import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './utils/localStorage'


const App = () => {

  useEffect (() => {
    setLocalStorage ()
  },)
  
  return (
  <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashBoard /> */}
  </>
  )
}

export default App