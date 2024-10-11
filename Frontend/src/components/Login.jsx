import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await axios
      .post("http://localhost:4001/user/login", userInfo)
      // console.log(res.data);

      .then((res) => {
        if (res.data) toast.success("Login Successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box  text-black  dark:bg-slate-300">
            <h3 className="text-lg font-bold mb-7">Login</h3>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border border-slate-400 rounded-lg p-2 mb-2"
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
                className="border border-slate-400 rounded-lg p-2"
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
              <div className="modal-action mt-0">
                <label
                  htmlFor="my_modal_6"
                  className="cursor-pointer rounded bg-slate-100 hover:bg-slate-400 transition duration-400 ease-in-out hover:text-white px-4 py-1"
                >
                  Close
                </label>
              </div>
            </div>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-700 font-semibold underline cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
