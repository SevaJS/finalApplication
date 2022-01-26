import React, {useContext, useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import UserList from "../adminComponents/UserList";
import CollectionItemList from "../adminComponents/CollectionItemLIst";
import Tabs from "react-bootstrap/Tabs";

const UserPage = () => {
    debugger
    const {collections} = useContext(Context);
    const {id} = useParams()
    const [user, setUser] = useState("");
    const [key, setKey] = useState('home');


    useEffect((() => {
            collections.getUser(id).then(item => setUser(item))

        }
    ), [0])
    return (
        <Container>
            <Card style={{borderRadius: 10}} className={"p-3"}>
                <Row>
                    <Col md={2}>
                        <Image width={150} height={150} src={user.picture}/>
                    </Col>
                    <Col md={6}>
                        <h1>{user.email}</h1>
                    </Col>
                </Row>
                <Row style={{height: 200, alignItems: "center"}} className={"d-flex flex-row align-item-center"}>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                </Row>
            </Card>


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
                    {items ?
                        <div>
                            {collections.item.map(item =>
                                <CollectionItemList item={item}/>
                            )}
                        </div>
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

export default UserPage;