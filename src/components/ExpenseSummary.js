import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import {connect} from "react-redux";

export const ExpenseSummary = ({total, count}) => {
    const expenseWord = count === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div>
            <h3>
                You have {count} {expenseWord}. Total is {formattedExpensesTotal}.
            </h3>
        </div>
    );
};


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return{
        total: getExpensesTotal(visibleExpenses),
        count: visibleExpenses.length
    }


};

export default connect(mapStateToProps)(ExpenseSummary)