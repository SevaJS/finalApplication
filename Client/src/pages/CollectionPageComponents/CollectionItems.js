import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {COLLECTION_ITEM_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const CollectionItems = ({item}, id) => {
    debugger
    const history = useNavigate();

    async function click() {
        history(COLLECTION_ITEM_ROUTE + '/' + item.id);
    }

    return (
        <Col md={3} className={'mt-3'} onClick={() => click()}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={item.picture}/>
                {item.title}
                <div>BY:{item.title}</div>
            </Card>

        </Col>


    );
};

export default CollectionItems;