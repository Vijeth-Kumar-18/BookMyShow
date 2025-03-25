import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


const AboutUs = () => {
  return (
    <div className="container my-4">
      <h1>About Us</h1>
      <Row>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Welcome to BookMyShow Clone! Our mission is to provide you with a seamless experience in browsing and booking tickets for movies, events, and sports. 
          </p>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Our Mission" />
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be the leading platform for entertainment booking, ensuring customer satisfaction and convenience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>What We Offer</h2>
          <p>
            Built using React and Bootstrap, this application aims to mimic the functionalities and design of the original BookMyShow platform. We offer a user-friendly interface, a wide variety of options, and excellent customer support to ensure you have the best experience possible.
          </p>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="What We Offer" />
            <Card.Body>
              <Card.Title>Our Services</Card.Title>
              <Card.Text>
                Explore a wide range of movies, events, and sports, all at your fingertips.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Join Us</h2>
          <p>
            Thank you for visiting! We look forward to helping you find and book your next entertainment experience.
          </p>
        </Col>
      </Row>
    </div>
  );







};

export default AboutUs;
