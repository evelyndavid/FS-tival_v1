import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./App.css"; // For additional vibrant CSS

const UserInput = ({ setPage, onNameChange }) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleProceed = () => {
    if (name && occupation) {
      onNameChange(name); // Pass the name up to the parent component
      setPage("options");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="text-center mb-4 vibrant-heading">Welcome to CodePlayground</h1>
      <Form className="w-50">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="occupation" className="mt-3">
          <Form.Label>Occupation</Form.Label>
          <Form.Select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="">Select Occupation</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="others">Others</option>
          </Form.Select>
        </Form.Group>

        <Button className="mt-4 w-100 vibrant-button" onClick={handleProceed}>
          Proceed
        </Button>
      </Form>
    </Container>
  );
};

export default UserInput;

