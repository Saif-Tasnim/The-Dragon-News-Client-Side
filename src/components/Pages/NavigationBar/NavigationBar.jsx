import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user,logOut} = useContext (AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error=>console.log(error));
    }
    
    return (

        <Container>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-4 mb-4'>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link to='/' style={{ color: " #706F6F" , marginTop:"8px", marginRight:"6px" }} className='text-decoration-none' > Home </Link>


                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>

                        </Nav>
                        <Nav className='align-items-center'>
                            {
                                user && <Nav.Link href="#deets">
                                    <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                                </Nav.Link>
                            }

                            { user ?
                                <Link to="/">
                                <Button variant="dark" onClick={handleLogOut}> Log Out </Button>
                               </Link> :
                                
                               <Link to="/login">
                                <Button variant="dark"> Log In </Button>
                               </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;