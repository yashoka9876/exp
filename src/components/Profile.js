import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    const profileName=useRef();
    const photoUrl=useRef();

    useEffect(()=>{
        async function getProfileData(){
            try{const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    idToken:localStorage.getItem('idToken')
                })
            
            })
            if(!response.ok){
                throw new Error('!!!!!!!!!!!!!!!!')
            }
            const data=await response.json();
            profileName.current.value=data.users[0].displayName;
            photoUrl.current.value=data.users[0].photoUrl;
        }catch(error){
                console.error('we got failed to get data'+ error)
            }
        }

        getProfileData();
    },[])


     function FormHandler(event){
        event.preventDefault();
        console.log(profileName.current.value);
        console.log(photoUrl.current.value);
        console.log(localStorage.getItem('idToken'));
        async function UPF(){
            try{const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify({
                    idToken:localStorage.getItem('idToken'),
                    displayName:profileName.current.value,
                    photoUrl:photoUrl.current.value,
                    returnSecureToken:false
                })

            })
            if(!response.ok){
                throw new Error('profile not updated brother');
            }
            const data=await response.json();
            console.log(data);
        }catch(error){
            console.error('we got some error brother'+error)
        }

        };
        UPF();
       
    }









  return (
   <>
         <div className='d-flex justify-content-between border-bottom my-1 align-items-center'>
            <p className='fw-medium '>Winner Never quite,Quiters never wins.</p>
            <p style={{width:'30%'}} className='text-uppercase fw-medium'>your profile is 64% complete. A complete Profile has higher changes of landing a job <Link to='/profile'>Complete Now</Link></p>
        </div>
        <form onSubmit={FormHandler} className='border border-1 w-75 rounded-2 float-end fw-medium p-2' style={{backgroundColor:'#cac2c1'}}>
            <div className='d-flex justify-content-between '>
                <p>Contact Details</p>
                <p><button className='btn btn-info'><Link to='/'>cancel</Link></button></p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>
                    <span></span>
                    <span>full Name</span>
                    <input ref={profileName} type='text' className='rounded-2 m-1 '></input>
                    
                </p>
                <p>
                <span></span>
                    <span>profile photo url</span>
                    <input ref={photoUrl} type='url' className='rounded-2 m-1' ></input>
                </p>
            </div>
            <div>
                <button className='btn btn-info' type='submit' >Update</button>
            </div>
        </form>
   </>
  )
}

export default Profile