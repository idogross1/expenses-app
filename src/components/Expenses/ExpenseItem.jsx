import React, {useState} from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const { date, amount } = props.expense;
    const [title, setTitle] = useState(props.expense.title);

    return (
        <Card classes='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;