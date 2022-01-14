import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Form} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "../utils/consts";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location)


    return (
        <Container className="d-flex justify-content-center align-items-center">

            <Form>
                <h2 className="m-auto">{
                    isLogin ?
                        "Авторизация!"
                        :
                        "Регистрация"

                }
                </h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}
                                  value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}
                                  value={password}/>
                </Form.Group>
                {
                    <div>Не зарегестрированы ?<NavLink to={REGISTER_ROUTE}> Регистация!</NavLink></div>
                }


                <Button variant="primary" type="submit">
                    {}
                </Button>
            </Form>
        </Container>
        /* <div className="App">
             <div>
                 <input
                     onChange={e => setEmail(e.target.value)}
                     value={email}
                     type="text"
                     placeholder="Email"
                 />
             </div>
             <div>
                 <input
                     onChange={e => setPassword(e.target.value)}
                     value={password}
                     type="password"
                     placeholder="Password"
                 />
             </div>
             <button onClick={() => store.login(email, password)}>Login</button>
             <button onClick={() => store.register(email, password)}>Register</button>

         </div>*/
    );
};

export default observer(Auth);