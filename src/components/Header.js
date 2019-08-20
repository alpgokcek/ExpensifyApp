import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";
import {bindActionCreators} from "redux";
import {firebase, googleAuthProvider} from "../firebase/firebase";


export const Header = (props) => {
    console.log(props);
    return (
        <div>
            <header>
                <h1>Expensify App</h1>
            </header>
            <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
            <NavLink exact={true} to="/addexpense" activeClassName="is-active">Add Expense</NavLink>
            <button onClick={props.dispatch(startLogout)}>Log Out</button>
            <h5>{props.auth.uid}</h5>
            <h5>{props.auth.email}</h5>
            <hr/>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.auth.uid);
    console.log(state.auth.email);
    return state
};

export default connect(mapStateToProps)(Header);