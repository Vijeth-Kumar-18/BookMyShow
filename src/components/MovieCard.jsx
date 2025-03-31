import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, image, genre, rating, duration, language }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={image} 
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{title}</Card.Title>
        <div className="mb-2">
          <Badge bg="secondary" className="me-2">{genre}</Badge>
          <Badge bg="info">{language}</Badge>
        </div>
        <div className="d-flex align-items-center mb-2 text-muted">
          <Star size={16} className="me-1 text-warning" />
          <span className="me-3">{rating}/10</span>
          <Clock size={16} className="me-1" />
          <span>{duration}</span>
        </div>
        <div className="mt-auto">
          <Link to={`/movie/${id}`}>
            <Button variant="outline-danger" className="w-100 mb-2">View Details</Button>
          </Link>
          <Link to={`/booking/${id}`}>
            <Button variant="danger" className="w-100">Book Tickets</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;