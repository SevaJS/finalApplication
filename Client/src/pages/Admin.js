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
import ItemsList from "../adminComponents/ItemsList";

const Admin = observer(() => {
    const [collVisible, setCollVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [key, setKey] = useState('home');
    const {collections} = useContext(Context)
    const {items} = useContext(Context)
    const [colls, setColls] = useState("")
    const [item, setItem] = useState("")
    const [users, setUsers] = useState("")

    useEffect((() => {
            collections.getUsers().then(item => setUsers(item))
            collections.getItems().then(item => setColls(item))
            items.getItems().then(item => setItem(item))

        }
    ))
    return (
        <Container className='d-flex flex-column'>
            <Button className="mt-2" variant={'outline-dark'} onClick={() => setCollVisible(true)}>Добавить тип</Button>
            <CreateType show={collVisible} handleClose={() => setCollVisible(false)}/>
            <Button className="mt-2" variant={'outline-dark'} onClick={() => setTypeVisible(true)}>Добавить
                коллекуцию</Button>
            <CreateItem show={typeVisible} handleClose={() => setTypeVisible(false)}/>

            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Users">
                    {users ?
                        <div>
                            {collections.users.map(item =>
                                <UserList user={item}/>
                            )}
                        </div>
                        :
                        <div>LOADING</div>

                    }
                </Tab>
                <Tab eventKey="profile" title="Collections">
                    {colls ?
                        <div>
                            {collections.item.map(item =>
                                <CollectionItemList item={item}/>
                            )}
                        </div>
                        :
                        <div>LOADING</div>

                    }

                </Tab>
                <Tab eventKey="contact" title="Contact">
                    {item ?
                        <div>
                            {items.items.map(item =>
                                <ItemsList item={item}/>
                            )}
                        </div>
                        :
                        <div>LOADING</div>

                    }

                </Tab>
            </Tabs>

        </Container>
    );
});

export default Admin;