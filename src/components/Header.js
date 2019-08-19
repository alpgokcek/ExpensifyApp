 import React from 'react';
 import {NavLink} from "react-router-dom";
 import {connect} from "react-redux";

 const Header = () => (
     <div>
         <header>
             <h1>Expensify App</h1>
         </header>
         <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
         <NavLink exact={true} to="/addexpense" activeClassName="is-active">Add Expense</NavLink>
         <hr/>
     </div>
 );



 export default connect()(Header);