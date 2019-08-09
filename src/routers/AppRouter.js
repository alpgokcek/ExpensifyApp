import React from 'react';
import {Route, BrowserRouter, Link, Switch, NavLink} from "react-router-dom";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Err404NotFoundPage from '../components/Err404NotFoundPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage}/>
                <Route path="/addexpense" exact={true} component={AddExpensePage}/>
                <Route path="/editexpense/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={Err404NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;