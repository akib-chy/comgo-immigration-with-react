import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipping = () => {
  const [validated, setValidated] = useState(false);
  const [siteError, setSiteError] = useState("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  //   if (user || googleUser) {
  //     navigate("/home");
  //   }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const telNum = event.target.telNum.value;
    console.log(name, address, telNum);
    // const name = event.target.name.value;

    if (!name || !address || !telNum) {
      setSiteError("Please Fill In The Input Field");
      return;
    }

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navigate("/inventory");
    setSiteError("");
    setValidated(true);
  };
  return (
    <div className="container">
      <div className="shadow w-50 mx-auto p-5 my-5">
        <h3 className="text-primary text-center fw-bold mb-3">
          Shipping Information
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
              disabled
              value={user?.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              className="shadow-none"
              type="text"
              name="address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Your Address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTelNum">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="shadow-none"
              type="tel"
              name="telNum"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Tour Phone Number
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger fw-bold">{siteError}</p>
          <Button
            className="shadow-none w-100 py-2"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Shipping;
