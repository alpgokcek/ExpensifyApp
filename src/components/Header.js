import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../actions/auth";
import {bindActionCreators} from "redux";
import {firebase, googleAuthProvider} from "../firebase/firebase";


export const Header = (props) => {
    console.log(props);
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" exact={true} to="/dashboard"><h1>Expensify App</h1></Link>
                    <div className="header__content2">
                        <h5>{props.auth.email}</h5>
                        <button className="button" onClick={props.dispatch(startLogout)}>Log Out</button>
                    </div>
                </div>
            </div>
        </header>

    );
};

const mapStateToProps = (state) => {
    console.log(state.auth.uid);
    console.log(state.auth.email);
    return state
};

export default connect(mapStateToProps)(Header);