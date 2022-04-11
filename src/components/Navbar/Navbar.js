import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/booking">Booking</Link>
      <span>{user?.displayName && user.displayName}</span>
      {user?.uid ? (
        <button onClick={() => signOut(auth)}>Log Out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
