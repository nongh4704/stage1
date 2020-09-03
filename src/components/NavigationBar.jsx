import React, { useEffect } from "react";
import {NavLink, Route, Switch, useRouteMatch, Redirect} from "react-router-dom";
import Home from "./home";
import Signup from "./signup/SignupPage";
import FlashMessageList from "../components/flashMessage/flashMessageList";

const NavigationBar  = () => {
    const match = useRouteMatch();

    return(
        <div>
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "collapse navbar-collapse" id = "navbarSupportedContent">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item"><NavLink className = "nav-link" to = {`${match.url}`}>登录</NavLink></li>
                        <li className = "nav-item"><NavLink className = "nav-link" to = {`${match.url}signup`}>注册</NavLink></li>
                    </ul>
                </div>
            </nav>
            
            <FlashMessageList/>
            <div className = "container">
                <Switch>
                    <Redirect exact from="/" to="/login"/>
                    <Route path={`${match.path}signup`}>
                        <Signup/>
                    </Route>
                    <Route path={`${match.path}`}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default NavigationBar;