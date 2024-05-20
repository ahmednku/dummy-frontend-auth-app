import { useFormik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CONSTANTS } from "../constants/constants";

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(25, "Password must be less than 25 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSignup = async (values) => {
    try {
      setSubmitting(true);
      console.log(values);
      localStorage.setItem(CONSTANTS.AUTH_TOKEN, CONSTANTS.AUTH_TOKEN_VALUE);
      navigate("/verify-otp");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg"
        >
          <div className="w-full text-left mb-5">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border w-full px-2 py-1"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="w-full text-left mb-5">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border w-full px-2 py-1"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full text-left mb-5 relative">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className="border w-full px-2 py-1"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
            {isPasswordVisible ? (
              <FaEye
                className="cursor-pointer absolute top-10 right-5"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="cursor-pointer absolute top-10 right-5"
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
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
            {isConfirmPasswordVisible ? (
              <FaEye
                className="cursor-pointer absolute top-10 right-5"
                onClick={handleConfirmPasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="cursor-pointer absolute top-10 right-5"
                onClick={handleConfirmPasswordVisibility}
              />
            )}
          </div>
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-slate-500 px-5 py-2 rounded text-white w-56"
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
