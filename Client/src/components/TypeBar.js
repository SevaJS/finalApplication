import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { Context } from "../index";
import CreateItem from "./modals/CreateItem";

const TypeBar = observer(() => {
  const [show, setShow] = useState(false);
  const { store } = useContext(Context);
  const { types } = useContext(Context);

  return (
    <ListGroup>
      {types.collTypes.map((type) => (
        <ListGroup.Item
          key={type.id}
          style={{ cursor: "pointer" }}
          onClick={() => types.setSelectedType(type)}
          active={type._id === types.selectedType._id}
        >
          {type.type}
        </ListGroup.Item>
      ))}
      {store._isAuth ? (
        <div>
          <Button className="mt-2" onClick={() => setShow(true)}>
            Добавить коллекуцию
          </Button>
          <CreateItem show={show} handleClose={() => setShow(false)} />
        </div>
      ) : (
        <div>
          <Button disabled className="mt-2" onClick={() => setShow(true)}>
            Добавить коллекуцию
          </Button>
        </div>
      )}
    </ListGroup>
  );
});

export default TypeBar;
