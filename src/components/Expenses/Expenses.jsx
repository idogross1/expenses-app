import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './Expenses.css';

function Expenses(props) {
    const { items } = props;
    const [yearFilter, setYearFilter] = useState('');

    const setFilter = (selectedYear) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = items.filter(expense => yearFilter === expense.date.getFullYear().toString());

    let expensesContet = <p>No expennses found</p>
    if (filteredExpenses.length) {
        expensesContet = filteredExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />)
    };

    return (
        <div>
            <Card classes='expenses'>
                <ExpensesFilter onSetYearFilter={setFilter} selected={yearFilter} />
                {expensesContet}
            </Card>
        </div>
    )
}

export default Expenses;