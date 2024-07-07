import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "../login page/Login.css";
import auth from "../../../firebase.iinits";
import twitterimg from "../../image/twitter.jpeg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  function handleGoogleSignIn() {
    signInWithGoogle();
  }

  if (user || googleUser) {
    navigate("/");
    console.log(user, googleUser);
  }
  if (error || googleError) {
    console.log(error, googleError);
  }

  if (loading || googleLoading) {
    console.log("loading", "googleLoading");
  }

  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img className=" image" src={twitterimg} alt="twitterImage" />
        </div>

        <div className="form-container">
          <div className="form-box">
            <TwitterIcon style={{ color: "skyblue" }} />
            <h1 className="heading">Happening now</h1>

            {error && <p>{error.message}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="btn-login">
                <button type="submit" className="btn">
                  Log In
                </button>
              </div>
            </form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="light"
                onClick={handleGoogleSignIn}
              />
            </div>
          </div>
          <div>
            Don't have an account?
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "var(--twitter-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
