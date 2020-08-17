import React from "react";
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import Home from "./home";
import Signup from "./signup/SignupPage";

const NavigationBar  = () => {
    const match = useRouteMatch();
    return(
        <div>
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item"><NavLink className = "nav-link" to = {`${match.path}/`}>登录</NavLink></li>
                        <li className = "nav-item"><NavLink className = "nav-link" to = {`${match.path}/signup`}>注册</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path={`${match.url}/signup`}>
                    <Signup/>
                </Route>
                <Route path={`${match.url}`}>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default NavigationBar;