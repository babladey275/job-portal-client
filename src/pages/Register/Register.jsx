import Lottie from "lottie-react";
import React from "react";
import registerLottieData from "../../assets/lottie/register.json";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:bg-base-200 flex flex-col md:flex-row-reverse md:gap-6 items-center justify-center min-h-screen">
      <div className="md:w-96 w-48">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>

        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500 mt-4">
          Already Have An Account?{" "}
          <Link to={"/signin"} className="hover:underline hover:text-blue-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
