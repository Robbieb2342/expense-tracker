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
            <ExpenseItem 
                title={props.data[0].title}
                amount={props.data[0].amount}
                date={props.data[0].date}
            />
            <ExpenseItem 
                title={props.data[1].title}
                amount={props.data[1].amount}
                date={props.data[1].date}
            />
            <ExpenseItem 
                title={props.data[2].title}
                amount={props.data[2].amount}
                date={props.data[2].date}
            />
            <ExpenseItem 
                title={props.data[3].title}
                amount={props.data[3].amount}
                date={props.data[3].date}
            />
        </Card>
        </div>
    )
}

export default Expenses