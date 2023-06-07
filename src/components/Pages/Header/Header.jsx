import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (

        <Container>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='mt-3'>Journalism Without Fear or Favour</p>
                <p className='mt-2'> {moment().format("dddd, MMMM D, YYYY")} </p>
            </div>

            <div className='d-flex mt-4 fs-6 mb-2 align-items-center'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    <p> <b>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</b> </p>
                </Marquee>
            </div>

                        {/* navbar part  */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-4 mb-4'>
                <Container>
                  
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                         
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>

                            <Nav.Link eventKey={2} href="#memes">
                                   <Button variant="dark"> Log In </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;