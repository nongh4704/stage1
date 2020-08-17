import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/login" component = {NavigationBar}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;