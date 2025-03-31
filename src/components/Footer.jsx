import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              BookMyShow 2.0 is your go-to platform for booking movies, events,
              and sports tickets effortlessly.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/BookMyShow" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/movies" className="text-white text-decoration-none">Movies</a></li>
              <li><a href="/events" className="text-white text-decoration-none">Events</a></li>
              <li><a href="/sports" className="text-white text-decoration-none">Sports</a></li>
              <li><a href="/offers" className="text-white text-decoration-none">Offers</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@bookmyshow.com</p>
            <p>Phone: +1234567890</p>
            <p>Follow us on:
              <a href="https://www.facebook.com/BookMyShowIN/" className="text-white text-decoration-none ms-2">Facebook</a>,
              <a href="https://x.com/bookmyshow" className="text-white text-decoration-none ms-1">Twitter</a>,
              <a href="https://www.instagram.com/bookmyshowin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white text-decoration-none ms-1">Instagram</a>
            </p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} BookMyShow . All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;