import React, {useContext, useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const UserPage = () => {
    debugger
    const {collections} = useContext(Context);
    const {id} = useParams()
    const [user, setUser] = useState("");


    useEffect((() => {
            collections.getUser(id).then(item => setUser(item))
        }
    ), [0])
    return (
        <Container>
            <Card style={{borderRadius: 10}} className={"p-3"}>
                <Row>
                    <Col md={2}>
                        <Image width={150} height={150} src={user.picture}/>
                    </Col>
                    <Col md={6}>
                        <h1>{user.email}</h1>
                    </Col>
                </Row>
                <Row style={{height: 200, alignItems: "center"}} className={"d-flex flex-row align-item-center"}>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                </Row>
            </Card>


        </Container>
    );
};

export default UserPage;