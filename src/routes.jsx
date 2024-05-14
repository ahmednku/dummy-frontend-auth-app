import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Women from "./pages/Women";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
