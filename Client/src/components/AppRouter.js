import React, {useContext} from 'react';
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../http/routes";
import {Redirect, Route, Switch} from "react-router-dom";
import {REGISTER_ROUTE} from "../utils/consts";


const AppRouter = () => {

    const {store} = useContext(Context)


    return (
        <div>
            <Switch>
                {store._isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={'/'}/>
            </Switch>

        </div>
    );
};

export default AppRouter;