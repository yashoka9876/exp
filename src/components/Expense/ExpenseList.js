import React from 'react'



const ExpenseList = ({
  ListItem,
  GetData,
  moneySpent,
  description,
  category,
  setMoneySpent,
  setDescription,
  setCategory,
  postput,
  setPostPut,
  PostData,
  setUpdatedKey
}) => {


  async function deleteHandler(id){
    console.log(id)
    try{
      const response=await fetch(`https://expensetrackersharp-default-rtdb.firebaseio.com/expenses/${id}.json`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      });
    if(!response.ok){
      throw new Error('got it!')
    }
    GetData()
    console.log(response);
    }catch(error){
      console.log('this was the error'+error);
    }
  }


  async function updateHandler(obj){
    console.log(obj)
    setMoneySpent(obj.moneySpent);
    setDescription(obj.description);
    setCategory(obj.category);
    setPostPut(true);
    setUpdatedKey(obj.key)
    // PostData(obj.key)
  }



  return (
    <div className='container '>
        <ul className='list-group '>
        {
           ListItem.map(([key,item])=><li key={key} className='list-group-item d-flex justify-content-around'>
            <div>${item.moneySpent}</div>
            <div>{item.description}</div>
            <div>{item.category}</div>
            <div>
              <button className='btn btn-primary' onClick={()=>updateHandler({key,...item})} >Updata</button>
              <button onClick={()=>deleteHandler(key)} className='btn btn-primary' >Delete</button>
            </div>
            </li>)
        }
        </ul>
    </div>
  )
}

export default ExpenseList