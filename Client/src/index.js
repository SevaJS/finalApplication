import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import collectionsStore from "./store/collectionsStore";


export const Context = createContext(null)

ReactDOM.render(
    <BrowserRouter>
        <Context.Provider value={{
            store: new store(),
            collections: new collectionsStore()

        }}>
            <App/>
        </Context.Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
