

import React, { useState } from "react";
import "./Login.css"; 
import { Container } from "react-bootstrap";

const Login = ({ setPage, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username); 
      setPage("options"); 
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setPage("signup"); 
  };

  return (
    <Container>
      <h1 className="text-center mb-4 vibrant-heading" style={{ color: "white" }}>
  Welcome to CodePlayground
</h1>


      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1 style={{ color: "white" }}>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={handleRegisterClick}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
