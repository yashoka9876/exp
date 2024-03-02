import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom'
import { authActions } from '../store/AuthReduces';

const Headers = ({toggleTheme}) => {
  const dispatch=useDispatch();
 const isLogin=useSelector(state=>state.auth.isLogin);
 const IsPremium=useSelector(state=>state.Expence.premium);
 const Token=useSelector(state=>state.auth.Token);
 const isLoginn=useSelector(state=>state.auth.isLogin);
 const ExpenseList=useSelector(state=>state.Expence.ExpenseItem);

  


console.log(IsPremium);
  async function VerifyEmail(){
   try{
    const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken:localStorage.getItem('idToken')
      })
    })
    if(!response.ok){
      throw new Error('Bro you got one error')
    }
    //here data is present brother of response 
    const data=await response.json();
    console.log(data);

  }catch(error){
    console.error('The error is'+error);
  }

  }

  const convertToCSV = () => {
    const ExpenceObj=ExpenseList.map(([key,value])=>{
      return value
    })
    console.log(ExpenceObj);

    const csvContent="data:text/csv;charset=utf-8," +
    ExpenceObj.map((item)=>Object.values(item).join(',')).join('\n');

    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'expenses.csv');
    document.body.appendChild(link);
    link.click();
  };


  console.log(Token)
  console.log(isLoginn);


  
  return (
    <div className='border border-2 w-100 rounded-2 '>
        <ul className='d-flex list-unstyled'>
            <li className='me-3 p-2 fw-bold'>Home</li>
            <li className='me-3 p-2 fw-bold'>Products</li>
            <li className='me-3 p-2 fw-bold'>About Us</li>
             <li className='me-3 p-2 fw-bold'><button className='float-end btn btn-dark '><Link to="expense">Expenses</Link></button></li>
            {isLoginn && <li className='me-3 p-2 fw-bold'><button onClick={()=>VerifyEmail()} className={'float-end btn btn-dark '}>Verify Email</button></li>}
            {isLoginn && <li className='me-3 p-2 fw-bold'><button onClick={()=>dispatch(authActions.logout())} className={'float-end btn btn-dark '}>Logout</button></li>}
            {!isLoginn && <li className='me-3 p-2 fw-bold'><button className='float-end btn btn-dark '><Link to='/auth'>Login</Link></button></li>}
            {IsPremium && <li className='me-3 p-2 fw-bold'><button onClick={()=>toggleTheme()}   className='float-end btn btn-dark '>Take Premium</button></li>}
            {IsPremium && <li className='me-3 p-2 fw-bold'><button onClick={convertToCSV}   className='float-end btn btn-dark '>Dounload File</button></li>}

        </ul>
        {isLogin && <div className='d-flex flex-row justify-content-between border border-4 border-black rounded-2 p-2 align-items-end'> 
          {isLogin && <p>Welcome to the expense tracker</p>}
          <p>Welcome to the expense tracker</p>
          {isLogin && <p>
            <span>your profiel is incomplete<span></span><Link to='profile'>complete now</Link></span>
          </p>}
        </div>}
    </div>
  )
}

export default Headers