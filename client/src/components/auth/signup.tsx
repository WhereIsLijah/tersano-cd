import React, { useState } from "react";

export default function Signup() {
  return (
    <>
      <form>
        <h1>Sign up for an account</h1>
        <h2>Please fill in your information below.</h2>
        <input type="text" id="username" placeholder="Username" required />{" "}
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail Address"
          required
        />{" "}
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />{" "}
        <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full Name"
          required
        />{" "}
        <br />
        <input type="date" placeholder="Date of Birth" />{" "}
        <br />
        <button type="submit">SIGN UP</button>
      </form>
    </>
  );
}
