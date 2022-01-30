import React from "react";
import Card from "react-bootstrap/Card";

function CollectionComments({ comms }) {
  return (
    <Card style={{ height: 150 }} className="m-3">
      <span className="m-3">
        <h1>{comms.ovner}</h1>
        <hr />
        <h3>{comms.comment}</h3>
      </span>
    </Card>
  );
}

export default CollectionComments;
