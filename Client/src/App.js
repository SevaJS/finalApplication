import './App.css';
import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";

const App = () => {

    const {collections} = useContext(Context)
    const {store} = useContext(Context)
    useEffect(() => {
        collections.getItems()
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])


    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default observer(App);
