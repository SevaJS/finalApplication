import React, {useContext, useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Context} from "../index";
import {useParams} from "react-router-dom";

const ItemPage = () => {
    const {collections} = useContext(Context);
    const [item, setItem] = useState({info: []});
    const {id} = useParams()

    useEffect((() => {
            collections.getItem(id).then(item => setItem(item))
        }
    ), [0])

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
            </Card>
        </Container>
    );
};

export default ItemPage;