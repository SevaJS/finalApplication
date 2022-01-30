import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../index";

function CollectionComments({ id }) {
  const [comment, setComment] = useState("");
  const { items } = useContext(Context);
  const { store } = useContext(Context);

  async function addComment(id, comment) {
    const author = store._user.nickName
      ? store._user.nickName
      : store._user.email;
    await items.addComm(id, comment, author).then((res) => res);
    await items.getItem(id);
    setComment("");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Добавить коментарий:</h2>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        style={{ resize: "none", height: 100, width: 350 }}
      />
      <div>
        <Button onClick={() => addComment(id, comment)}>Добавить</Button>
      </div>
    </div>
  );
}

export default CollectionComments;
