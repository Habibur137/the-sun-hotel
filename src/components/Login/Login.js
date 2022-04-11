import React from "react";
import "./login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  console.log(user);
  return (
    <div className="form-container">
      <h3>Please Login</h3>
      <form>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <input type="submit" value="Login" />
      </form>
      <button onClick={() => signInWithGoogle()}>Google Sign In</button>
    </div>
  );
};

export default Login;
