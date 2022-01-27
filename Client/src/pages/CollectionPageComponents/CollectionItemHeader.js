import React, {useContext, useState} from 'react';
import {Card, Container, FormControl, InputGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Context} from "../../index";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

const CollectionItemHeader = ({item, id}) => {
    const [title, setTitle] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [description, setDescription] = useState('')
    const {items} = useContext(Context)
    const {store} = useContext(Context)
    const author = store._user.id;

    function f(title, description, author) {
        items.createCollItem({title, description, author}, id).then(res => res)
        setTitle('')
        setDescription('')

    }

    return (
        <Container className={"mt-5"} style={{border: "none"}}>
            <Card style={{border: "none"}} className={"p-3"}>
                <Row>
                    <Col md={2}>
                        <Image width={150} alt={"Изображение"} height={150}
                               src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bxhnd6kVOSazM4XZWjZ1cdgjx25wewGa6PMJDzLGyS3vV_gKb1cEFXGv0ev5oa6kTpU&usqp=CAU"}/>
                    </Col>
                    <Col md={6}>
                        <h1>Название:{item.title}</h1>
                        <h3>Автор:{item.author}</h3>
                    </Col>
                    <Col md={4} style={{marginBlock: 0}}>
                        <Row><h1>Рейтинг:</h1></Row>

                    </Col>
                </Row>
                <Row style={{height: 200, alignItems: "center"}} className={"d-flex flex-row align-item-center"}>
                    <Row>
                        <Card style={{height: 150, borderRadius: 20}} className={"m-2"}>
                            <Col className={"m-3"}>
                                {item.description}
                            </Col>
                        </Card>
                    </Row>
                </Row>
            </Card>
            <Card
                style={{border: "none", height: 200}}>
                <DropdownButton id="dropdown-basic-button" title="Добавить предмет">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Название:</InputGroup.Text>
                        <FormControl
                            value={title}
                            onChange={(e => setTitle(e.target.value))}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            Ссылка на изображение:
                        </InputGroup.Text>
                        <FormControl value={imgLink}
                                     onChange={(e => setImgLink(e.target.value))} id="basic-url"
                                     aria-describedby="basic-addon3"/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Описание:</InputGroup.Text>
                        <FormControl value={description} onChange={(e => setDescription(e.target.value))} as="textarea"
                                     aria-label="With textarea" style={{height: 150}}/>
                    </InputGroup>
                    <InputGroup>
                        <Button style={{width: 500}} className="mt-2">Добавить предмет</Button>
                    </InputGroup>
                </DropdownButton>

                {/*<Row>
                    <Button onClick={() => f(title, description, author)}>ADD ITEM</Button>
                    <input
                        value={title}
                        onChange={(e => setTitle(e.target.value))}
                    />
                    <input
                        value={description}
                        onChange={(e => setDescription(e.target.value))}
                    />
                    <input
                        type={"file"}
                    />
                </Row>*/}
            </Card>
        </Container>
    );
};

export default CollectionItemHeader;