// src/Header.js
// src/Header.js
// src/Header.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; // Import your icon here
import './App.css'; // Import custom CSS if needed

const Header = ({ name }) => {
  return (
    <Navbar bg="light" className="fixed-top" style={{ zIndex: 1000 }}>
      <Container className="d-flex justify-content-start">
        <Navbar.Brand className="d-flex align-items-center" style={{ gap: '10px' }}>
          <FaUser style={{ fontSize: '24px', marginRight: '10px' }} /> {/* Icon */}
          {name && <strong>{name}</strong>} {/* User's name */}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
