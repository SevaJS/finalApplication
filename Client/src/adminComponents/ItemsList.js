import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Context } from "../index";
import { COLLECTION_ITEM_ROUTE } from "../utils/consts";

const ItemsList = observer(({ item }) => {
  const history = useNavigate();
  const { collections } = useContext(Context);

  async function delColl(id, authorID) {
    await collections.dellUserItem(id, authorID);
  }

  return (
    <div>
      <Container>
        <Card className="m-2">
          <Card.Body>
            <Row>
              <Col>
                <div>
                  Название: <h4>{item.title}</h4>
                </div>
                <Button
                  onClick={() => {
                    history(`${COLLECTION_ITEM_ROUTE}/${item._id}`);
                  }}
                >
                  Card Link
                </Button>
                <Button
                  className="m-2"
                  onClick={() => {
                    delColl(item._id, item.motherCollId);
                  }}
                >
                  Delete item
                </Button>
              </Col>
              <Col>
                <Image src={item.picture[0]} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
});

export default ItemsList;
