import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {startSetExpenses} from "./actions/expenses";
import {login, logout} from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {firebase, googleAuthProvider} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'


const store = configureStore();

let hasRendered =false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered=true;
    }
};


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    );

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log(store.getState());
        store.dispatch(login(user.uid, user.email));
        console.log('uid', user.uid, user.email);
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
        });
        if (history.location.pathname==='/') {
            history.push('/dashboard');
        }
    }
    else if(!user){
        store.dispatch(logout());
        console.log(store.getState());
        renderApp();
        history.push('/');
    }
});