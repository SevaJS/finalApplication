import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateItem from "../components/modals/CreateItem";

const Admin = () => {
    debugger
    const [visible, setVisible] = useState(false);
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className="mt-2" onClick={() => setVisible(true)}>Пользователи</Button>
            <Button variant={'outline-dark'} className="mt-2">Коллекции</Button>
            <Button className="mt-2" onClick={() => setVisible(true)}>Добавить коллекуцию</Button>
            <CreateItem show={visible} handleClose={() => setVisible(false)}/>
        </Container>
    );
};

export default Admin;