import { useState } from "react";

const VerifyOTP = () => {
  const [form, setForm] = useState({ one: "", two: "", three: "", four: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    console.log(form);
  };

  return (
    <>
      <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen">
        <form className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg">
          <div className="w-full text-left mb-5">
            <p className="pb-5 border-b text-center">
              We have sent the verification code to your email address.
            </p>
          </div>
          <div className="w-full flex gap-2 items-center justify-center mb-5">
            <input
              type="number"
              name="one"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="number"
              name="two"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="number"
              name="three"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="number"
              name="four"
              inputMode="numeric"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="number"
              name="five"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="number"
              name="six"
              className="border w-10 px-2 py-1 rounded"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-3">
            <button
              type="button"
              className="bg-slate-500 px-5 py-2 rounded text-white w-72"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VerifyOTP;
