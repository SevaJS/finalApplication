import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom";
import {COLLECTION_ROUTE} from "../utils/consts";


const CollItem = ({item}) => {
    async function click() {
        history(COLLECTION_ROUTE + '/' + item._id);


    }

    const history = useNavigate();
    return (
        <Col md={3} className={'mt-3'} onClick={() => click()}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={item.picture}/>
                {item.title}
            </Card>

        </Col>
    );
};

export default CollItem;