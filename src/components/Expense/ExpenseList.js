import React from 'react'

const ExpenseList = ({ListItem}) => {
  return (
    <div className='container '>
        <ul className='list-group '>
        {
           ListItem.map((item,index)=><li key={index} className='list-group-item d-flex justify-content-around'>
            <div>${item.moneySpent}</div>
            <div>{item.description}</div>
            <div>{item.category}</div>
            </li>)
        }
        </ul>
    </div>
  )
}

export default ExpenseList