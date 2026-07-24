import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Social from "./SocialLogin/Social";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("in the login page", location);

  const handleLogin = (data) => {
    console.log("form login data", data);
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
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-700">email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "minLength" && (
            <p className="text-red-700">
              Your password must be 6 characters or longer
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to pran2Shift?{" "}
          <Link
            state={location.state}
            className="text-green-800 font-bold"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
      <Social></Social>
    </div>
  );
};

export default Login;
