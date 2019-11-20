import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo192.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {authContext} from '../../../azureadConfig';

const HomeNavbar = props => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Link>
      <Link>
        <Navbar.Brand href="/">SDM Plus</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {/* <Nav.Link href="#user">{authContext.login ? authContext.getCachedUser().profile.name:null}</Nav.Link>
          
          <Nav.Link onClick={() =>authContext.logOut()}>
            Logout
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomeNavbar;
