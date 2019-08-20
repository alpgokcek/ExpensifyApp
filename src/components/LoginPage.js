import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage'
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";
import {firebase, googleAuthProvider} from "../firebase/firebase";

const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>Expense application with React.</p>
            <a className="box-layout__links" href="http://github.com/alpgokcek">github.com/alpgokcek</a>
            <hr/>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);