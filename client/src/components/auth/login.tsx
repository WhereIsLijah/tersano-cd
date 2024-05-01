import React, { useState } from 'react';

export default function Login(){
    return (
        <>
            <form >
                    <h1>Customer Login</h1>
                    <h2>Please enter your e-mail and password.</h2> 
                    <input type="email" id="email" name="email" placeholder="E-mail Address" required />
                    <br />
                    <input type="password" id="password" name="password" placeholder="Password" required/>
                    <br />
                    <button type="submit">LOGIN</button><br />
                    Don't have an account yet? <br />
                    <button type="submit">SIGN UP</button>
            </form>
        </>
    );
};

