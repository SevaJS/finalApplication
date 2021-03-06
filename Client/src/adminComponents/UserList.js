import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { USER_ROUTE } from "../utils/consts";

function UserList({ user }) {
  const { collections } = useContext(Context);
  const history = useNavigate();

  async function delUser(id) {
    await collections.dellUser(id);
  }

  return (
    <div>
      <Container>
        <Card className="m-2">
          <Card.Body>
            <div>ID:{user._id}</div>
            <div>EMAIL:{user.email}</div>
            <div>ROLE:{user.role}</div>
            <Button
              className="m-2"
              onClick={() => {
                history(`${USER_ROUTE}/${user._id}`);
              }}
            >
              USER PAGE
            </Button>
            <Button className="m-2" onClick={() => delUser(user._id)}>
              BAN
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default observer(UserList);
