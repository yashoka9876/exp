import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from '../store/AuthReduces';

const Headers = (props) => {
  const dispatch=useDispatch();
 const navigate= useNavigate();
 const isLogin=useSelector(state=>state.auth.isLogin);

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

  // function LogoutHandler(){
  //   localStorage.removeItem('idToken');
  //   localStorage.removeItem('isLogin');
  //   navigate('/')
  // }

  //here we are going to get state
  const Token=useSelector(state=>state.auth.Token);
  const isLoginn=useSelector(state=>state.auth.isLogin);
  console.log(Token)
  console.log(isLoginn);
  
  return (
    <div className='border border-2 w-100 rounded-2 '>
        <ul className='d-flex list-unstyled'>
            <li className='me-3 p-2 fw-bold'>Home</li>
            <li className='me-3 p-2 fw-bold'>Products</li>
            <li className='me-3 p-2 fw-bold'>About Us</li>
             <li className='me-3 p-2 fw-bold'><Link to="expense">Expenses</Link></li>
            {isLoginn && <li className='me-3 p-2 fw-bold'><button onClick={()=>VerifyEmail()} className={'float-end btn btn-dark '}>Verify Email</button></li>}
            {isLoginn && <li className='me-3 p-2 fw-bold'><button onClick={()=>dispatch(authActions.logout())} className={'float-end btn btn-dark '}>Logout</button></li>}

        </ul>
        {isLogin && <div className='d-flex flex-row justify-content-between border border-4 border-black rounded-2 p-2 align-items-end'> 
          {isLogin && <p>Welcome to the expense tracker</p>}
          {isLogin && <p>
            <span>your profiel is incomplete<span></span><Link to='profile'>complete now</Link></span>
          </p>}
        </div>}
    </div>
  )
}

export default Headers