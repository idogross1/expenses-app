import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

function Expenses(props) {
    const { items } = props;
    const [yearFilter, setYearFilter] = useState('');

    const setFilter = (selectedYear) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = items.filter(expense => yearFilter === expense.date.getFullYear().toString());

    return (
        <div>
            <Card classes='expenses'>
                <ExpensesFilter onSetYearFilter={setFilter} selected={yearFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;