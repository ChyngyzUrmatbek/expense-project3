import './ExpenseItem.css'
export const ExpenseItem =({title,date,price})=>{
    return <div className='expense-item-box'>
        <p>{date.toString()}</p>
        <p>{title}  </p>
        <p>{price}</p>
    </div>
}
