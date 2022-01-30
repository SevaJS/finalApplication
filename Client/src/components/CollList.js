import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { Context } from "../index";
import CollItem from "./CollItem";

const CollList = observer(() => {
  const { collections } = useContext(Context);
  const { types } = useContext(Context);
  const [items, setItems] = useState("");

  useEffect(() => {
    collections
      .getItems(types._selectedType.type)
      .then((item) => setItems(item));
  }, [types._selectedType]);

  return (
    <div>
      {items !== "" ? (
        <Row className="d-flex ">
          {collections.item.map((item) => (
            <CollItem key={item.id} item={item} />
          ))}
        </Row>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
});

export default CollList;
