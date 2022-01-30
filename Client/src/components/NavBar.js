import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router";
import { USER_ROUTE } from "../utils/consts";
import { Context } from "../index";

function NavBar() {
  const { store } = useContext(Context);
  const history = useNavigate();

  async function click() {
    history(`${USER_ROUTE}/${store._user.id}`);
  }

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Nav.Link as={Link} style={{ color: "white" }} to="/">
              <Navbar.Brand>My Collections</Navbar.Brand>
            </Nav.Link>
            {store._isAuth && store._user.role === "ADMIN" ? (
              <Nav>
                <Nav.Link
                  as={Link}
                  style={{ backgroundColor: "antiquewhite", borderRadius: 10 }}
                  className="me-auto"
                  to="/admin"
                >
                  ADMINKA
                </Nav.Link>
              </Nav>
            ) : (
              <></>
            )}
            {store._isAuth ? (
              <Nav>
                <Button onClick={() => click()}>MY PAGE</Button>
                <Nav.Link
                  as={Link}
                  to="/"
                  className="align-item-right"
                  onClick={() => store.logout()}
                >
                  LOGOUT
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  LOGIN
                </Nav.Link>
                <Nav.Link as={Link} to="/registration">
                  REGISTER
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
}

export default observer(NavBar);
