import "./App.css";
import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import { Context } from "./index";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth().then((res) => res);
    }
  }, []);

  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default observer(App);
