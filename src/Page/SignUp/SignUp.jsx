import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleLogo from "../../images/google.svg";
import Spiner from "../../Shared/Spiner/Spiner";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const navigate = useNavigate();
  const [chacked, setChacked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfPassBlur = (event) => {
    setConfPass(event.target.value);
  };
  if (loading || googleLoading) {
    return <Spiner />;
  }
  if (user || googleUser) {
    toast.success("User Creat SuccessFull");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    if (!name || !email || !pass || !confPass) {
      toast.error("Please Fill In The Input Field");
      return;
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (pass !== confPass) {
      toast.error("opps Password Not Match");
      return;
    }
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });

    setValidated(true);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleAcceptCondition = (event) => {
    setChacked(event.target.checked);
  };
  return (
    <div className="container">
      <div className="shadow form-container mx-auto p-5 my-5">
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
          <Form.Group
            className="mb-3 shadow-none"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className={`${!chacked && "text-danger"} ${
                chacked && "text-success"
              }`}
              onClick={handleAcceptCondition}
              type="checkbox"
              label="Accept Every Term And Condition"
            />
          </Form.Group>
          <p className="text-danger fw-bold">{error?.message}</p>
          <p className="text-danger fw-bold">{googleError?.message}</p>
          <p className="text-center">
            New to Combo | Immigration ?{" "}
            <Link className="text-decoration-none text-warning" to="/login">
              Login
            </Link>
          </p>
          <ToastContainer position="top-center" />
          <Button
            className={`${!chacked && "disabled"} shadow-none w-100 py-2`}
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
