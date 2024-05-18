import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const hideNavbar = (path) => {
  switch (path) {
    case "/login":
      return true;
    case "/signup":
      return true;
    case "/forgot-password":
      return true;
    case "/verify-otp":
      return true;
    default:
      return false;
  }
};

const AppLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const location = useLocation();
  const isNavbarHidden = hideNavbar(location.pathname);

  useEffect(() => {
    if (!token) {
      navigate("/verify-otp");
    }
  }, [navigate, token]);

  useEffect(() => {
    if (
      token &&
      (location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/verify-otp")
    ) {
      navigate("/");
    }
  }, [location.pathname, navigate, token]);

  return (
    <>
      {!isNavbarHidden && <Navbar />}
      <Outlet />
    </>
  );
};

export default AppLayout;
