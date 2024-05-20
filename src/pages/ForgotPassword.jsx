import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ForgotPassword = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      console.log(values);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg"
        >
          <div className="w-full text-left mb-5">
            <p className="pb-5 border-b text-center">
              Enter the email address associated with your account and we will
              send you a link to reset your password.{" "}
            </p>
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
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-slate-500 px-5 py-2 rounded text-white w-56"
            >
              Submit
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

export default ForgotPassword;
