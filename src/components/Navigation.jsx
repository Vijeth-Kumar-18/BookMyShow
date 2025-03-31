import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  LogIn, UserPlus } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../context/DarkModeContext';
import SearchBar from './SearchBar';

const Navigation = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <Navbar style={{ backgroundColor: 'red' }} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/BookMyShow" className="d-flex align-items-center fw-bold text-white">
          <Image  src={`${process.env.PUBLIC_URL}/logobms.png`} alt="Logo" width={70} height={50}  className="me-2" /> BookMyShow  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/BookMyShow" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="text-white">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events" className="text-white">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports" className="text-white">Sports</Nav.Link>
            <Nav.Link as={Link} to="/offers" className="text-white">Offers</Nav.Link>
          </Nav>
          <SearchBar />
          <Nav className="ms-2">
            <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
            <Nav.Link as={Link} to="/login" className="d-flex align-items-center ms-2 text-white">
              <LogIn size={20} className="me-1 text-white" /> 
              <span>Sign In</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="d-flex align-items-center ms-2 text-white">
              <UserPlus size={20} className="me-1 text-white" /> 
              <span>Sign Up</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;