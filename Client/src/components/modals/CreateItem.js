import React, {useContext, useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Context} from "../../index";
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {observer} from "mobx-react-lite";

const CreateItem = ({show, handleClose}) => {
    const {collections} = useContext(Context)
    const {store} = useContext(Context)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [types, setType] = useState('')
    const [desc, setDescription] = useState('')
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        f()
    }, [0])


    const addItem = () => {
        const title = name
        const author = store._user.id
        const theme = collections.selectedTypeToCreate.type
        const description = desc
        const picture = file
        collections.createCollection({title, author, theme, description, picture}).then(data => handleClose)


    }

    async function f() {
        await collections.getTypes().then(types => setType(types))
        setLoading(true)

    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить коллекцию
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown>
                            <DropdownToggle>{collections.selectedTypeToCreate.type || "Выберите тип"}</DropdownToggle>
                            <DropdownMenu>
                                {isLoading ?
                                    types.map(type =>
                                        <DropdownItem onClick={() => collections.setSelectedTypeToCreate(type)}
                                                      key={type.id}>
                                            {type.type}
                                        </DropdownItem>
                                    ) : "LOADING"}
                            </DropdownMenu>

                        </Dropdown>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-3"
                            placeholder="Название Коллекции"
                        />
                        <Form.Control
                            className="mt-3"
                            type="file"
                            onChange={selectFile}
                        />
                        <Form.Control
                            value={desc}
                            onChange={e => setDescription(e.target.value)}
                            className="mt-3"
                            placeholder="Краткое описание"
                        />
                        <hr/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                    <Button variant="outline-success" onClick={addItem}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default observer(CreateItem);