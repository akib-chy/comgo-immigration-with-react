import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [siteError, setSiteError] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfPassBlur = (event) => {
    setConfPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    if (!name || !email || !pass || !confPass) {
      setSiteError("Please Fill In The Input Field");
    }
    if (pass !== confPass) {
      setSiteError("opps Password Not Match");
      return;
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setSiteError("");
    setValidated(true);
  };
  return (
    <div className="container">
      <div className="shadow w-50 mx-auto p-5 my-5">
        <h3 className="text-primary text-center fw-bold mb-3">Please Login</h3>
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
          <p className="text-center">
            New to Combo | Immigration ?{" "}
            <Link className="text-decoration-none text-warning" to="/login">
              Login
            </Link>
          </p>
          <Button className="shadow-none w-100" variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
