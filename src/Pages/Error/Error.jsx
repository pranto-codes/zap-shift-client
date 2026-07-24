import React from "react";
import errorImg from "../../assets/errorpng.png";

const Error = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="min-h-screen flex items-center justify-center ">
        <img src={errorImg} alt="" />
        <button className="btn btn-primary text-black">Go to Home</button>
      </div>
    </div>
  );
};

export default Error;
