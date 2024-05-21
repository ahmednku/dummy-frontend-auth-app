import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

const VerifyOTP = () => {
  const inputRefs = useRef([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    },
    validationSchema: Yup.object({
      0: Yup.number().required(),
      1: Yup.number().required(),
      2: Yup.number().required(),
      3: Yup.number().required(),
      4: Yup.number().required(),
      5: Yup.number().required(),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      const otp = Object.values(values).join("");
      if (otp === "123456") {
        console.log("OTP is correct:", otp);
        setError("");
      } else {
        setError("The OTP entered is incorrect. Please try again.");
      }
      setSubmitting(false);
    },
  });

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1) {
      formik.setFieldValue(index, value);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && formik.values[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="grid place-items-center w-screen fixed top-0 left-0 h-screen otp-screen">
      <form
        className="w-[95%] max-w-[600px] bg-slate-100 mx-auto p-5 relative -top-20 rounded-lg"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full text-left mb-5">
          <p className="pb-5 border-b text-center">
            We have sent the verification code to your email address.
          </p>
        </div>
        <div className="w-full flex gap-2 items-center justify-center mb-5">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item}>
              <input
                type="number"
                name={item}
                className="border w-10 px-2 py-1 rounded text-center"
                onChange={(e) => handleChange(e, item)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                ref={(el) => (inputRefs.current[item] = el)}
                value={formik.values[item]}
              />
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
        <div className="flex items-center justify-between flex-col gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="bg-slate-500 px-5 py-2 rounded text-white w-72"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOTP;
