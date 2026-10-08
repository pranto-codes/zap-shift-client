import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Social from "./SocialLogin/Social";
import authImg from "../../assets/authImage.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signUser, resetPassword } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const email = watch("email");

  const handleForgetPassword = () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleLogin = (data) => {
    signUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="card bg-base-100 w-full max-w-4xl flex flex-col md:flex-row shadow-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex-1">
          <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>

              <p className="mb-4 text-gray-500">
                Login to your pran2Shift account
              </p>

              {/* Email */}
              <label className="label">Email</label>

              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />

              {errors.email?.type === "required" && (
                <p className="text-red-700">Email is required.</p>
              )}

              {/* Password */}
              <label className="label mt-3">Password</label>

              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />

              {errors.password?.type === "required" && (
                <p className="text-red-700">Password is required.</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-700">
                  Password must be at least 6 characters.
                </p>
              )}

              {/* Forgot Password */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button className="btn btn-neutral mt-4">Login</button>

              {/* Register */}
              <p className="mt-3">
                New to pran2Shift?{" "}
                <Link
                  to="/register"
                  state={location.state}
                  className="text-green-700 font-bold"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>

          {/* Social Login */}
          <div className="px-8 pb-8">
            <Social />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 hidden md:block">
          <img
            src={authImg}
            alt="Authentication"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
