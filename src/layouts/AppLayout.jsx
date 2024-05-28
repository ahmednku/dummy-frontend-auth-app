import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AUTH_ROUTES } from "../constants/constants";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.user);
  const isAuthRoute = AUTH_ROUTES.includes(location.pathname);

  useEffect(() => {
    const isAuthRoute = AUTH_ROUTES.includes(location.pathname);

    if (token && isAuthRoute) {
      navigate("/");
    } else if (!token && !isAuthRoute) {
      navigate("/login");
    }
  }, [navigate, location, token]);

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Outlet />
    </>
  );
};

export default AppLayout;
