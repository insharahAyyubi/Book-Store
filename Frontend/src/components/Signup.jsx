import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();

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
                  onClick={() => {
                    navigate("/", { replace: true });
                    setTimeout(() => {
                      document.getElementById("my_modal_6").checked = true;
                    }, 300); // open the modal after navigation
                  }}
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
