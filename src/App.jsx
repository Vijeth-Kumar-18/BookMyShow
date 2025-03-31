import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Sports from './pages/Sports';
import Offers from './pages/Offers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';
import { DarkModeProvider } from './context/DarkModeContext';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </DarkModeProvider>
  );
}

export default App;


