import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LayoutDefault from "../components/LayoutDefault";
// các routes không cần đăng nhập
export const PublicRoutes = [
  {
    path : "/",
    element: <LayoutDefault />,
    children : [
      {
        index: true,
        element : <Home />
      },
      {
        path : "login",
        element : <Login />
      },
      {
        path : "signup",
        element : <SignUp />
      },
      
      // những routes khác 
    ]
  }
]
