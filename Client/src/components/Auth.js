import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts";

function Auth() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  async function login() {
    try {
      await store.login(email, password);
      history("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  async function register() {
    try {
      await store.register(email, password);
      history("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form style={{ minWidth: 270 }}>
        <h2 className="m-auto">{isLogin ? "Авторизация!" : "Регистрация"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        {isLogin ? (
          <div>
            Не зарегестрированы ?
            <NavLink to={REGISTER_ROUTE}> Регистация!</NavLink>
          </div>
        ) : (
          <div>
            Уже есть аккаунт ? <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
          </div>
        )}
        {isLogin ? (
          <Button variant="primary" onClick={() => login()}>
            Войти
          </Button>
        ) : (
          <Button variant="primary" onClick={() => register()}>
            Регистрация
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default observer(Auth);
