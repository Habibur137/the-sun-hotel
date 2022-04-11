import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
