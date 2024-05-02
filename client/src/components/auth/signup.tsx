import React, { useState } from "react";
import './signup.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        dateOfBirth: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/user/signup', {
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
            setSuccessMessage('Signup successful! You will now be redirected to the login page.'); // Set success message
            setTimeout(() => {
                window.location.replace('/login'); // Redirect to login page after 2 seconds
            }, 2000);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };
    

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-form">
                <h1>Sign up for an account</h1>
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Render success message if exists */}
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="signup-input"
                /><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="signup-input"
                /><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="signup-input"
                /><br />
                <input
                    type="text"
                    id="fullname"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="signup-input"
                /><br />
                <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="signup-input"
                /><br />
                <button type="submit" className="signup-button">SIGN UP</button>
            </form>
        </>
    );
}
