import React, {useContext} from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const NavBar = () => {
    const {store} = useContext(Context)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav.Link style={{color: 'white'}}
                          href='/collections'><Navbar.Brand>СЫЧЕВАЛЬНЯ</Navbar.Brand></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {store._isAuth ?
                    <Nav>
                        <Nav.Link
                            className="me-auto"
                            href="/admin"
                        >
                            ADMINKA
                        </Nav.Link>
                        <Nav.Link href="/" className="align-item-right" onClick={() => store.logout()}>LOGOUT</Nav.Link>
                    </Nav>
                    :
                    <Nav>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="/registration">REGISTER</Nav.Link>
                    </Nav>


                }


            </Container>
        </Navbar>
    )
        ;
};

export default observer(NavBar);