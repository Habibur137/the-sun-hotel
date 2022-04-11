import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h3>Please Login</h3>
      <form>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <input type="submit" value="Login" />
      </form>
      <button>Google Sign In</button>
    </div>
  );
};

export default Login;
