import React, { useState } from 'react'
import Authentication from '../auth/Auth'
import Headers from '../components/Header';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthReduces';

const Home = () => {
    const [token,setToken]=useState('');
    const [isLogin,setIsLogin]=useState(false);
    const [mode,setMode]=useState('SignUp');

    //here we wer using redux concenpt brother.

    const dispatch=useDispatch();
    
    
   function ModeHandler(){
    if(mode==='SignUp'){
        setMode('login');
    }else{
        setMode('SignUp');
    }
   }
    
    async function SignUp(AuthObj){
        // event.preventDefault();
       console.log(AuthObj);
        let url;
        if(mode === 'login'){
            console.log('login hai')
             url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU'
        }else{
            

            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU'
        }
        try{
        const response=await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify(AuthObj)
        })
        if(!response.ok){
            throw new Error('Not created passowor')
        }
            const data=await response.json();
            console.log(data.idToken);
            setToken(data.idToken);
            setIsLogin(true);
            localStorage.setItem('idToken',data.idToken);
            localStorage.setItem('isLogin',isLogin);
            dispatch(authActions.login(data.idToken));
            
        }catch(error){
            console.error('Error updating cart item:', error);
        }

        
        
    }
  return <>
   <Headers isLogin={isLogin}/>
      <main>
        <Authentication isLogin={isLogin} mode={mode} SignUp={SignUp} ModeHandler={ModeHandler}/>
      </main>
  </>
}

export default Home