import React from 'react'

const ExpenseList = ({ListItem}) => {
  return (
    <div className='container'>
        <ul>
        {
           ListItem.map((item)=><li>{item.moneySpent}</li>)
        }
        </ul>
    </div>
  )
}

export default ExpenseList