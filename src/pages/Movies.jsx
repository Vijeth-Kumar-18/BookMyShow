import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { Filter } from 'lucide-react';

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: "Chaava",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgALKguD_9A2j_VqHs-4hUgW67WaK7kfHXGG23F14OKvEFG0BHaIYCSEZf2tvdJSxJdvF96u_I7oUMq-RcjXtG0TnlVwpzBNzMg1dk6Whlg5AwTKiRE13kImO-hgnKaN41RXQ_K7mOXNR-BlEqSCNZO4qrZjltRU9DNcWh26sXtdT3ccgU-LHGmy9RhnPA/s1280/1.png",
      genre: "Historical",
      rating: 8.5,
      duration: "2h 46m",
      language: "Hindi"
    },
    {
      id: 2,
      title: "KGF 2",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX7urC4sJ2H9oZZDCznhEEnG9AN_VH0NOZoDHH6OOJVfpmv5j_Qs4O9CbkIXdaWPp_Y1VSGgPvwg4_iyeES7hEVKhDIJYlwDn7w4QFLOwLjT5XSxapdXSDKm-AYoHuTqhQnT8IjwM4BfrSsM0v8sbzs0dKPTIB5X7dAyES6jxmE9m0ZkVa7DKhwo-5WBU/s1280/5.png",
      genre: "Action",
      rating: 7.8,
      duration: "2h 7m",
      language: "Kannada"
    },
    {
      id: 3,
      title: "Kantara",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijNaJqrs7WdXDnlvgxLEFzQH-oziZZt6dCy9xqgRulKCsMDnwE58WFRH46VWJd0X8AWXHG80mvsXsCwUAgi0BCCe8Em9WCE0fp9Bu9AFau-pbiqaSuwIFMXR822BgW5gCvDerXD2aGlginDhrwTrf2_tGI9PnrImBpXn_ovXeljK9AbWe_H7vHdqGd4vI/s1280/6.png",
      genre: "Action",
      rating: 7.2,
      duration: "2h 16m",
      language: "Kannada"
    }
  ];

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Movies</h2>
        <Button variant="outline-dark">
          <Filter size={20} className="me-2" />
          Filter
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Select className="mb-3">
            <option>All Languages</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Kannada</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select className="mb-3">
            <option>All Genres</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Thriller</option>
            <option>Historical</option>
            <option>Sci-Fi</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4} className="mb-4">
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;