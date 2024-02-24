import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Expense = () => {
    const [ItemList,setItemList]=useState([]);

    async function PostData(obj){
      try{const response=await fetch('https://expensetrackersharp-default-rtdb.firebaseio.com/expenses.json',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
      })
      if(!response.ok){
        throw new Error()
      }
      
      console.log(response);
      window.alert(response);
      }catch(error){
        console.log('this was the error'+error);
      }
    }
    async function GetData(){
      try{
      const response=await fetch('https://expensetrackersharp-default-rtdb.firebaseio.com/expenses.json')
      if(!response.ok){
        throw new Error()
      }

      const data=await response.json();
      
      console.log(Object.values(data));
      setItemList(Object.values(data))
      
      }catch(error){
        console.log('this was the error'+error);
      }
    }
    useEffect(()=>{
      GetData()
    },[])



    // function ItemListHandler(obj){
    //     setItemList([...ItemList,obj]);
    // }
  return (
   <>
        <ExpenseForm  PostData={PostData}/>
        <ExpenseList ListItem={ItemList}/>
   </>
  )
}

export default Expense