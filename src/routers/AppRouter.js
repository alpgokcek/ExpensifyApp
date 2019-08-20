import React from 'react';
import {Router, Route, BrowserRouter, Link, Switch, NavLink} from "react-router-dom";
import * as hist from 'history'
import Login from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Err404NotFoundPage from '../components/Err404NotFoundPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = hist.createBrowserHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={true} component={Login}/>
                <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage}/>
                <PrivateRoute path="/addexpense" exact={true} component={AddExpensePage}/>
                <PrivateRoute path="/editexpense/:id" component={EditExpensePage}/>
                <Route component={Err404NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);
export default AppRouter;