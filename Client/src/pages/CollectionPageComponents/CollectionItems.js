import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { COLLECTION_ITEM_ROUTE } from "../../utils/consts";

const CollectionItems = observer(({ item }, id) => {
  const history = useNavigate();

  async function click() {
    history(`${COLLECTION_ITEM_ROUTE}/${item._id}`);
  }

  return (
    <Col md={3} className="mt-3" onClick={() => click()}>
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image width={150} height={150} src={item.picture[0]} />
        <h3>Название:{item.title}</h3>
      </Card>
    </Col>
  );
});

export default CollectionItems;
