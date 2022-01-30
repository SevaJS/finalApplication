import React from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "./Auth";
import Admin from "../pages/Admin";
import Collections from "../pages/Collections";
import ItemPage from "../pages/CollectionPage";
import UserPage from "../pages/UserPage";
import CollectionItemPage from "../pages/CollectionItemPage";
import NavBar from "./NavBar";

function AppRouter() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Collections/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<Auth/>}/>
            <Route path="/registration" element={<Auth/>}/>
            <Route path="/collections/:id" element={<ItemPage/>}/>
            <Route path="/collectionItem/:id" element={<CollectionItemPage/>}/>
            <Route path="/users/:id" element={<UserPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default AppRouter;
