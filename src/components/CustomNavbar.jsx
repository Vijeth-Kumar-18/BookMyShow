import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <BootstrapNavbar bg="danger" variant="dark" expand="lg" className="mb-4">
      <BootstrapNavbar.Brand href="#" className="fw-bold fs-4 text-uppercase text-light">
        <img src="/bmslogo.svg" alt="Logo" style={{ height: '40px' }} />
        BookMyShow
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        {/* Main Navigation Links */}
        <Nav className="me-auto">
          <Nav.Link href="/" className="fw-bold text-light px-3 py-2">Home</Nav.Link>
          <Nav.Link href="/movies" className="fw-bold text-light px-3 py-2">Movies</Nav.Link>
          <Nav.Link href="#events" className="fw-bold text-light px-3 py-2">Events</Nav.Link>
          <Nav.Link href="/about-us" className="fw-bold text-light px-3 py-2">About Us</Nav.Link>
          <Nav.Link href="/contact-us" className="fw-bold text-light px-3 py-2">Contact</Nav.Link>
        </Nav>

        {/* Right-Aligned Search and Buttons */}
        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 rounded-pill"
            style={{ minWidth: '200px' }}
          />
          <Button variant="outline-light" className="rounded-pill">Search</Button>
        </Form>

        {/* Profile Icon */}
        <div className="d-flex">
          

          <Link to="/login">
            <Button variant="light" className="me-2 fw-bold rounded-pill px-4">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="warning" className="fw-bold rounded-pill px-4">Register</Button>
          </Link>
          <Dropdown className="ms-3">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <img src="https://www.svgrepo.com/show/497407/profile-circle.svg" alt="Profile" style={{ height: '30px', width: '30px' }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Not Logged in</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
