import React, { useContext, useState } from "react";
import { Card, Container, FormControl, InputGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Resizer from "react-image-file-resizer";
import { Context } from "../../index";

function CollectionItemHeader({ item, id }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [description, setDescription] = useState("");
  const { items } = useContext(Context);
  const { store } = useContext(Context);
  const author = store._user.id;
  const [drag, setDrag] = useState(false);

  function createItem(title, description, author) {
    if (author !== item.author && store._user.role !== "ADMIN") {
      alert("Вы не являетесь владельцом коллекции!");
      return null
    }
    items
      .createCollItem({ title, description, author, file }, id)
      .then((res) => res);
    setFile("");
    setTitle("");
    setDescription("");
  }

  const resizeFile = (file) =>
    new Promise(() => {
      Resizer.imageFileResizer(
        file,
        250,
        250,
        "JPEG",
        100,
        0,
        (uri) => {
          setFile((old) => [...old, uri]);
        },
        "base64"
      );
    });

  function dragStartHandle(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandle(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandle(e) {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    for (let i = 0; files.length >= i; i++) {
      resizeFile(files[i]);
    }

    setDrag(false);
  }

  return (
    <Container className="mt-5" style={{ border: "none" }}>
      <Card style={{ border: "none" }} className="p-3">
        <Row>
          <Col md={2}>
            <Image
              width={150}
              alt="Изображение"
              height={150}
              src={item.picture}
            />
          </Col>
          <Col md={6}>
            <h1>Название:{item.title}</h1>
            <h3>Автор:{store._user.email}</h3>
          </Col>
          <Col md={4} style={{ marginBlock: 0 }}>
            <Row>
              <h1>Рейтинг: {item.rating}</h1>
            </Row>
          </Col>
        </Row>
        <Row
          style={{ height: 200, alignItems: "center" }}
          className="d-flex flex-row align-item-center"
        >
          <Row>
            <Card style={{ height: 150, borderRadius: 20 }} className="m-2">
              <Col className="m-3">{item.description}</Col>
            </Card>
          </Row>
        </Row>
      </Card>
      <Card style={{ border: "none", height: 450 }}>
        <h2>Добавление предмета</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Название:</InputGroup.Text>
          <FormControl
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Изображение:</InputGroup.Text>
          {drag ? (
            <Container
              className="drop"
              style={{ borderStyle: "solid", textAlign: "center", height: 100 }}
              onDragStart={(e) => dragStartHandle(e)}
              onDragLeave={(e) => dragLeaveHandle(e)}
              onDragOver={(e) => dragStartHandle(e)}
              onDrop={(e) => onDropHandle(e)}
            >
              Отпустите файл.
            </Container>
          ) : (
            <Container
              style={{ borderStyle: "solid", textAlign: "center", height: 100 }}
              onDragStart={(e) => dragStartHandle(e)}
              onDragLeave={(e) => dragLeaveHandle(e)}
              onDragOver={(e) => dragStartHandle(e)}
            >
              Перетащите файл.
            </Container>
          )}
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Описание:</InputGroup.Text>
          <FormControl
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            aria-label="With textarea"
            style={{ height: 150 }}
          />
        </InputGroup>
        <InputGroup>
          {store._isAuth ? (
            <Button
              style={{ width: 500 }}
              className="mt-2 mx-auto"
              onClick={() => createItem(title, description, author)}
            >
              Добавить предмет
            </Button>
          ) : (
            <Button style={{ width: 500 }} className="mt-2 mx-auto" disabled>
              Добавить предмет
            </Button>
          )}
        </InputGroup>
      </Card>
    </Container>
  );
}

export default CollectionItemHeader;
