import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {collections} = useContext(Context)
    return (
        <ListGroup>
            {collections.collTypes.map(type =>
                <ListGroup.Item
                    key={type.id}
                    style={{cursor: 'pointer'}}
                    onClick={() => collections.setSelectedType(type)}
                    active={type.id === collections.selectedType.id}

                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;