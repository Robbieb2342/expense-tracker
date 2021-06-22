import { useState } from 'react'

import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019')
    
    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    

    const filteredDateHandler = (selectedDate) => {
        setFilteredYear(selectedDate)

    }
    return(
        <div>
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} filteredDate={filteredDateHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />   
        </Card>
        </div>
    )
}

export default Expenses