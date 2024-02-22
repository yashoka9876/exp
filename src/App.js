import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./components/Profile";


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'profile',element:<Profile/>}
  ])
  // isLogin,mode,SignUp,ModeHandler}
 
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

