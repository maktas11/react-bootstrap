import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import ReactSVG from './assets/react.svg'

function Homepage() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={ReactSVG} />React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/a">Home</Nav.Link>
            <Nav.Link href="/b">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Action 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Homepage
