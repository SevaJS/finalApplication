import {useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {observer} from "mobx-react-lite";
import Resizer from "react-image-file-resizer";
import {Context} from "../../index";

function CreateItem({show, handleClose}) {
    const {collections} = useContext(Context);
    const {store} = useContext(Context);
    const {types} = useContext(Context);
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [typess, setType] = useState("");
    const [desc, setDescription] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        f();
    }, []);

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                150,
                150,
                "JPEG",
                100,
                0,
                (uri) => {
                    setFile(uri);
                },
                "base64"
            );
        });

    async function addItem() {
        debugger;
        const picture = file;
        const title = name;
        const author = store._user.id;
        const theme = types.selectedTypeToCreate.type;
        const description = desc;
        const authorName = store._user.email;
        await collections
            .createCollection({
                picture,
                title,
                author,
                theme,
                description,
                authorName,
            })
            .then(handleClose);
        setFile("");
        setDescription("");
        setName("");
    }

    async function f() {
        await types
            .getTypes()
            .then((types) => setType(types))
            .then(collections.getItems());
        setLoading(true);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить коллекцию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <DropdownToggle>
                            {types.selectedTypeToCreate.type || "Выберите тип"}
                        </DropdownToggle>
                        <DropdownMenu>
                            {isLoading
                                ? typess.map((type) => (
                                    <DropdownItem
                                        onClick={() => types.setSelectedTypeToCreate(type)}
                                        key={type.id}
                                    >
                                        {type.type}
                                    </DropdownItem>
                                ))
                                : "LOADING"}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Название Коллекции"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={(e) => resizeFile(e.target.files[0])}
                    />
                    <Form.Control
                        value={desc}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Краткое описание"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={addItem}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default observer(CreateItem);
