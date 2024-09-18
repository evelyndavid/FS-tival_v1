import React, { useState } from "react";
import "./Login.css"; 
import { Container } from "react-bootstrap";

const SignUp = ({ setPage, onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        onSignUp({ name, email }); 
        setPage("options");
      } else {
        alert("Passwords do not match!");
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <Container>
      <h1 className="text-center mb-4 vibrant-heading">Sign Up for CodePlayground</h1>
      
      <div className="wrapper">
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-envelope"></i>
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

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className="btn">
            Sign Up
          </button>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setPage("login")}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
