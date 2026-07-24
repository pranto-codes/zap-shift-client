import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Social from "./SocialLogin/Social";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { regUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  console.log("from reg ", location);

  const handleReg = (data) => {
    console.log("after reg", data.photo[0]);

    const profileImg = data.photo[0];

    regUser(data.email, data.password).then((result) => {
      console.log(result.user);
      //store the image and get the photo url
      const formData = new FormData();
      formData.append("image", profileImg);
      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
      axios
        .post(imageApiUrl, formData)
        .then((res) => {
          console.log("after image upload", res.data.data.url);

          //update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile successfully updated");
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        })

        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0">
      <form onSubmit={handleSubmit(handleReg)}>
        <fieldset className="fieldset">
          {/**name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600">Valid name is required</p>
          )}

          {/**photo field */}
          <label className="label">Upload your image</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Image"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600">Photo is required</p>
          )}
          {/**email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">email is required</p>
          )}

          {/**password field */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">password must be 8 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              password must be uppercase ,lowercase number etc
            </p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an Account?{" "}
          <Link
            state={location.state}
            className="text-green-700 font-bold"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
      <Social></Social>
    </div>
  );
};

export default Register;
