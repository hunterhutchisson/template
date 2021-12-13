import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-yellow">
  <Container>
  <Link to="/" className="changeFZ"><FontAwesomeIcon icon={["fab", "markdown"]} color="gray" /></Link>
  <Navbar.Toggle className="color-purple" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    </Nav>
    <Nav>
    <Link key={1} to="/" className="ms-3">HOME</Link>
                        <Link key={2} to="/preview" className="ms-3 ">PREVIEW</Link>
                        <Link key={3} to="/markdown" className="ms-3 ">MARKDOWN</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header
