import React from 'react'
import { Link } from 'react-router-dom'

const Headers = ({isLogin}) => {

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
  return (
    <div className='border border-2 w-100 rounded-2 '>
        <ul className='d-flex list-unstyled'>
            <li className='me-3 p-2 fw-bold'>Home</li>
            <li className='me-3 p-2 fw-bold'>Products</li>
            <li className='me-3 p-2 fw-bold'>About Us</li>
            {localStorage.getItem('isLogin')&&<li><button onClick={()=>VerifyEmail()} className={'float-end btn btn-dark '}>Verify Email</button></li>}
        </ul>
        <div className='d-flex flex-row justify-content-between border border-4 border-black rounded-2 p-2 align-items-end'> 
          <p>Welcome to the expense tracker</p>
          {isLogin &&<p>
            <span>your profiel is incomplete<span></span><Link to='profile'>complete now</Link></span>
          </p>}
        </div>
    </div>
  )
}

export default Headers