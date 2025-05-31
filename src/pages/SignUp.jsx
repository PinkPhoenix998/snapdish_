import React, { useState } from "react";
import "./App.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Nama: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
        Already Have an Account?
        <a href="/login" style={{ color: "#A9C561", textDecoration: "none", marginLeft: "5px" }}>
          Login
        </a>
      </p>
    </div>
  );
}

export default SignUp;
