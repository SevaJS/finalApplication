import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import CollItem from "./CollItem";

const CollList = observer(() => {
    const {collections} = useContext(Context)


    return (

        <div>
            <Row className="d-flex ">
                {collections.item.map(item =>
                    <CollItem key={item.id} item={item}/>
                )}
            </Row>
        </div>
    );
});

export default CollList;