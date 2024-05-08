import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

interface Product{
    _id: string;
    name: string;
    price: string;
    description: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]); 
    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://localhost:4000/product/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error Fetching Products!', error);
            }
        };
        fetchProducts();
    }, []);


const deleteProduct = async (productid: string) => { 
    try {
        const response = await fetch(`http://localhost:4000/product/${productid}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productid));
    } catch (error) {
        console.error('Error Deleting Product!', error);
    }

};

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product._id}>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
            <Link to="/products/addproduct">Add Products</Link>
        </div>
    );
}

export default ProductList;
