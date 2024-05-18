import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  const handleSignup = () => {
    console.log(form);
    localStorage.setItem("token", "fake-auth-token");
    navigate("/");
  };

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg">
          <div className="w-full text-left mb-5">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border w-full px-2 py-1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-full text-left mb-5">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border w-full px-2 py-1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="w-full text-left mb-5 relative">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className="border w-full px-2 py-1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {isPasswordVisible ? (
              <FaEyeSlash
                className="cursor-pointer absolute bottom-2 right-5"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <FaEye
                className="cursor-pointer absolute bottom-2 right-5"
                onClick={handlePasswordVisibility}
              />
            )}
          </div>
          <div className="w-full text-left mb-5 relative">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password
            </label>
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              className="border w-full px-2 py-1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {isConfirmPasswordVisible ? (
              <FaEyeSlash
                className="cursor-pointer absolute bottom-2 right-5"
                onClick={handleConfirmPasswordVisibility}
              />
            ) : (
              <FaEye
                className="cursor-pointer absolute bottom-2 right-5"
                onClick={handleConfirmPasswordVisibility}
              />
            )}
          </div>
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="button"
              className="bg-slate-500 px-5 py-2 rounded text-white w-56"
              onClick={handleSignup}
            >
              Signup
            </button>
            <span>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
