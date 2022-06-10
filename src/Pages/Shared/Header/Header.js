import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../../assets/resume/Amena_Akter_Front_End_Web_Developer.pdf';

import './Header.css'


const Header = () => {
    return (
        <Navbar sticky='top' className='navbar-style p-2' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='title-logo fs-4 fw-bold text-white' as={Link} to="/">Amena Akter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='text-center' id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white fs-7' href={resume} download='Amena_Akter_Front_End_Web_Developer'>
                            Download Resume
                        </Nav.Link>
                        <Nav.Link href='#contact' className='text-white fs-7'>
                            Contact Me
                        </Nav.Link>
                        <Nav.Link className='text-white fs-7'>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;