import { useFormik } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLoginMutation } from "../services/api";
import { setField, setUser } from "../store/slices/userSlice";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Email is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .max(25, "Password must be less than 25 characters.")
      .required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      setSubmitting(true);
      const response = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      console.log(response);
      if (response.status === 200) {
        dispatch(setUser(response.user));
        dispatch(setField({ field: "token", value: response.token }));
      }
      navigate("/");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg"
        >
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
            <p className="text-right mt-2">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot password?
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="submit"
              className="bg-slate-500 px-5 py-2 rounded text-white w-56"
              disabled={submitting}
            >
              Login
            </button>
            <span>
              Dont have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
