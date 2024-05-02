import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './login.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate(); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response);
            console.log(formData);
            const data = await response.json();
            console.log(data);
            if (data.token) { 
                localStorage.setItem('token', data.token); 
                setTimeout(() => navigate('/products'), 100);
            }
        } catch (error) {
            console.error('Error connecting to the backend:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Customer Login</h1>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="login-input" />
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="login-input" />
                <br />
                <button type="submit" className="login-button">LOGIN</button>
            </form>
        </>
    );
}
