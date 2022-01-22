import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateItem from "../components/modals/CreateItem";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Context} from "../index";
import UserList from "../adminComponents/UserList";
import CreateType from "../components/modals/CreateType";
import CollectionItemList from "../adminComponents/CollectionItemLIst";
import {observer} from "mobx-react-lite";

const Admin = () => {
    const [collVisible, setCollVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [key, setKey] = useState('home');
    const {collections} = useContext(Context)
    const [items, setItems] = useState("")
    const [users, setUsers] = useState("")

    useEffect((() => {
            collections.getUsers().then(item => setUsers(item))
            collections.getItems().then(item => setItems(item))

        }
    ), [])
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className="mt-2">Пользователи</Button>
            <Button variant={'outline-dark'} className="mt-2">Коллекции</Button>
            <Button className="mt-2" onClick={() => setCollVisible(true)}>Добавить тип</Button>
            <CreateType show={collVisible} handleClose={() => setCollVisible(false)}/>
            <Button className="mt-2" onClick={() => setTypeVisible(true)}>Добавить коллекуцию</Button>
            <CreateItem show={typeVisible} handleClose={() => setTypeVisible(false)}/>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Users">
                    {users ?

                        <UserList users={users}/>
                        :
                        <div>LOADING</div>

                    }
                </Tab>
                <Tab eventKey="profile" title="Collections">
                    {items ?

                        <CollectionItemList items={items}/>
                        :
                        <div>LOADING</div>

                    }

                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                </Tab>
            </Tabs>

        </Container>
    );
};

export default observer(Admin);