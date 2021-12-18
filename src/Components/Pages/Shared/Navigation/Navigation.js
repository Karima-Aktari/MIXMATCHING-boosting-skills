import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Navigation.css";

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" className="text-dark navigation" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MIXMATCHING</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                   
                    <Nav.Link as={HashLink} to="/home#contact">Contact Me</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link> */}
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user.email ?
                                <div>
                                    <NavLink as={Link} to="/dashBoard">DashBoard</NavLink>
                                    <Button onClick={logout} variant="light">Logout</Button>
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">{user.displayName}</a>
                                    </Navbar.Text>
                                </div> :
                                <Nav.Link as={Link} className="text-dark" to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;