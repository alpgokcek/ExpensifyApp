import  {createStore, combineReducers} from "redux";
import uuid from 'uuid';
import React from 'react';






//store creation


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
   console.log(visibleExpenses)
});
const e1=store.dispatch(addExpense({description:'rent', amount:100, createdAt:50}));
const e2=store.dispatch(addExpense({description:'coffee', amount:50, createdAt:-20}));
//store.dispatch(removeExpense({ id : e1.expense.id}));
//store.dispatch(editExpense(e2.expense.id, {amount:500} ));
store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(25));
//store.dispatch(setEndDate(32445));


const demoState = {
    expenses:[{
        id:'asdjnsadn',
        description: 'January Rent',
        note:'final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

