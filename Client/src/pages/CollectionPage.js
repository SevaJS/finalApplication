import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import CollectionItemHeader from "./CollectionPageComponents/CollectionItemHeader";
import CollectionItems from "./CollectionPageComponents/CollectionItems";
import {Container} from "react-bootstrap";
import CollectionComments from "./CollectionPageComponents/CollectionComments";

const CollectionPage = () => {
    const {collections} = useContext(Context);
    const [item, setItem] = useState({info: []});
    const {id} = useParams()

    useEffect((() => {
            collections.getItem(id).then(item => setItem(item))
        }
    ), [0])

    return (
        <Container>
            <CollectionItemHeader item={item}/>
            <CollectionItems/>
            <CollectionComments/>
        </Container>
    );

};

export default CollectionPage;