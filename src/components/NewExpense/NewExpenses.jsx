import './NewExpenses.css'
import Button from '../UI/button/Button'
import {ExpenseForm} from '../expense-form/ExpenseForm'
import { useState } from 'react'
export const NewExpense = ({onNewExpenseAdd})=>{
    const [showForm,setShowForm]=useState(false)
   
    const showExpensForm= async()=>{
       setShowForm ((prevState)=>{
        return !prevState
       })
    };
    return (
        <div className='new-expenses-box'>
       {showForm ? (<ExpenseForm onShowForm={showExpensForm}
       onNewExpenseAdd={onNewExpenseAdd}/>) : (<Button title='Добавить новый расход' onClick={showExpensForm}/>)}
       
        </div>
    )
}