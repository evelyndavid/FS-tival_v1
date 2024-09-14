import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

const OptionsPage = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center vibrant-heading mb-5">Choose an Option</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card
            className="clickable-card vibrant-card"
            onClick={() => alert('Programming Clicked')}
          >
            <Card.Body>
              <Card.Title>Programming</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="clickable-card vibrant-card"
            onClick={() => alert('Flashcards Clicked')}
          >
            <Card.Body>
              <Card.Title>Flashcards</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="clickable-card vibrant-card"
            onClick={() => alert('Create Flashcards Clicked')}
          >
            <Card.Body>
              <Card.Title>Create Flashcards</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OptionsPage;
