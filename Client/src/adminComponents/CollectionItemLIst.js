import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { COLLECTION_ROUTE } from "../utils/consts";
import { Context } from "../index";

const CollectionItemList = observer(({ item }) => {
  const history = useNavigate();
  const { collections } = useContext(Context);

  async function delColl(id, authorID) {
    await collections.dellColl(id, authorID);
  }

  return (
    <div>
      <Container>
        <Card className="m-2">
          <Card.Body>
            <div>ID:{item._id}</div>
            <div>AUTHOR:{item.author}</div>
            <div>TITLE:{item.title}</div>
            <div>THEME:{item.theme}</div>
            <Button
              onClick={() => {
                history(`${COLLECTION_ROUTE}/${item._id}`);
              }}
            >
              Card Link
            </Button>
            <Button
              className="m-2"
              onClick={() => {
                delColl(item._id, item.author);
              }}
            >
              Delete collections
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
});

export default CollectionItemList;
