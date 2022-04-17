import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleLogo from "../../images/google.svg";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [siteError, setSiteError] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfPassBlur = (event) => {
    setConfPass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    if (!name || !email || !pass || !confPass) {
      setSiteError("Please Fill In The Input Field");
      return;
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (pass !== confPass) {
      setSiteError("opps Password Not Match");
      return;
    }
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    setSiteError("");
    setValidated(true);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="container">
      <div className="shadow w-50 mx-auto p-5 my-5">
        <h3 className="text-primary text-center fw-bold mb-3">
          Please Sign Up
        </h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="shadow-none"
              type="text"
              name="name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Your Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="shadow-none"
              type="email"
              name="email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control
              className="shadow-none"
              type="password"
              name="password"
              onBlur={handlePassBlur}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control
              className="shadow-none"
              type="password"
              name="confPassword"
              onBlur={handleConfPassBlur}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger fw-bold">{siteError}</p>
          <p className="text-danger fw-bold">{error?.message}</p>
          <p className="text-danger fw-bold">{googleError?.message}</p>
          <p className="text-center">
            New to Combo | Immigration ?{" "}
            <Link className="text-decoration-none text-warning" to="/login">
              Login
            </Link>
          </p>
          <Button
            className="shadow-none w-100 py-2"
            variant="primary"
            type="submit"
          >
            Sign Up
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

export default SignUp;
