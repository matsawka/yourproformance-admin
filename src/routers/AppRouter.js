import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from '../component/Header';
import Login from '../component/Login';
import Admin from '../component/Admin';
import NotFoundPage from '../component/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Login} exact={true}/>
                <Route path="/home" component={Admin} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;