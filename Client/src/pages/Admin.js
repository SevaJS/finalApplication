import React from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Admin = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className="mt-2">Пользователи</Button>
            <Button variant={'outline-dark'} className="mt-2">Коллекции</Button>
        </Container>
    );
};

export default Admin;