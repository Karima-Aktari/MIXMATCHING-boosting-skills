import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
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
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        {/* {
                        user.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                           
                    }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user.displayName}</a>
                    </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;