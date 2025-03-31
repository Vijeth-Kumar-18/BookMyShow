import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { Play, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredMovies = [
    { id: 1, title: "Chhava", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI4WItJJT_oLH0yAaSaMTIxRRnyyAYxZdfSNGWPc5yn_iDy00dbsY0gxTtdk08B9XNBUZSu4Z7d8Ti8G8Fgo0KvIiqWxpUnhD-h3PemPy7D2Qzjj6mXShgnkKCcgKPoURCQiXP_iqNg_3rJbLF2PpM9GMGUNvklJ4D_apFn-s5Ru-tgkinVz1u4iEw9oc/s1280/1.png", genre: "Historical", rating: 9.5 },
    { id: 2, title: "Pushpa 2", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSfvNickWYoEc9R8KajCieBY6YF3ceaY7og65crQz_-Xc5lEqZ28AaThIjQvyFwTY8KPLsmAm0q7UC-n6a1UjLWDmMp5nUUN16OOtgBAFKHmXjqe7jJLQHdsyBkKECiHTmdFgtEgKKhUDH55l6JDj0oLJbGrnhufpv5YOgsmBtrrrZfaSuL_0nXbOYT-o/s1280/2.png", genre: "Action", rating: 9.0 },
    { id: 3, title: "Lucky Bhasker", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixVqG6bsvHWBmCK5mKUVdoTcXEyQxjngMTHyWa9keK-kdXFvGrbSeuiD14ZXurz1mpEmgIKA2LZPsllL4pm7M0KfTNmAAH1BQT5QwbIqlJ6DUoO-O_eD-TBwOGsgaAOju664PFF0Qtft3_2Ub1FzgPEQLRZH57upIGO2UaC_yM_dTH5Wu3bM6gywpD9Fg/s1280/3.png", genre: "Comedy", rating: 9.1 },
    { id: 4, title: "Scam 1992", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPxmjb_u7_PFwVLs8fIYiPcD8o80rqSJYHYLmCzlW9UnQ85AxBXF4RFzX3jss33LwegHkjh1QaTCECGZVi0IJt8pTPwDlcvYoYqP9ybSh0SavXjKV4bpeeDOE01EBoNlWKsOog6Fh829i6dPoajHamVh-0dFBPixO51VNNLw-za4moxcg__XI8osSVzmE/s1280/4.png", genre: "Drama", rating: 9.3 },
    { id: 5, title: "KGF 2", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX7urC4sJ2H9oZZDCznhEEnG9AN_VH0NOZoDHH6OOJVfpmv5j_Qs4O9CbkIXdaWPp_Y1VSGgPvwg4_iyeES7hEVKhDIJYlwDn7w4QFLOwLjT5XSxapdXSDKm-AYoHuTqhQnT8IjwM4BfrSsM0v8sbzs0dKPTIB5X7dAyES6jxmE9m0ZkVa7DKhwo-5WBU/s1280/5.png", genre: "Action", rating: 8.8 },
    { id: 6, title: "Kantara", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijNaJqrs7WdXDnlvgxLEFzQH-oziZZt6dCy9xqgRulKCsMDnwE58WFRH46VWJd0X8AWXHG80mvsXsCwUAgi0BCCe8Em9WCE0fp9Bu9AFau-pbiqaSuwIFMXR822BgW5gCvDerXD2aGlginDhrwTrf2_tGI9PnrImBpXn_ovXeljK9AbWe_H7vHdqGd4vI/s1280/6.png",genre: "Thriller", rating: 9.2 }
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const genres = ["All Genres", "Sci-Fi", "Biography", "Action","Comedy","Drama","Mythological","Thriller","Historical","Action","Comedy"];

  const filteredMovies = selectedGenre === "All Genres" ? featuredMovies : featuredMovies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="bg-light">
      <Carousel className="my-4"> 
  {featuredMovies.map((movie) => (
    <Carousel.Item key={movie.id}>
      <div
        style={{
          borderRadius: '40px', 
          margin: '10px', 
          overflow: 'hidden', 
        }}
      >
        <img
          className="d-block w-100"
          src={movie.image}
          alt={movie.title}
          style={{
            height: '500px',
            objectFit: 'cover',
          }}
        />
      </div>
      <Carousel.Caption>
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <Link to={`/booking/${movie.id}`}>
          <Button variant="danger" className="me-2">
            Book Now
          </Button>
        </Link>

        <a href={`https://www.youtube.com/watch?v=77vRyWNqZjM`} target="_blank" rel="noopener noreferrer">
  <Button variant="outline-light">
    <Play size={20} className="me-1" />
    Watch Trailer
  </Button>
</a>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>

      {/* Filter Section */}
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Recommended Movies</h2>
          <Button variant="outline-dark">
            <Filter size={20} className="me-2" />
            Filter
          </Button>
        </div>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Select
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="mb-3"
              value={selectedGenre}
            >
              {genres.map(genre => (
                <option key={genre}>{genre}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {filteredMovies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.image}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">{movie.genre}</Badge>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Rating: {movie.rating}/10</Card.Text>
                  <Link to={`/booking/${movie.id}`}><Button variant="danger" className="w-100">Book Now</Button></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     
      <Container className="py-5">
        <h2 className="mb-4">Coming Soon</h2>
        <Row>
          {featuredMovies.map((movie) => (
            <Col key={movie.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.image}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Badge bg="info" className="mb-2">Coming Soon</Badge>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Genre: {movie.genre}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Recent Trailers</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwY_VZ8ar5TLJqPeopinGf7ZxCteS5yB3qo8IPKdpLQCH4ra4cFELU_y9cxB3dgcBY9wT7xrWqqLGPXXDq0sUD4dKnNR-x_o7xmzQwR0bbw9AJ2hd3liYmnKMcm8NCO3sYBRVJJwrrycxeTkCIayXA__NfgTl1apE6cu1KWLkWVO2mPDGYqJf4FDRbWeU/s400/118091906.webp" alt="Red Bull Moto Jam" style={{objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Chhavva-Trailer</Card.Title>
                <Card.Text>
                  <span>1 month ago</span> <br />
                </Card.Text>
                <div>
  <iframe
    width="100%"
    height="200"
    src="https://www.youtube.com/embed/77vRyWNqZjM"
    title="Movie Trailer 3"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
<Link to={`https://youtu.be/77vRyWNqZjM?si=EKWYvWp946VakLO-`}><Button variant="danger" className="w-100">Watch on YouTube</Button></Link>
              </Card.Body>
            </Card>
          </Col>

         

         
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Exclusive Offers</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="bg-light text-dark">
              <Card.Body>
                <Card.Title>Flat 20% Off on First Booking</Card.Title>
                <Card.Text>
                  Register today and get 20% off your first movie ticket booking.
                </Card.Text>
                <Link to={`/offers`}><Button variant="danger">Register Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="bg-light text-dark">
              <Card.Body>
                <Card.Title>Buy 1 Get 1 Free on Weekdays</Card.Title>
                <Card.Text>
                  Offer valid on select movies. Terms and conditions apply.
                </Card.Text>
                <Link to={`/offers`}><Button variant="danger">Book Now</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Trending Searches Right Now</h2>
        <Row>
          {/* Sports Card */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-primary">Sports</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Rajasthan Royals vs Royal Challengers Bengaluru</li>
                    <li>Mumbai Indians vs Royal Challengers Bengaluru</li>
                    <li>Mumbai Indians - IPL 2025</li>
                    <li>Rajasthan Royals vs Chennai Super Kings</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Movies Card */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-primary">Movies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Sikandar</li>
                    <li>L2: Empuraan</li>
                    <li>Dragon</li>
                    <li>Mad Square</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;