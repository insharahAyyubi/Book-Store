import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

// react hook form library for form usage
// react router dom for navigation
// useForm: A custom hook provided by the react-hook-form library
// that helps manage form state and validation in React applications.
// handleSubmit is a function provided by the useForm hook from the react-hook-form library.
// It wraps your custom onSubmit function and handles the validation of the form before calling it.

// The register function from the library is called with the name of the input field as an argument.
// This name will be used as the key in the form data object.
// You can also set validations here

const Signup = () => {
  const navigate = useNavigate();

  const navg = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      document.getElementById("my_modal_6").checked = true;
    }, 300);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      // console.log(res.data);

      if (res.data.message === "User already exists") {
        toast.success("User already exists. Please use a different email.");
      } else if (res.data.message === "User created successfully") {
        toast.success("Signup Successful");
        navg();
      }
    } catch (err) {
      console.log(err);
      toast.error("Error: " + err.response.data.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="bg-signup bg-cover h-screen">
        <div className="backdrop-blur-[6px] bg-[#0912225f] h-screen w-screen  flex  items-center justify-center">
          <div className=" text-black border filter-none bg-white shadow-lg dark:bg-slate-300 p-6 m-7 w-96 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-lg font-bold mb-7">Signup</h3>
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  className="border border-slate-400 rounded-lg p-2 mb-1"
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 mb-4">
                    This field is required
                  </span>
                )}
                <label>Email</label>
                <input
                  className="border border-slate-400 rounded-lg p-2 mb-1"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 mb-4">
                    This field is required
                  </span>
                )}

                <label>Password</label>
                <input
                  className="border border-slate-400 rounded-lg p-2 mb-1"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="flex items-center justify-between mt-6 mb-2">
                <div className="flex flex-col">
                  <button className="rounded bg-slate-700 hover:bg-slate-500 transition duration-400 ease-in-out text-white px-4 py-1">
                    Submit
                  </button>
                </div>
                <div>
                  <Link
                    to="/"
                    className="cursor-pointer rounded bg-slate-200 hover:bg-slate-400 transition duration-400 ease-in-out hover:text-white px-5 py-1"
                  >
                    Close
                  </Link>
                </div>
              </div>
              <p>
                Have an account?{" "}
                <label
                  className="text-blue-700 font-semibold underline cursor-pointer"
                  htmlFor="my_modal_6"
                  onClick={navg}
                >
                  Login
                </label>
              </p>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
