import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [form, setForm] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg">
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
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="button"
              className="bg-slate-500 px-5 py-2 rounded text-white w-56"
              onClick={handleSubmit}
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
