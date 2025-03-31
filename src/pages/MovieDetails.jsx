import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Star, Clock, Calendar, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false); 

 


  
  const movie = {
    id: parseInt(id || "1"),
    title: "Chhava",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgALKguD_9A2j_VqHs-4hUgW67WaK7kfHXGG23F14OKvEFG0BHaIYCSEZf2tvdJSxJdvF96u_I7oUMq-RcjXtG0TnlVwpzBNzMg1dk6Whlg5AwTKiRE13kImO-hgnKaN41RXQ_K7mOXNR-BlEqSCNZO4qrZjltRU9DNcWh26sXtdT3ccgU-LHGmy9RhnPA/s1280/1.png",
    genre: "Historical",
    rating: 8.9,
    duration: "2h 11m",
    language: "Hindi",
    releaseDate: "March 1, 2024",
    director: "Denis Villeneuve",
    description: "Chhava is a gripping historical drama that follows a brave hero's journey through adversity and triumph.",
    cast: ["Vicky Kaushal", "Other Actor 1", "Other Actor 2"],
    trailerUrl: "https://www.youtube.com/embed/77vRyWNqZjM"
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h1 className="mb-3">{movie.title}</h1>
          <div className="mb-3">
            <Badge bg="secondary" className="me-2">{movie.genre}</Badge>
            <Badge bg="info" className="me-2">{movie.language}</Badge>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Star size={20} className="me-1 text-warning" />
            <span className="me-3 h5 mb-0">{movie.rating}/10</span>
            <Clock size={20} className="me-1" />
            <span className="me-3">{movie.duration}</span>
            <Calendar size={20} className="me-1" />
            <span>{movie.releaseDate}</span>
          </div>
          <p className="lead mb-4">{movie.description}</p>
          <div className="mb-4">
            <h5>Director</h5>
            <p>{movie.director}</p>
          </div>
          <div className="mb-4">
            <h5>Cast</h5>
            <p>{movie.cast.join(", ")}</p>
          </div>
          <div className="d-flex gap-3">
          <Link to={`/booking/${movie.id}`}>
            <Button variant="danger" size="lg">
              Book Tickets
            </Button>
            </Link>
            <Button 
              variant="outline-dark" 
              size="lg" 
              onClick={() => setShowTrailer(!showTrailer)} 
            >
              <Film size={20} className="me-2" />
              Watch Trailer
            </Button>
          </div>
        </Col>
      </Row>

      {showTrailer && ( 
        <Row className="mt-5">
          <Col>
            <h3 className="mb-4">Trailer</h3>
            <div className="ratio ratio-16x9">
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;