import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    dateOfBirth: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error connecting to the backend:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Sign up for an account</h1>
        <h2>Please fill in your information below.</h2>
        <br />
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
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="date"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <br />
        <button type="submit">SIGN UP</button>
        Have an account? <br /><Link to="/">Login</Link>
      </form>
    </>
  );
}
