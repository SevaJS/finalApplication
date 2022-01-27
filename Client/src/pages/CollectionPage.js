import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import CollectionItemHeader from "./CollectionPageComponents/CollectionItemHeader";
import CollectionItems from "./CollectionPageComponents/CollectionItems";
import {Card} from "react-bootstrap";
import CollectionComments from "./CollectionPageComponents/CollectionComments";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CollectionPage = () => {
    const {collections} = useContext(Context);
    const [item, setItem] = useState({info: []});
    const [loading, setIsLoading] = useState(false);
    const {id} = useParams()

    useEffect(() =>
        f(), [0])

    async function f() {
        await collections.getItem(id).then(res => setItem(res))
        setIsLoading(true)


    }

    return (
        <Container style={{border: "black"}}>
            {loading ?
                <Card>
                    <CollectionItemHeader
                        item={item}
                        id={id}
                    />
                    <hr/>
                    <h1 style={{textAlign: "center"}}>Предеметы коллекции</h1>
                    <Row className="d-flex m-5  "
                         style={{alignItems: "center",}}>
                        {collections.item.map(item => {
                            return (
                                <CollectionItems
                                    item={item}
                                    refresh={f}
                                />
                            )

                        })
                        }
                    </Row>
                    <CollectionComments/>
                </Card>
                : "LOADING"
            }</Container>


    );

};

export default CollectionPage;