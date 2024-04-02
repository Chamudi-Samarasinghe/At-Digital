import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavigationBar.css";
import logo from "../components/images/logo.png";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="nav-color">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="head-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav-text">
            <Nav.Link eventKey={1}  >SERVICES</Nav.Link>
            <Nav.Link eventKey={2} href="#" >
              ABOUTUS
            </Nav.Link>
            <Nav.Link eventKey={3} href="#">
              CONTACTUS
            </Nav.Link>
            <Nav.Link eventKey={4} href="#">
              CAREERS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
