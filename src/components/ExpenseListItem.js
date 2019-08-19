import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startRemoveExpense} from "../actions/expenses";
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={'/editexpense/'+id}><h3>{description}</h3></Link>
        <p>Amount: {numeral(amount/100).format('$0,0.00')} </p>
        <p>Created At: {moment(createdAt).format('MMMM Do, YYYY')} </p>
        <button onClick={()=> {
            dispatch(startRemoveExpense({id}));
        }}>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);
