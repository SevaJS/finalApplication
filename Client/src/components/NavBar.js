import React, {useContext} from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";
import {USER_ROUTE} from "../utils/consts";
import Button from "react-bootstrap/Button";


const NavBar = () => {
    const {store} = useContext(Context)
    console.log(store)

    async function click() {debugger
        history(USER_ROUTE + '/' + store._user.id)

    }

    const history = useNavigate();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav.Link as={Link} style={{color: 'white'}}
                              to='/collections'><Navbar.Brand>СЫЧЕВАЛЬНЯ</Navbar.Brand></Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/collections">Home</Nav.Link>
                            <Nav.Link as={Link} to="#link">Link </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {store._isAuth && store._user.role === 'ADMIN' ?
                        <Nav>
                            <Nav.Link as={Link}
                                      className="me-auto"
                                      to="/admin"
                            >
                                ADMINKA
                            </Nav.Link>
                        </Nav>
                        : <></>
                    }
                    {store._isAuth ?
                        <Nav>
                            <Button onClick={() => click()}>MY PAGE</Button>
                            <Nav.Link as={Link} to="/collections" className="align-item-right"
                                      onClick={() => store.logout()}>LOGOUT</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            <Nav.Link as={Link} to="/registration">REGISTER</Nav.Link>
                        </Nav>


                    }


                </Container>
            </Navbar>


        </div>
    )
        ;
};

export default observer(NavBar);