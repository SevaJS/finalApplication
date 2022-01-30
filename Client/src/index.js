import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import userStore from "./store/userStore";
import collectionsStore from "./store/collectionsStore";
import typeStore from "./store/typeStore";
import collectionsItemStore from "./store/collectionsItemStore";

export const Context = createContext(null);

ReactDOM.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        store: new userStore(),
        collections: new collectionsStore(),
        types: new typeStore(),
        items: new collectionsItemStore(),
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
