import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import {observer} from "mobx-react-lite";
import CollectionAddComments from "./CollectionPageComponents/CollectionAddComments";
import CollectionComments from "./CollectionPageComponents/CollectionComments";
import {COLLECTION_ROUTE} from "../utils/consts";
import {Context} from "../index";

const CollectionItemPage = observer(() => {
  const {items} = useContext(Context);
  const [item, setItem] = useState("");
  const {id} = useParams();
  const history = useNavigate();

  async function click() {
    history(`${COLLECTION_ROUTE}/${item._id}`);
  }

  useEffect(() => items.getItem(id).then((res) => setItem(res)), [0]);

  return (
      <div>
        {item ? (
            <div>
              <Container>
                <Card className="m-2">
                  <Card.Header>
                    <Row>
                      <Col>
                        <div>
                          Название: <h4>{items.collItem.title}</h4>
                        </div>
                      </Col>
                      <Col>
                        <Image src={items.collItem.picture[0]}/>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {items.collItem.picture.map((item) => {
                        return (
                            <Col key={item.id} style={{textAlign: "center"}}>
                              <Image
                                  style={{
                                    height: 250,
                                    width: 250,
                                    borderStyle: "solid",
                                    margin: 10,
                                  }}
                                  src={`${item}`}
                              />
                            </Col>
                        );
                      })}
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <Container>
                      <CollectionAddComments id={id}/>
                    </Container>
                    <hr/>
                    <Container>
                      <h2>Коментарии:</h2>
                      {items.collItem.comments.map((comms) => {
                        return <CollectionComments key={comms.id} comms={comms}/>;
                      })}
                    </Container>
                  </Card.Footer>
                </Card>
              </Container>
            </div>
        ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        )}
      </div>
  );
});

export default CollectionItemPage;
