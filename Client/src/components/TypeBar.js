import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import {Button} from "react-bootstrap";
import CreateItem from "./modals/CreateItem";

const TypeBar = observer(() => {
    const [show, setShow] = useState(false);
    const {collections} = useContext(Context)
    const {store} = useContext(Context)


    return (
        <ListGroup>
            {collections.collTypes.map(type =>
                <ListGroup.Item
                    key={type._id}
                    style={{cursor: 'pointer'}}
                    onClick={() => collections.setSelectedType(type)}
                    active={type._id === collections.selectedType._id}

                >
                    {type.type}
                </ListGroup.Item>
            )}
            {store._isAuth ?
                <div>
                    <Button className="mt-2" onClick={() => setShow(true)}>Добавить коллекуцию</Button>
                    <CreateItem show={show} handleClose={() => setShow(false)}/>
                </div>
                :
                <div>
                    <Button disabled className="mt-2" onClick={() => setShow(true)}>Добавить коллекуцию</Button>
                    <CreateItem show={show} handleClose={() => setShow(false)}/>
                </div>


            }
        </ListGroup>

    );
});

export default TypeBar;