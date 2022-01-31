import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CollectionItemHeader from "./CollectionPageComponents/CollectionItemHeader";
import CollectionItems from "./CollectionPageComponents/CollectionItems";

const CollectionPage = observer(() => {
    const {collections} = useContext(Context);
    const {items} = useContext(Context);
    const [item, setItem] = useState("");
    const [collItems, setCollItem] = useState("");
    const [loading, setIsLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        collections.getItem(id).then((res) => setItem(res))
        items
            .getCollectionItem(id)
            .then((res) => setCollItem(res))
            .then(setIsLoading(true));
    }, [0]);

    return (
        <Container style={{border: "black"}}>
            {loading ? (
                <Card>
                    <CollectionItemHeader item={item} id={id}/>
                    <hr/>
                    <h1 style={{textAlign: "center"}}>Предеметы коллекции</h1>
                    <Row className="d-flex m-5  " style={{alignItems: "center"}}>
                        {items.collItems.map((item) => {
                            return <CollectionItems item={item}/>;
                        })}
                    </Row>
                </Card>
            ) : (
                "LOADING"
            )}
        </Container>
    );
});

export default CollectionPage;
