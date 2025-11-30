

// cần đăng nhập
import LayoutDefault from "../components/LayoutDefault";
import Profile from "../pages/Profile";
export const PrivateRoutes = [
  {
    path: "/",
    element: <LayoutDefault />, // Đổi thành PrivateLayout nếu có
    children: [
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
]
