import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount:50,createdAt:23181237}));
store.dispatch(addExpense({description: 'Gas Bill', amount:150,createdAt:23181234237}));
store.dispatch(addExpense({description: 'Rent', amount:51230,createdAt:231237}));
/*
store.dispatch(setTextFilter('bill'));

setTimeout(()=> {
    store.dispatch(setTextFilter('water'));
}, 3000);
*/
const state = store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));
