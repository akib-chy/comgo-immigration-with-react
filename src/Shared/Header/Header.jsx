import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo-Comgo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
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
            <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/home">
              Homepage
            </Nav.Link>

            <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/ashdf">
              Visa
            </Nav.Link>
            <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/inventory">
              Inventory
            </Nav.Link>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-link text-decoration-none shadow-none text-warning fw-bold"
              >
                Log Out
              </button>
            ) : (
              <Nav.Link onClick={handleScrollTop} as={CustomLink} to="/login">
                LogIn
              </Nav.Link>
            )}

            <Nav.Link as={CustomLink} to="/signUp">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
