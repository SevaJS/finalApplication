import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import CollList from "../components/CollList";
import TypeBar from "../components/TypeBar";
import { Context } from "../index";

function Collections() {
  const { types } = useContext(Context);

  useEffect(() => {
    types.getTypes().then((type) => types.setTypes(type));
  }, [0]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <CollList />
        </Col>
      </Row>
    </Container>
  );
}

export default observer(Collections);
