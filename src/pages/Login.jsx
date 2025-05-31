import React, { useState } from "react";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
        Don't Have an Account?
        <a href="/signup" style={{ color: "#A9C561", textDecoration: "none", marginLeft: "5px" }}>
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Login;
