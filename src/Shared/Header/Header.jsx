import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Logo-Comgo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header-bg py-3 sticky-top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img className="img-fluid" width="170px" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto mt-2">
            <Nav.Link as={CustomLink} to="/home">
              Homepage
            </Nav.Link>

            <Nav.Link as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/ashdf">
              Visa
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
