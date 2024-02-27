import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./components/Profile";
import Expense from "./components/Expense/Expense";
import { CheckAuthLoader } from "./Util/auth";
import Root from "./components/Root";
import Auth from "./page/Auth";


function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Root/>,
    children:[
      {index:true,element:<Home/>},
      {path:'auth',element:<Auth/>},
      {path:'profile',element:<Profile/>},
      {path:'expense',element:<Expense/> ,
        loader:CheckAuthLoader
      }
    ]
    },
  ])
  // isLogin,mode,SignUp,ModeHandler}
 
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

