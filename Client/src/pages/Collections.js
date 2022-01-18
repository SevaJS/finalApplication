import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CollList from "../components/CollList";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Collections = () => {
    const {collections} = useContext(Context)


    useEffect((() => {
            collections.getItems().then(items => collections.setItems(items))
        }
    ), [0])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CollList/>
                </Col>
            </Row>
        </Container>
    );
};

export default observer(Collections);