import React, { useState } from "react";
import "./App.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    // Kirim data pendaftaran ke server backend menggunakan fetch
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      alert(data.message); // Menampilkan pesan dari backend

      // Jika pendaftaran berhasil, bisa arahkan ke halaman login atau home
      if (response.ok) {
        window.location.href = "/login"; // Redirect ke halaman login
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Pendaftaran gagal, coba lagi.");
    }
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
