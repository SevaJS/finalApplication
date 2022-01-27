import React, {useContext, useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {observer} from "mobx-react-lite";
import CollectionsList from "../userPageComponents/CollectionsList";

const UserPage = observer(() => {
    debugger
    debugger
    const {collections} = useContext(Context);
    const {items} = useContext(Context)
    const {id} = useParams()
    const [user, setUser] = useState("");
    const [key, setKey] = useState('home');
    const [colls, setColls] = useState("");
    const [item, setItem] = useState("");


    useEffect((() => {
            collections.getUser(id).then(item => setUser(item))
            collections.getUsersCollections(id).then(item => setColls(item))


        }
    ), [0])
    return (
        <Container>
            <Card style={{borderRadius: 10}} className={"p-3"}>
                <Row>
                    <Col md={2}>
                        <Image width={150} height={150}
                               src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bxhnd6kVOSazM4XZWjZ1cdgjx25wewGa6PMJDzLGyS3vV_gKb1cEFXGv0ev5oa6kTpU&usqp=CAU"}/>
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
                <Tab eventKey="home" title="Collections">
                    {colls ?
                        <div>
                            {collections.userColls.map(item =>
                                <CollectionsList item={item}/>
                            )}
                        </div>
                        :
                        <div>Тут пока пусто =)</div>

                    }
                </Tab>
                <Tab eventKey="profile" title="Items">
                    {/*{items ?
                        <div>
                            {collections.item.map(item =>
                                <CollectionItemList item={item}/>
                            )}
                        </div>
                        :
                        <div>LOADING</div>

                    }*/}

                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                </Tab>
            </Tabs>


        </Container>
    );
});

export default UserPage;