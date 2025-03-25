import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5>About Us</h5>
            <p>Learn more about our services and offerings.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact</h5>
            <p>Email: support@bookmyshowclone.com</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <p>Social Media Links</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} BookMyShow Clone. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
