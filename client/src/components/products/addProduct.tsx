import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function AddProduct(){
    const initialFormData = {
        name: '',
        price: '',
        description: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
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
            setFormData(initialFormData);
            console.log(data);
        } catch (error) {
            console.error('Error Adding Products!', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add a product</h1>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Add Product</button>
                <Link to="/products">View Products</Link>
            </form>
        </>
    );
}


