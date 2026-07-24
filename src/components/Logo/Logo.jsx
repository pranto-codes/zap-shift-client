import React from "react";

import logo from "../Logo/../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end  ">
      <img src={logo} alt="Logo" />
      <h2 className="text-3xl font-bold -ml-2.5">pran2Shift</h2>
    </div>
  );
};

export default Logo;
