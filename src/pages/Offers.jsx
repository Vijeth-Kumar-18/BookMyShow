import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Tag, Clock, CreditCard } from 'lucide-react';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Get 50% off on your first booking",
      description: "New users can enjoy 50% off (up to $20) on their first movie ticket booking",
      code: "FIRST50",
      validUntil: "2024-03-31",
      paymentMethod: "All payment methods",
      image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Weekend Special: 20% Cashback",
      description: "Get 20% cashback on movie tickets booked for weekend shows",
      code: "WEEKEND20",
      validUntil: "2024-03-25",
      paymentMethod: "Credit Cards only",
      image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Student Discount: 15% Off",
      description: "Students get 15% off on all movie tickets with valid student ID",
      code: "STUDENT15",
      validUntil: "2024-12-31",
      paymentMethod: "All payment methods",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Current Offers</h2>
      
      <Row>
        {offers.map((offer) => (
          <Col key={offer.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={offer.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Tag size={16} className="me-2 text-danger" />
                    <span className="fw-bold">Code: {offer.code}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Clock size={16} className="me-2 text-danger" />
                    <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <CreditCard size={16} className="me-2 text-danger" />
                    <span>{offer.paymentMethod}</span>
                  </div>
                </div>

                <Button 
                  variant="outline-danger" 
                  className="w-100"
                  onClick={() => navigator.clipboard.writeText(offer.code)}
                >
                  Copy Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4 bg-danger text-white">
        <Card.Body className="text-center">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay updated with the latest offers and movie releases!</p>
          <div className="d-flex justify-content-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="form-control me-2" 
              style={{ maxWidth: '300px' }}
            />
            <Button variant="light">Subscribe</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Offers;