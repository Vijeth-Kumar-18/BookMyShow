import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Calendar, MapPin, Timer } from 'lucide-react';

const Sports = () => {
  const sportsEvents = [
    {
      id: 1,
      title: "Premier League",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop",
      category: "Football",
      date: "2025-03-20",
      time: "20:00",
      venue: "Emirates",
      price: "From ₹50000"
    },
    {
      id: 2,
      title: "NBA",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
      category: "Basketball",
      date: "2025-03-22",
      time: "19:30",
      venue: "Arena",
      price: "From ₹7500"
    },
    {
      id: 3,
      title: "IPL 2025",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqAmJ80gNBGKVEYL4RPeO-EDxse61WVgoSfXiLDYhj_SWjmmDa1JKBWBzaFnuvdxYVcUgue_xKt0fqKju7ImF5y9shN2uzLWpfw7XTpuQlu54NVkyZ8mgfvwJIyaX3eHDm4orZXWzWWPtyAuqf80-4H9jO5hKbRYLvQG0wcCs9o3IFHTjiyh305spVzoI/s299/download.jpegg",
      category: "Cricket",
      date: "2025-03-24",
      time: "14:00",
      venue: "Sahyadri",
      price: "From ₹2000"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Sports Events</h2>
      
      <Row>
        {sportsEvents.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={event.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Badge bg="primary" className="mb-2">{event.category}</Badge>
                <Card.Title>{event.title}</Card.Title>
                
                <div className="mb-3 text-muted">
                  <div className="d-flex align-items-center mb-1">
                    <Calendar size={16} className="me-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Timer size={16} className="me-2" />
                    {event.time}
                  </div>
                  <div className="d-flex align-items-center">
                    <MapPin size={16} className="me-2" />
                    {event.venue}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="text-danger fw-bold">{event.price}</span>
                  <Button variant="danger">Book Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;