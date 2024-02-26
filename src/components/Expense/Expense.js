import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { authActions } from '../../store/AuthReduces';
import { ExpenseActions } from '../../store/ExpensesReducers';
import { useDispatch } from 'react-redux';

const Expense = () => {
  const [postput,setPostPut]=useState(false);
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [updatedKey,setUpdatedKey]=useState(null);

    const [ItemList,setItemList]=useState([]);
//i am writting this comment because i am not able to see this PostData

const dispatch=useDispatch();
    async function PostData(obj='defalut value'){

      console.log(postput)
      console.log(updatedKey)

     if(!postput){
      console.log('this one add function')
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

      //this below code is run when you press on update button
     }else{
      console.log('bro updated key function ran this ttime')

      try{
        const response=await fetch(`https://expensetrackersharp-default-rtdb.firebaseio.com/expenses/${updatedKey}.json`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({moneySpent, description, category})
        });
      if(!response.ok){
        throw new Error('got it!')
      }
      GetData()
      console.log('updated');
      }catch(error){
        console.log('this was the error'+error);
      }

     }
    }

    async function GetData(){
      try{
      const response=await fetch('https://expensetrackersharp-default-rtdb.firebaseio.com/expenses.json')
      if(!response.ok){
        throw new Error()
      }

      const data=await response.json();
      
      console.log(Object.entries(data));
      setItemList(Object.entries(data));
       dispatch(ExpenseActions.setExpense(Object.entries(data)))
      
      }catch(error){
        console.log('this was the error'+error);
      }
    }



    useEffect(()=>{
      GetData()
    },[])

  
  return (
   <>
        <ExpenseForm  
          PostData={PostData}
          moneySpent={moneySpent}
          description={description}
          category={category}
          setMoneySpent={setMoneySpent}
          setDescription={setDescription}
          setCategory={setCategory}
        />
        <ExpenseList
          ListItem={ItemList}
          GetData={GetData} 
          moneySpent={moneySpent}
          description={description}
          category={category}
          setMoneySpent={setMoneySpent}
          setDescription={setDescription}
          setCategory={setCategory}
          postput={postput}
          setPostPut={setPostPut}
          PostData={PostData}
          setUpdatedKey={setUpdatedKey}
           />
   </>
  )
}

export default Expense