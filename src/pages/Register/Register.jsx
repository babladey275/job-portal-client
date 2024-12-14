import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/lottie/register.json";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });

    setError({});

    //password validation
    let errorMessage = null;

    if (!/[A-Z]/.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(password)) {
      errorMessage = "Password must contain at least one number.";
    } else if (password.length < 6) {
      errorMessage = "Password must be at least 6 characters long.";
    }

    if (errorMessage) {
      setError({ ...error, password: errorMessage });
    }

    //authentication
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:bg-base-200 flex flex-col md:flex-row-reverse md:gap-6 items-center justify-center min-h-screen">
      <div className="md:w-96 w-48">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full my-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister}>
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
          {error?.password && (
            <label className="label text-sm text-red-600">
              {error.password}
            </label>
          )}
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
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
