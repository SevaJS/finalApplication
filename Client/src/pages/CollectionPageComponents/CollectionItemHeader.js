import React, {useContext, useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Context} from "../../index";

const CollectionItemHeader = ({item, id}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {items} = useContext(Context)

    function f(title, description) {
        debugger
        items.createCollItem({title, description}, id).then(res=>res)

    }

    return (
        <Container className={"mt-5"}>
            <Card style={{borderRadius: 10}} className={"p-3"}>
                <Row>
                    <Col md={2}>
                        <Image width={150} height={150} src={item.picture}/>
                    </Col>
                    <Col md={6}>
                        <h1>{item.title}</h1>
                        <h3>{item.author}</h3>
                    </Col>
                    <Col md={4} style={{marginBlock: 0}}>
                        <Row className={"m-0 mt-4"}>
                            <Col style={{margin: 0, borderBottom: "solid", borderRight: "solid"}}>1</Col>
                            <Col style={{margin: 0, borderBottom: "solid", borderLeft: "solid"}}>2</Col>
                        </Row>
                        <Row className={"m-0"}>
                            <Col style={{margin: 0, borderTop: "solid", borderRight: "solid"}}>3</Col>
                            <Col style={{margin: 0, borderTop: "solid", borderLeft: "solid"}}>4</Col>
                        </Row>

                    </Col>

                </Row>
                <Row style={{height: 200, alignItems: "center"}} className={"d-flex flex-row align-item-center"}>
                    <Row>
                        <Col md={2}>
                            {item.description}
                        </Col>
                        <Col md={2}>
                            <Image width={150} height={150} src={item.picture}/>
                        </Col>
                    </Row>
                </Row>
                <Button onClick={() => f(title, description)}>ADD ITEM</Button>
                <input
                    value={title}
                    onChange={(e => setTitle(e.target.value))}
                />
                <input
                    value={description}
                    onChange={(e => setDescription(e.target.value))}
                />
            </Card>
        </Container>
    );
};

export default CollectionItemHeader;