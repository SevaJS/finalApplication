import React, {useContext} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const NavBar = () => {
    const {store} = useContext(Context)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">СЫЧЕВАЛЬНЯ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {store._isAuth ?

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ADMINKA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1">NE ADMIN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>

                        }
                        {store._isAuth ?
                            <Nav.Link href="/">LOGOUT</Nav.Link>
                            :
                            <Nav>
                                <Nav.Link href="/login">LOGIN</Nav.Link>
                                <Nav.Link href="/registration">REGISTER</Nav.Link>
                            </Nav>


                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default observer(NavBar);