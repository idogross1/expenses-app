import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');
    const [displayForm, setDisplayForm] = useState(false);

    const toggleForm = () => {
        setDisplayForm((prevState) => {
            return !prevState
        })
    }


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(+event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const subimtHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        onSaveExpenseData(expenseData);
        toggleForm();

        setEnteredTitle('');
        setEnteredAmount(0);
        setEnteredDate('');
    }

    return <div className="form-container">
        {!displayForm && <button onClick={toggleForm}>Add New Expense</button>}
        {displayForm && <form onSubmit={subimtHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2023-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>}
    </div>
}

export default ExpenseForm;