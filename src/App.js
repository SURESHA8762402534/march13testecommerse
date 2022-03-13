import React from 'react'
import Products from './component/products/Products'
import  "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Nav from './component/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Cart from './component/cart/Cart';


const App = () => {
  return (
    <div>
        <Nav/>
       {/* <Routes>
           <Route path="/Products" element={<Products/>}/>
           <Route path="/contact/me" element={<ContactMe />} />
       </Routes> */}
       <Products/>
       <Cart/>


    </div>
  )
}

export default App