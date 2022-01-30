import React, { useContext, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { observer } from "mobx-react-lite";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Context } from "../index";
import CollectionItemList from "../adminComponents/CollectionItemLIst";
import ItemsList from "../adminComponents/ItemsList";
import EditUserProfile from "./UsersPageComponents/EditUserProfile";

const UserPage = observer(() => {
  const { collections } = useContext(Context);
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [key, setKey] = useState("home");
  const [colls, setColls] = useState("");
  const [item, setItem] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    collections.getUser(id).then((item) => setUser(item));
    collections.getUsersCollections(id).then((item) => setColls(item));
    collections.getUsersItems(id).then((item) => setItem(item));
  }, [0]);
  return (
    <Container>
      <Card style={{ borderRadius: 10 }} className="p-3">
        <Button
          style={{ width: 150, position: "absolute", top: 0, right: 0 }}
          className="m-3"
          onClick={() => setShow(true)}
        >
          Edit Profile
          <EditUserProfile
            setUser={() => setUser()}
            id={id}
            show={show}
            handleClose={() => setShow(false)}
          />
        </Button>
        <Row>
          <Col md={2}>
            <span>
              <Image
                width={150}
                height={150}
                src={
                  collections.user.avatar
                    ? collections.user.avatar
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bxhnd6kVOSazM4XZWjZ1cdgjx25wewGa6PMJDzLGyS3vV_gKb1cEFXGv0ev5oa6kTpU&usqp=CAU"
                }
              />
            </span>
          </Col>
          <Col md={6}>
            <h1>{collections.user.email}</h1>
            <h2>Ник: {collections.user.nickName}</h2>
          </Col>
        </Row>
        <Row
          style={{ height: 200, alignItems: "center" }}
          className="d-flex flex-row align-item-center"
        >
          <textarea
            value={collections.user.description}
            style={{ maxHeight: "max-content", height: 100, resize: "none" }}
            disabled
          />
        </Row>
      </Card>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Collections">
          {colls ? (
            <div>
              {collections.userColls.map((item) => {
                return <CollectionItemList item={item} key={item._id} />;
              })}
            </div>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Tab>
        <Tab eventKey="profile" title="Items">
          {item ? (
            <div>
              {collections.usersItems.map((item) => {
                return <ItemsList item={item} key={item._id} />;
              })}
            </div>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Tab>
      </Tabs>
    </Container>
  );
});

export default UserPage;
