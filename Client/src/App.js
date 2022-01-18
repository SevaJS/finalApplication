import './App.css';
import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";

const App = () => {


    const {store} = useContext(Context)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [0])

    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default observer(App);
