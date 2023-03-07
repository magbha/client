import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./TopBar.css"

const TopBar = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg"  className='topbar1'>
    <Container className='topbar2'>
      <Navbar.Brand className='brand' href="/">Stroom</Navbar.Brand>
      <Navbar.Toggle className="navtog" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className='colnav' id="responsive-navbar-nav">
        <Nav className="me-auto listsnav">
          <Nav.Link className='navlists' href="#features">Features</Nav.Link>
          <Nav.Link className='navlists' href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav >
          <NavLink  className='signbtn'  to="sign-in">Sign In</NavLink>
          <NavLink to="sign-up"  className='trybtn' >Try Free </NavLink> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default TopBar;