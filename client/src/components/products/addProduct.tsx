import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addproduct.css"; 

export default function AddProduct() {
    const navigate = useNavigate();
    const initialFormData = {
        name: '',
        price: '',
        description: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/product/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setSuccessMessage("Product added successfully!"); 
            setFormData(initialFormData); 
            
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="add-product-container">
            <h1 className="add-product-title">Add Product</h1>
            <form onSubmit={handleSubmit} className="add-product-form">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                /><br />
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="input-field"
                    required
                /><br />
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="input-field"
                    required
                /><br />
                <button type="submit" className="submit-button">Add Product</button><br/>
                <button type="button" onClick={() => navigate('/products')} className="submit-button-view">View Products</button> 
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}
