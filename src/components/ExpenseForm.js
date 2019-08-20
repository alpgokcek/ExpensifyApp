import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            description:props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:false,
            error:''
        };
    }

    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({note}));
    };

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState(() => ({createdAt}));
    };

    onFocusChange = ({focused}) => {
      this.setState(() => ({calendarFocused: focused}));
    };

    onAmountChange = (e) => {
        let amount = e.target.value;
        if (!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
        else if (!amount || amount.match(/^\d{1,}(\,\d{0,2})?$/)) {
            amount=amount.replace(/,/g, '.');
            this.setState(() => ({amount}));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(()=> ({error:'Please fill the description and amount fields.'}));
            //alert("Please provide description and amount")
        }
        else {
            this.setState(()=> ({error: ''}));
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
    };

    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" placeholder="Description" autoFocus={true} type="text" value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input className="text-input" placeholder="Amount" type="text" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker isOutsideRange={()=> false} numberOfMonths={1} date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange}/>
                    <textarea className="text-area" value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense. (Optional)" />
                    <div>
                        <button className="button">{this.props.type ? 'Save Expense' : 'Add Expense' }</button>
                    </div>
                </form>
        );
    }
}