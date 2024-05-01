import React, { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
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
        } catch (error) {
            console.error('Error connecting to the backend:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Customer Login</h1>
                <h2>Please enter your e-mail and password.</h2>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">LOGIN</button>
                <br />
                Don't have an account yet? <br />
                {/* Additional UI elements can go here */}
            </form>
        </>
    );
}
