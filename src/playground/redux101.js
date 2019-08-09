import {createStore} from "redux";

const store=createStore((state = {count : 0}, action) =>{
    switch (action.type) {
        case 'inc':
            const incBy = typeof action.incBy === 'number' ? action.incBy : 1;
            return {count:state.count+incBy};
        case 'dec':
            const decBy = typeof action.decBy === 'number' ? action.decBy : 1;
            return {count:state.count-decBy};
        case 'res': return {count:0};
        case 'set': return {count:action.count};
        default: return state;
    }
});

const unsub = store.subscribe(()=> {
    console.log(store.getState())
});

//console.log(store.getState());
store.dispatch({type:'dec', decBy:5});
//console.log("store.dispatch({type:'dec'})",store.getState());
store.dispatch({type:'inc', incBy:4});
//console.log("store.dispatch({type:'inc'})",store.getState());
store.dispatch({type:'inc', incBy:3});
//console.log("store.dispatch({type:'inc'})",store.getState());
store.dispatch({type:'res'});
//console.log("store.dispatch({type:'res'})",store.getState());
store.dispatch({type:'dec'});
//console.log("store.dispatch({type:'dec'})",store.getState());
store.dispatch({type:'set', count:8});
