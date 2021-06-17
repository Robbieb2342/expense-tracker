import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {

    const [date, setDate] = useState('2019')

    const filteredDateHandler = (selectedDate) => {
        setDate(selectedDate)

    }
    return(
        <div>
        <Card className='expenses'>
        <ExpenseFilter selected={date} filteredDate={filteredDateHandler} />

        {props.data.map((expense) => (
            <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />
            ))}
            
        </Card>
        </div>
    )
}

export default Expenses