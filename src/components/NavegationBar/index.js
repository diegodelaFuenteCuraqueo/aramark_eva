import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Navbar, Nav } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi'
import './styles.css'
import '../../App.css'

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ background: 'black', border: 'none' }}>
            <BiMenu />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/home">Home</Dropdown.Item>
              {/*<Dropdown.Item as={Link} to="/course">Course</Dropdown.Item>*/}
              {/*<Dropdown.Item as={Link} to="/videoplayer">VideoPlayer</Dropdown.Item>*/}
              <Dropdown.Item as={Link} to="/register">Registrar usuario</Dropdown.Item>
              <Dropdown.Item as={Link} to="/quiz">Quiz</Dropdown.Item>
              <Dropdown.Item as={Link} to="/certificate">Certificate</Dropdown.Item>
              <Dropdown.Item as={Link} to="/login">Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/home">
        <div className='logo-box'>
          <img className='logo grow' src="/assets/Aramark_logo_horizontal.png" alt="Aramark Logo"></img>
        </div>
      </Navbar.Brand>
    </Navbar>
  )
}
