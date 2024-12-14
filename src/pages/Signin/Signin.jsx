import React, { useContext, useState } from "react";
import signInLottieData from "../../assets/lottie/signIn.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    setError({});

    signInUser(email, password)
      .then((result) => {
        const user = result?.user;
        if (user) {
          navigate("/");
        }
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="md:bg-base-200 flex flex-col md:flex-row-reverse md:gap-24 items-center justify-center min-h-screen">
      <div className="md:w-96 w-48">
        <Lottie animationData={signInLottieData}></Lottie>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full my-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign in your account
        </h2>

        <form onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
          </div>
          <div className="form-control mt-4">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500 mt-4">
          Don’t Have An Account?{" "}
          <Link
            to={"/register"}
            className="hover:underline hover:text-blue-600"
          >
            Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signin;
