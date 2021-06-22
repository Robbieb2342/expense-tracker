import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEdited, setEdited] = useState(false)

    const startEdit = () => {
        setEdited(true)
    }

    const endEdit = () => {
        setEdited(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        props.onAddExpense(expenseData)
        setEdited(false)
    }

    return(
        <div className='new-expense'>
            {!isEdited && <button onClick={startEdit}>Add new expense</button>}
            {isEdited && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={endEdit}/>}
        </div>
    )
}


export default NewExpense