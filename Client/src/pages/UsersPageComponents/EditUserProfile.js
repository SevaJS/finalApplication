import React, { useContext, useState } from "react";
import Resizer from "react-image-file-resizer";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const EditUserProfile = observer(({ show, handleClose, id }) => {
  const [desc, setDescription] = useState("");
  const { collections } = useContext(Context);
  const [nickName, setNickName] = useState("");
  const [file, setFile] = useState(null);
  const { store } = useContext(Context);
  const resizeFile = (file) =>
    new Promise(() => {
      Resizer.imageFileResizer(
        file,
        150,
        150,
        "JPEG",
        100,
        0,
        (uri) => {
          setFile(uri);
        },
        "base64"
      );
    });

  async function editProfile() {
    if (!nickName && !file && !desc) {
      alert("Хотя бы одно поле должно быть заполнено");
    } else {
      let picture;
      let description;
      let nick;
      if (!nickName) {
        nick = collections.user.nickName;
      } else nick = nickName;
      if (!file) {
        picture = collections.user.avatar;
      } else picture = file;
      if (!desc) {
        description = collections.user.description;
      } else description = desc;

      await store
        .editProfile({ picture, description, nick, id })
        .then(handleClose);
      await collections.getUser(id);
      setFile("");
      setDescription("");
      setNickName("");
    }
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Изменить профиль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            className="mt-3"
            placeholder="Никнейм:"
          />
          <Form.Control
            className="mt-3"
            type="file"
            onChange={(e) => resizeFile(e.target.files[0])}
          />
          <Form.Control
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3"
            placeholder="Краткое описание"
          />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={editProfile}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default EditUserProfile;
