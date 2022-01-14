import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import UserService from "./service/UserService";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

const App = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState([])

    /*useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    })*/


    async function getUsers() {
        try {
            const res = await UserService.fetchUsers();
            setUsers(res.data)

        } catch (e) {

        }
    }


    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default observer(App);
