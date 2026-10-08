import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Social from "./SocialLogin/Social";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import authImg from "../../assets/authImage.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { regUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  const handleReg = async (data) => {
    console.log("🔥 1. HANDLE REG IS RUNNING");
    console.log("🔥 FORM DATA:", data);

    try {
      // Get selected image
      const profileImg = data.photo[0];

      console.log("🔥 2. Profile image selected:", profileImg);

      // Create Firebase user
      console.log("🔥 3. Calling Firebase registration...");

      const result = await regUser(data.email, data.password);

      console.log("🔥 4. Firebase user created:", result);

      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", profileImg);

      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;

      console.log("🔥 5. Uploading image to ImgBB...");

      const imageResult = await axios.post(imageApiUrl, formData);

      const photoURL = imageResult.data.data.url;

      console.log("🔥 6. Image uploaded successfully:", photoURL);

      // Create user information
      const userInfo = {
        email: data.email,
        displayName: data.name,
        photoURL: photoURL,
      };

      console.log("🔥 7. Sending user to server:", userInfo);

      // Save user to MongoDB
      const userResponse = await axiosSecure.post("/users", userInfo);

      console.log("🔥 8. Server response:", userResponse.data);

      if (userResponse.data.insertedId) {
        console.log("🔥 9. New user has been created in the database");
      } else {
        console.log("⚠️ User was sent to server, but insertedId was not found");
      }

      // Update Firebase profile
      const userProfile = {
        displayName: data.name,
        photoURL: photoURL,
      };

      console.log("🔥 10. Updating Firebase user profile...");

      await updateUserProfile(userProfile);

      console.log("🔥 11. User profile successfully updated");

      // Navigate after registration is complete
      console.log("🔥 12. Navigating to home page...");

      navigate(location?.state || "/");
    } catch (error) {
      console.error("❌ REGISTRATION ERROR:", error);

      if (error.response) {
        console.error("❌ Server response:", error.response.data);
        console.error("❌ Status:", error.response.status);
      } else {
        console.error("❌ Error message:", error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="card bg-base-100 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl overflow-hidden">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1">
          <form
            className="card-body"
            onSubmit={handleSubmit(
              (data) => {
                console.log("🔥🔥 FORM SUBMITTED");
                console.log("🔥🔥 FORM DATA:", data);

                handleReg(data);
              },
              (errors) => {
                console.log("❌❌ FORM VALIDATION FAILED");
                console.log("❌❌ VALIDATION ERRORS:", errors);
              },
            )}
          >
            <fieldset className="fieldset">
              <h2 className="text-3xl font-bold mb-2">Create an Account</h2>

              <p className="text-gray-500 mb-4">
                Register to get started with pran2Shift
              </p>

              {/* Name */}
              <label className="label">Name</label>

              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className="input w-full"
                placeholder="Your name"
              />

              {errors.name?.type === "required" && (
                <p className="text-red-600">Valid name is required</p>
              )}

              {/* Photo */}
              <label className="label mt-2">Upload your image</label>

              <input
                type="file"
                {...register("photo", {
                  required: true,
                })}
                className="file-input w-full"
              />

              {errors.photo?.type === "required" && (
                <p className="text-red-600">Photo is required</p>
              )}

              {/* Email */}
              <label className="label mt-2">Email</label>

              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input w-full"
                placeholder="Email"
              />

              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}

              {/* Password */}
              <label className="label mt-2">Password</label>

              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                })}
                className="input w-full"
                placeholder="Password"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 8 characters
                </p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must contain uppercase, lowercase, number and special
                  character
                </p>
              )}

              {/* Register Button */}
              <button
                type="submit"
                className="btn btn-neutral mt-4"
                onClick={() => console.log("🔥🔥 REGISTER BUTTON CLICKED")}
              >
                Register
              </button>
            </fieldset>

            {/* Login Link */}
            <p className="mt-3">
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

          {/* Social Login */}
          <div className="px-8 pb-8">
            <Social />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
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

export default Register;
