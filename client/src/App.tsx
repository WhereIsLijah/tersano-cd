import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import ProductList from './components/products/productList';
import AddProduct from './components/products/addProduct';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductList />} />  
          <Route path="/products/addproduct" element={<AddProduct />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
