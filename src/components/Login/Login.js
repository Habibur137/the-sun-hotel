import React from "react";
import "./login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { repalce: true });
    });
  };
  console.log(user);
  return (
    <div className="form-container">
      <h3>Please Login</h3>
      <form>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <input type="submit" value="Login" />
      </form>
      <button onClick={handleSignInWithGoogle}>Google Sign In</button>
    </div>
  );
};

export default Login;
