import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import { sendPasswordResetEmail } from "firebase/auth";
import googleLogo from "../../images/google.svg";
import { ToastContainer, toast } from "react-toastify";
import Spiner from "../../Shared/Spiner/Spiner";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [siteError, setSiteError] = useState("");
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUsers, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  if (loading || googleLoading) {
    return <Spiner />;
  }
  if (user || googleUsers) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email && !password) {
      setSiteError("Please Fill In The Input Field");
      return;
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    signInWithEmailAndPassword(email, password);
    setValidated(true);
  };
  const handlePasswordResat = (e) => {
    if (!email) {
      setSiteError("Please Enter Your Email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "Password Resat Email SuccessFully sent. Check Your Email",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((error) => {
        setSiteError(error?.message);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="container">
      <div className="shadow w-50 mx-auto p-5 my-5">
        <h3 className="text-primary text-center fw-bold mb-3">Please Login</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="shadow-none"
              type="email"
              placeholder="Enter email"
              name="email"
              required
              onBlur={handleEmailBlur}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="shadow-none"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger fw-bold">{siteError}</p>
          <p className="text-danger fw-bold">{error?.message}</p>
          <p className="text-danger fw-bold">{googleError}</p>
          <button
            onClick={handlePasswordResat}
            className="btn btn-link shadow-none"
          >
            Resat Password ?
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <p className="text-center">
            Already have an account ?{" "}
            <Link className="text-decoration-none text-warning" to="/signUp">
              Sign Up
            </Link>
          </p>
          <Button
            className="shadow-none w-100 py-2"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <Button
            onClick={handleGoogleLogin}
            className="text-dark shadow-none w-100 mt-3 bg-transparent py-2"
            type="button"
          >
            <img className="img-fluid me-2" src={googleLogo} alt="" />
            Continue With Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
