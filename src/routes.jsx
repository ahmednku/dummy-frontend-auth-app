import AppLayout from "./layouts/AppLayout";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Women from "./pages/Women";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/",
        element: <Home />,
        title: "Home",
      },
      {
        path: "/men",
        element: <Men />,
        title: "Men",
      },
      {
        path: "/women",
        element: <Women />,
        title: "Women",
      },
      {
        path: "/kids",
        element: <Kids />,
        title: "Kids",
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
