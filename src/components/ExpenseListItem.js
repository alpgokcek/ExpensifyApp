import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeExpense} from "../actions/expenses";

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={'/editexpense/'+id}><h3>{description}</h3></Link>
        <p>Amount: {(amount/100).toString()} </p>
        <p>Created At: {createdAt} </p>
        <button onClick={()=> {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);
