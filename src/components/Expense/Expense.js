import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Expense = () => {
    const [ItemList,setItemList]=useState([]);
    function ItemListHandler(obj){
        setItemList([...ItemList,obj]);
    }
  return (
   <>
        <ExpenseForm ItemListHandler={ItemListHandler}/>
        <ExpenseList ListItem={ItemList}/>
   </>
  )
}

export default Expense