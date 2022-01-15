import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import Spinner from "react-bootstrap/Spinner";

const App = () => {


    const {store} = useContext(Context)
    console.log(store._isAuth)
    const [loading, setLoading] = useState(true)

   /* useEffect(() => {
        store.checkAuth().then(data => {
            store.setAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }*/
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }

    },[])
    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default observer(App);
