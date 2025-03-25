import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const MoviesPage = () => {
  return (
    <div>
      <Container>
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

     
 
    </div>
  );
};

export default MoviesPage;
