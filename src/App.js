import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./components/Profile";
import Expense from "./components/Expense/Expense";
import { CheckAuthLoader } from "./Util/auth";


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'profile',element:<Profile/>},
    {path:'expense',element:<Expense/> ,
      loader:CheckAuthLoader
    }
  ])
  // isLogin,mode,SignUp,ModeHandler}
 
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

