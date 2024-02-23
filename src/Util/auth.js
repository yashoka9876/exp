import { redirect } from "react-router-dom";

export function CheckAuthLoader(){
    const token=localStorage.getItem('isLogin');
    if(!token){
       return redirect('/')
    }else{

        return null
    }
}