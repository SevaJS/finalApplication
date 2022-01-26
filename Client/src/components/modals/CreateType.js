import React, {useContext, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Context} from "../../index";

const CreateType = ({show, handleClose}) => {
    const [type, setType] = useState('')
    const {collections} = useContext(Context)
    const {types} = useContext(Context)
    const addType = () => {
        types.createType({type: type}).then(data => {
            setType('')
            handleClose()
        })
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;