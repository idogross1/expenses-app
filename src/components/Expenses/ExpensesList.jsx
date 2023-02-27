import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = ({ items }) => {
    if (!items.length) {
        return <h2 className='expenses-list__fallback'>No expennses found</h2>
    }

    return <ul className='expenses-list'>
        {items.map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
    </ul>
}

export default ExpensesList;