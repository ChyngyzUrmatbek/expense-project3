import { useState } from "react"
import Button from "../UI/button/Button"
import FormInput from "../UI/FormInput/FormInput"
import './ExpenseForm.css'
export const ExpenseForm =(props)=>{
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const [date,setDate]=useState(null)

    const cancelHandler = (event)=>{
      event.preventDefault()
    props.onShowForm()
    };

    const titleInputChangeHandler = (event)=>{
        setTitle(event.target.value)
    }
    const priceInputChangeHandler=(event)=>{
        const value = event.target.value
        if(value.charAt(0)!== '-'){
        setPrice(event.target.value)
    }
}

    const dateInputChangeHandler=(event)=>{
        setDate(event.target.value)
    }
    const saveHandler=(event)=>{
       event.preventDefault();
       const expenseData ={
        title,
        date,
        price,
       };
       props.onNewExpenseAdd(expenseData)
    }
    return(
        <form  className="expense-form">
     <FormInput
     id='name'
     LableName='Название'
     
     type='text'
     placeholder='Введите ...'
     value={title}
     onChange={titleInputChangeHandler}
     
     />

<FormInput
    id='price'
     LableName='Количество денег'
     type='number'
     value={price}
     placeholder=''
     onChange={priceInputChangeHandler}
    //  onKeyPress={(event)=>event.key }
     />
<FormInput
     id='date'
     LableName='Дата'
     type='date'
     value={date}
     placeholder='дд.мм.гггг'
     onChange={dateInputChangeHandler}
     />
     <div className="btn-wrapp">
         <Button   title='Отмена' onClick={cancelHandler}/>
     <Button  title='Сохранить расходы' onClick={saveHandler}/></div>  
       
        </form>
    )
}