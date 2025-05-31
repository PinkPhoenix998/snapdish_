import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios"; // Import axios untuk mengirim request HTTP
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Untuk menampilkan pesan login
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Kirim data login ke backend
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log("Respon dari backend:", response.data);

      // Tampilkan pesan dari server
      setMessage(response.data.message);

      // Jika login berhasil, arahkan ke halaman home
      if (response.data.message === "Login berhasil") {
        localStorage.setItem("userName", response.data.name); // Simpan nama dari respons
        navigate("/home");
      }
      
      
    } catch (error) {
      setMessage("Error connecting to server or invalid credentials.");
    }
  
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

      {message && <p>{message}</p>} {/* Menampilkan pesan */} {/* Pesan jika login gagal atau berhasil */}

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
        Don't Have an Account?
        <a
          href="/signup"
          style={{ color: "#A9C561", textDecoration: "none", marginLeft: "5px" }}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Login;

