import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Calendar, MapPin, Timer, Music, Theater, Ticket } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "DJ Night with DJ",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop",
      category: "Music Concert",
      date: "2025-03-25",
      time: "20:00",
      venue: "Adyar Garden",
      price: "From ₹200",
      icon: Music
    },
    {
      id: 2,
      title: "VTU Fest",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop",
      category: "College event",
      date: "2025-03-28",
      time: "19:30",
      venue: "Mysuru",
      price: "From ₹150",
      icon: Theater
    },
    {
      id: 3,
      title: "Branch Entry",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop",
      category: "Comedy",
      date: "2025-03-30",
      time: "powercut",
      venue: "Sahyadri",
      price: "From ₹100",
      icon: Ticket
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Upcoming Events</h2>
      
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={event.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <event.icon size={16} className="me-2" />
                  <Badge bg="primary">{event.category}</Badge>
                </div>
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
                  <Button variant="danger">Book Tickets</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4 bg-light">
        <Card.Body className="text-center">
          <h4>Want to Host an Event?</h4>
          <p>List your event on our platform and reach thousands of potential attendees!</p>
          <Button variant="danger">Submit Your Event</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Events;