import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route excat path='/signup' component = {Signup}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;