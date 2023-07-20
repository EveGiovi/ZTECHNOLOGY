import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ResponsiveAppBar from './components/molecules/ResponsiveAppBar/ResponsiveAppBar'
import  Home from '@pages/home/index'
import Auth from '@pages/auth/auth'
import  Logins from '@pages/logins/index'
import  Users from '@pages/users/index'
import  Customers from '@pages/Customers/index'
import  Product_qotes from '@pages/product_qotes/index'
import  Products from '@pages/Products/index'
import  Quotations from '@pages/Quotations/index'
import '@assets/app.css'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { createTheme,ThemeProvider} from '@mui/material'

import React from 'react'

function App() {
  const user = useSelector ((state) => state.auth.user)
  const theme= createTheme({
    palette:{
      primary:{
        main:"rgb(56,21,173)",
      },
      secondary:{
        main:"rgb(47,167,237)",
      },
    }
  })
  return (
<ThemeProvider theme={theme}>
    <Router>
      {/* //para mostrar u ocultar el menu despues de inciar sesion */}
      {
      Cookies.get('token') &&
      <ResponsiveAppBar/>
      }
      {/* {
        user &&
      <ResponsiveAppBar/>
      } */}
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/autenticar' element={<Auth/>}/> 
        <Route path='/logins' element={<Logins/>} /> 
        <Route path='/usuarios' element={<Users/>} /> 
        <Route path='/clientes' element={<Customers/>} /> 
        <Route path='/productos' element={<Products/>} /> 
        <Route path='/detallecotizacion' element={<Product_qotes/>} /> 
        <Route path='/cotizaciones' element={<Quotations/>} /> 
      </Routes>
    </Router>
</ThemeProvider>
     
  )
}

export default App
