
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import {NewExpense} from './components/NewExpense/NewExpenses'



function App() {

  const [expenses,setExpenses]=useState([
    {
    
      title:'Туалетная бумага',
      price:300 ,
      date:new Date()
    },
    {
      title:'Зарядник',
      price:400 ,
      date:new Date()
    },
  ])
  
  const addNewExpenseHandler=(data)=>{
    setExpenses((prevState)=>[...prevState,data])
  }
  return (
    <div className="App">
      <header className='header'>
       <NewExpense onNewExpenseAdd={addNewExpenseHandler}/> 
      </header>

<section>
   <Expenses  expenses={expenses}/>
</section>
 
    </div>
  );
}

export default App;
