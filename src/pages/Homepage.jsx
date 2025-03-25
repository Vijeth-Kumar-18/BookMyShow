import React from 'react';
import { Container, Row, Col, Card, Carousel, Button, Badge } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div>
      <Carousel className="hero-carousel mb-5">
        <Carousel.Item>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibXdA_yHcEzIeOS2LgYcF6CBJ2MXruKyggthMh4s8GXlqGCr6GZPnw0EpTEnaC2pElw8iuRWWDKZbv6QynyV4_UQUAKdDArDglBviFAOPjPhRAngwFkz_J6_CUGJD5gx3Yr_VEtcNvMElJJdEOoZ9Be9Q8eeKDcl9j0XOo7A_3u5bdJWuY-RzuvpiLL5I/s1536/13.png" className="d-block w-100" alt="Featured Movie 1"/>
          <Carousel.Caption>
            <Button variant="danger">Book Tickets</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEUg3jXOM6gWLJeunNzYSpUuF_A7NOIwaXcol309vHk57QtvwRJmmzcpOnfeGQqI35eRZg4cmGHraja3GY8A2CWgs53oFwzOM__Zdi2DHV57UvI-iJxg53uB_fMAMpLZkAsF5LahtGYohkuX0LSky1u9Y5QQGn_PdGyo6Rxr2gCaeRkb4pWQo1efirQ7E/s1547/12.png" className="d-block w-100" alt="Featured Event"/>
          <Carousel.Caption>
            <Button variant="danger">Discover More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h2 className="text-center mb-4">Now Showing</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSwAQSj_TfvjjUFKJrnOuLZRE34-LiahZLUyUq4HUmdUBV6X50KWruR6yBBPh3KGHUYM80pNYIYhnp1tRs6IMzt2tyElg1nEx3j2UeltvkZystf2ROcFncpQYm_aJTcAneAsbBBU6SCWNxM0pZv9ha2XCp7m1qn8KBa56rtZUW9IdUG7EF66Tc3KkfDVo/s365/Chhaava.jpg" alt="Movie 1" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Chhavva</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐⭐☆</span> <br />
                  <Badge bg="info" className="me-2">Action</Badge>
                  <Badge bg="secondary">Drama</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEind8sWK98hktr66zQHCLAdAxk_LuQsCUnk2WfNnSS7DZNYSpPs8b3kwRXWvw9Faj4ZzrB7OCKOSx5A6fdJUhevYZRncOtawd8nV0tdH4MSPIFCZe9swtvxJHO8Xzl3_3_qyulaqSS580SwLOZY4z8sBlLyF4z9yHiMUzlGJ6LvRdhiqYzpWwEOi3H4yjs/s1600/pushpa2.jpg" alt="Movie 2" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Pushpa-2</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐⭐⭐</span> <br />
                  <Badge bg="info" className="me-2">Comedy</Badge>
                  <Badge bg="secondary">Family</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh__FliNABfaivAJO9j1230egogwwsMKd7ZTvaAANgFdvXoDGauNBAPalb7TlhmBlYxjrBtX4A_Zz0kHEjyETwdjOS9caxZOvJqbCOFV77mDy_5vx2USrYf8V9Jlx5fJayhLP9JDEvWdpNpuGC5i8ht0QREYSje6HmNaB5aCsqSSVA9tJRdmVNpBsRR_uk/s4096/luckybhasker.jpg" alt="Movie 3" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Lucky Bhasker</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐☆☆</span> <br />
                  <Badge bg="info" className="me-2">Horror</Badge>
                  <Badge bg="secondary">Thriller</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgZqaEFB3Sc5eNIxYaClCdtyZzYfO_aQx2MqtUlZbpiNpyyovymKysGJ7Am62HL-D72S7Mq8HOQh11dJvaQRh9YRNhDBTWaK-LxIbIPeByKcVvJQUjkDlFzsAv4D11Kkk7GnPBO_3PRvTYCfeV5upGJZneXjHRmF2yTDgIIdGRtDwaoRxBn0DSNAfN4Y8/s1200/s1992.jpg" alt="Movie 1" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>scam 1992</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐⭐☆</span> <br />
                  <Badge bg="info" className="me-2">Action</Badge>
                  <Badge bg="secondary">Drama</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTEU4a00rs9LBsCqUgdMdSA5MUyfWM77x2yfZy6ASP4IE9K-zIefWZWrZ49EfJC1Du6x2PH71K-e9jqsZiy6cAfTAedr_ufA6SONo9JYxTCfCGPQlDPszrtnMbrOwhKV6KbgunRUtsq6Q1RNTUBcH1djcRKp2LtQsADFaaw8oJSZVQ0r_qnkQ-ESUO4Uc/s2560/kgf2.jpg" alt="Movie 2" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>KGF-2</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐⭐⭐</span> <br />
                  <Badge bg="info" className="me-2">Comedy</Badge>
                  <Badge bg="secondary">Family</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQRcMQ10WJqPA9Mk-k8h09j2gdKiD8CYvirJ1qGV5SnxUPZ2ECAyqaR5SYpgvHYvv4M2vJGrG7Bp3c_McpQq2MaJuh9cCnUamo3RQ_sIJxE-uUxZndubU0IaQEM9wK-DzL4Osi92R-R6EfAM-zpBumEhVgcUtajWvmaMyaII4xSrPGZ9GYRSZKXoavNXk/s378/Kantara_poster.jpeg" alt="Movie 3" style={{height: '600px',  width: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>kantara</Card.Title>
                <Card.Text>
                  <span>⭐⭐⭐☆☆</span> <br />
                  <Badge bg="info" className="me-2">Horror</Badge>
                  <Badge bg="secondary">Thriller</Badge>
                </Card.Text>
                <Button variant="danger" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
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
<Button variant="danger" className="w-100">Watch on YouTube</Button>
              </Card.Body>
            </Card>
          </Col>

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
<Button variant="danger" className="w-100">Watch on YouTube</Button>
              </Card.Body>
            </Card>
          </Col>

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
<Button variant="danger" className="w-100">Watch on YouTube</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h2 className="text-center mb-4">Outdoor Events</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqAmJ80gNBGKVEYL4RPeO-EDxse61WVgoSfXiLDYhj_SWjmmDa1JKBWBzaFnuvdxYVcUgue_xKt0fqKju7ImF5y9shN2uzLWpfw7XTpuQlu54NVkyZ8mgfvwJIyaX3eHDm4orZXWzWWPtyAuqf80-4H9jO5hKbRYLvQG0wcCs9o3IFHTjiyh305spVzoI/s299/download.jpegg" alt="Red Bull Moto Jam" style={{objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>IPL 2025</Card.Title>
                <Card.Text>
                  <span>Date: 22 March, Sat</span> <br />
                  <span>Location: Kolkatta</span>
                </Card.Text>
                <Button variant="danger" className="w-100">Explore</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjk1vKubtHi2ukBqCXI4VcP-ZKjapYE49iNky5OXMRx9v8fTZsBcu8DUws__uLPVTFDd0E8zDwpTT-lMUDTYZWsSs8fWTuKlGYE4JOSahUmZo4eNaPbHyxAT6dIScYUhwLxSnkZHCuRqUThMJxM4jXvphJhTHx_BxQbb6WXuAlnZqOSPzvAf6OT_8zf3o/s300/images.jpeg" alt="Global Online Chess Championship" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Olympics</Card.Title>
                <Card.Text>
                  <span>Date: abcd, Sun</span> <br />
                  <span>Location: India</span>
                </Card.Text>
                <Button variant="danger" className="w-100">Join</Button>
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
                <Button variant="danger">Register Now</Button>
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
                <Button variant="danger">Book Now</Button>
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

export default Homepage;
