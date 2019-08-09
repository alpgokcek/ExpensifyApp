 import React from 'react';
 import {NavLink} from "react-router-dom";

 const Header = () => (
     <div>
         <header>
             <h1>Expensify App</h1>
         </header>
         <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
         <NavLink exact={true} to="/addexpense" activeClassName="is-active">Add Expense</NavLink>
         <NavLink exact={true} to="/editexpense" activeClassName="is-active">Edit Expense</NavLink>
         <NavLink exact={true} to="/help" activeClassName="is-active">Help</NavLink>
         <hr/>
     </div>
 );

 export default Header;