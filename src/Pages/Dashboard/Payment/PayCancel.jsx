import React from "react";
import { Link } from "react-router";

const PayCancel = () => {
  return (
    <div>
      <h2 className="font-bold text-red-600 text-3xl">
        Your payment has been cancelled,Please
      </h2>

      <Link to="/dashboard/myParcels" className="text-black btn btn-primary">
        Try again
      </Link>
    </div>
  );
};

export default PayCancel;
