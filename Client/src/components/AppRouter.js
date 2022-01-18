import React from 'react';
import {Route, Routes} from "react-router-dom";
import Auth from "./Auth";
import Admin from "../pages/Admin";
import Collections from "../pages/Collections";
import CollItem from "./CollItem";
import ItemPage from "../pages/ItemPage";


const AppRouter = () => {

    /*
        const {store} = useContext(Context)
    */


    return (

        <div>

            <Routes>
                <Route path={"/"}>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/registration" element={<Auth/>}/>
                    <Route path="/collections" element={<Collections/>}/>
                    <Route path="/collections/:id" element={<ItemPage/>}/>
                </Route>

            </Routes>

        </div>
    );
};

export default AppRouter;