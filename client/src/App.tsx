import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/authProvider";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import ProtectedRoute from "./components/auth/protectedRoute";
import ProductList from "./components/products/productList";
import AddProduct from "./components/products/addProduct";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path="/products/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}


export default App;
