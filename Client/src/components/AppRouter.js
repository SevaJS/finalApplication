import React, {useContext} from 'react';
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../http/routes";
import {Redirect, Route, Switch} from "react-router-dom";


const AppRouter = () => {debugger

    const {store} = useContext(Context)


    return (

        <div>

            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {store._isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={'/'}/>
            </Switch>

        </div>
    );
};

export default AppRouter;