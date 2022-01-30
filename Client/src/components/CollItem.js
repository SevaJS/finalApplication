import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { COLLECTION_ROUTE } from "../utils/consts";

function CollItem({ item }) {
  const history = useNavigate();

  async function click() {
    history(`${COLLECTION_ROUTE}/${item._id}`);
  }

  return (
    <Col md={4} className="d-flex  mt-4 " onClick={() => click()}>
      <Card
        style={{
          minWidth: 300,
          cursor: "pointer",
          borderStyle: "solid",
          borderColor: "black",
        }}
        className="m-3"
      >
        <Image
          width={200}
          height={200}
          src={item.picture}
          className="mx-auto mt-3"
        />
        <hr />
        <h2>
          Название:
          <br />
          {item.title}
        </h2>
        <hr />
        <h4>Тема:{item.theme}</h4>
        <h4>BY:{item.authorName}</h4>
      </Card>
    </Col>
  );
}

export default CollItem;
