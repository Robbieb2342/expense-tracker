import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {
    const [date, setDate] = useState('2016')
    
    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === date
    })

    let filteredContent = <p>No content found.</p>

    if(filteredExpenses.length > 0 ) {
        filteredContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />
            ))
    }

    const filteredDateHandler = (selectedDate) => {
        setDate(selectedDate)

    }
    return(
        <div>
        <Card className='expenses'>
            <ExpenseFilter selected={date} filteredDate={filteredDateHandler} />
            {filteredContent}    
        </Card>
        </div>
    )
}

export default Expenses