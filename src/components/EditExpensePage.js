import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, removeExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            {console.log(props.expense)}
            <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id, expense));
                props.history.push('/dashboard');
            }}
            />

            <button onClick={()=> {
                props.dispatch(removeExpense({id:props.expense.id}));
                props.history.push('/dashboard');
            }}>Remove</button>

        </div>

    );
};

const mapStateToProps = (state, props) => ({expense:state.expenses.find((expense)=> expense.id===props.match.params.id)});

export default connect(mapStateToProps)(EditExpensePage);