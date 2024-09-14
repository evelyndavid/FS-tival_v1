// src/LoadingScreen.js
import React, { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import './App.css'; // Import the custom CSS

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading will last for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="loading-screen">
        <Container fluid className="text-center d-flex flex-column justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="app-name">
                SNIPPETLAB
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Spinner animation="border" role="status" className="loading-spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default LoadingScreen;
