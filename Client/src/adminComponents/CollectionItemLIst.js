import React from 'react';
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {COLLECTION_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const CollectionItemList = observer(({items}) => {
    const history = useNavigate();

    return (
        <div>
            {items.map((item) => {
                return (
                    <Container key={item._id}>
                        <Card className="m-2">
                            <Card.Body>
                                <div>ID:{item._id}</div>
                                <div>AUTHOR:{item.author}</div>
                                <div>TITLE:{item.title}</div>
                                <div>THEME:{item.theme}</div>
                                <Button onClick={() => {
                                    history(COLLECTION_ROUTE + '/' + item._id)
                                }}>Card Link</Button>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>

                        </Card>
                    </Container>
                )
            })}

        </div>
    )
},)


export default CollectionItemList;