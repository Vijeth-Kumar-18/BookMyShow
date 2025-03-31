import React from 'react';
import { Carousel as BootstrapCarousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Carousel = ({ items }) => {
  return (
    <div style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', padding: '10px' }}> {/* Added padding around the carousel container */}
      <BootstrapCarousel interval={4000} controls indicators pause={false}>
        {items.map((item) => (
          <BootstrapCarousel.Item key={item.id}>
            <div
              style={{
                background: 'linear-gradient(90deg, #FF7E00, #FFD700)',
                height: '500px',
                borderRadius: '50px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                margin: '10px', // Added margin around each carousel item
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  opacity: 0.5,
                  borderRadius: '20px',
                }}
              />
              <div style={{ position: 'absolute', color: '#fff', textAlign: 'center', padding: '50px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '2rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1.2rem' }}>{item.genre}</p>
                <Link to={`/booking/${item.id}`}>
                  <Button variant="danger" style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Book Now
                  </Button>
                </Link>
                <Button variant="outline-light" style={{ fontWeight: 'bold' }}>
                  Watch Trailer
                </Button>
              </div>
            </div>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel;