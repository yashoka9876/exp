import React, { useRef} from 'react'

const Authentication = ({isLogin,mode,SignUp,ModeHandler}) => {
    const Email=useRef();
    const Password=useRef();
    const ConfirmPassword=useRef();
    
   

    function submitHandler(event){
        event.preventDefault();
        const AuthObj={
            email:Email.current.value,
            password:Password.current.value,
            returnSecureToken:true
        }
        
        if(mode===SignUp){
            console.log('hia');
                if(Password.current.value !== ConfirmPassword.current.value){
                    window.confirm('password an confirm password are not same');
                    return;
                }
            }
            console.log(AuthObj)
            SignUp(AuthObj)
            Email.current.value='';
            Password.current.value='';
            
        }
    









  return (
    <div className='d-flex flex-column  justify-content-center border border-2 border-black align-items-center'>
       {isLogin && <div>welcome to the the expense tracker</div>}
        <h1 className='mb-4'>{mode==='login'?'Login':'SignUp'}</h1>
        <form onSubmit={submitHandler} className="row g-3 border border-black border-4  w-25 rounded-3" >
            
            <div className='form-group'>
                <label htmlFor="staticEmail2"  >Email</label>
                <input ref={Email} type="text" className='form-control' id="staticEmail2" required/>
            </div>
            <div >
                <label htmlFor="inputPassword2" >Password</label>
                <input ref={Password} type="password" className="form-control" id="inputPassword2" required />
            </div>
           {mode==='SignUp' && <div >
                <label htmlFor="confirmPassword" >ConfirmPassword</label>
                <input ref={ConfirmPassword} type="password" className="form-control" id="confirmPassword" required />
            </div>}
            <div className='d-flex justify-content-center '>
                <button  type="submit" className="btn btn-primary mb-3 hover active">{mode==='login'?'Login':'SignUp'}</button>
                <button onClick={ModeHandler} type='button' className='btn btn-primary mb-3 hover active mx-1'>change mode </button>
            </div>
        </form>
    </div>
  )
}

export default Authentication