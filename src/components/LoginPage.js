import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage'
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";
import {firebase, googleAuthProvider} from "../firebase/firebase";

const LoginPage = ({startLogin}) => (
    <div>

            <button onClick={startLogin} >Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);