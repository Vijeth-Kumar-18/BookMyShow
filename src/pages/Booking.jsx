import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const movie = {
    id: parseInt(id || "1"),
    title: "Chhava",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgALKguD_9A2j_VqHs-4hUgW67WaK7kfHXGG23F14OKvEFG0BHaIYCSEZf2tvdJSxJdvF96u_I7oUMq-RcjXtG0TnlVwpzBNzMg1dk6Whlg5AwTKiRE13kImO-hgnKaN41RXQ_K7mOXNR-BlEqSCNZO4qrZjltRU9DNcWh26sXtdT3ccgU-LHGmy9RhnPA/s1280/1.png",
    duration: "2h 46m",
  };


  const dates = ["2024-03-15", "2024-03-16", "2024-03-17"];
  const times = ["10:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"];
  const theaters = [
    { id: 1, name: "PVR Cinemas", location: "Downtown Mall" },
    { id: 2, name: "INOX", location: "City Center" },
    { id: 3, name: "Cinepolis", location: "Metro Mall" }
  ];

  const generateSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const seatsPerRow = 10;
    return rows.map(row => 
      Array.from({ length: seatsPerRow }, (_, i) => `${row}${i + 1}`)
    );
  };

  const seats = generateSeats();

  const handleSeatClick = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) 
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex mb-4">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  style={{ width: '100px', height: '150px', objectFit: 'cover' }}
                  className="rounded me-4"
                />
                <div>
                  <h2>{movie.title}</h2>
                  <p className="text-muted">
                    <Clock size={16} className="me-1" />
                    {movie.duration}
                  </p>
                </div>
              </div>

              <h5 className="mb-3">Select Date</h5>
              <div className="d-flex gap-2 mb-4">
                {dates.map(date => (
                  <Button
                    key={date}
                    variant={selectedDate === date ? "danger" : "outline-danger"}
                    onClick={() => setSelectedDate(date)}
                  >
                    <Calendar size={16} className="me-1" />
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </Button>
                ))}
              </div>

              <h5 className="mb-3">Select Time</h5>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {times.map(time => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "danger" : "outline-danger"}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock size={16} className="me-1" />
                    {time}
                  </Button>
                ))}
              </div>

              <h5 className="mb-3">Select Theater</h5>
              {theaters.map(theater => (
                <Card key={theater.id} className="mb-3">
                  <Card.Body>
                    <h6>{theater.name}</h6>
                    <p className="text-muted mb-2">
                      <MapPin size={16} className="me-1" />
                      {theater.location}
                    </p>
                    <div className="d-flex gap-2">
                      {times.map(time => (
                        <Button
                          key={time}
                          variant="outline-dark"
                          size="sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              ))}

              <h5 className="mb-3">Select Seats</h5>
              <div className="text-center mb-4">
                <div className="bg-dark p-3 mb-4 rounded">
                  <p className="text-white mb-0">SCREEN</p>
                </div>
                {seats.map((row, i) => (
                  <div key={i} className="mb-2">
                    {row.map(seat => (
                      <Button
                        key={seat}
                        variant={selectedSeats.includes(seat) ? "danger" : "outline-secondary"}
                        size="sm"
                        className="m-1"
                        style={{ width: '40px' }}
                        onClick={() => handleSeatClick(seat)}
                      >
                        {seat}
                      </Button>
                    ))}
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <h4 className="mb-4">Booking Summary</h4>
              <div className="mb-3">
                <p className="mb-1">Selected Date:</p>
                <h6>{selectedDate || 'Not selected'}</h6>
              </div>
              <div className="mb-3">
                <p className="mb-1">Selected Time:</p>
                <h6>{selectedTime || 'Not selected'}</h6>
              </div>
              <div className="mb-3">
                <p className="mb-1">Selected Seats ({selectedSeats.length}):</p>
                <h6>{selectedSeats.join(', ') || 'No seats selected'}</h6>
              </div>
              <div className="mb-4">
                <p className="mb-1">Total Amount:</p>
                <h4>${selectedSeats.length * 12}</h4>
              </div>
              <Button 
                variant="danger" 
                size="lg" 
                className="w-100"
                disabled={!selectedDate || !selectedTime || selectedSeats.length === 0}
              >
                Proceed to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;