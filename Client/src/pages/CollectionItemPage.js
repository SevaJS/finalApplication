import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";

const CollectionItemPage = () => {
    const {items} = useContext(Context);
    const [item, setItem] = useState('');
    const {id} = useParams()

    useEffect(() =>
        items.getItem(id).then(res => setItem(res)), [0])
    return (
        <div>
            <Container>


                <div>{item.description}</div>
                <div>{item.title}</div>


            </Container>
            <Container>
                <div>COMMENTS</div>
            </Container>
        </div>


    );

};

export default CollectionItemPage;