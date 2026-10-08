import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaySuccess = () => {
  const [searchParams] = useSearchParams();

  const [paymentInfo, setPaymentInfo] = useState({});

  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);

          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
      // .catch((error) => {
      //   console.log("Payment success error:", error);
      // });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl font-bold">Your payment has been successful</h2>
      <p className="text-2xl font-semibold text-green-800">
        Your transaction id :
        <span className="text-emerald-950 badge badge-warning">
          {" "}
          {paymentInfo.transactionId}
        </span>
      </p>
      <p className="text-2xl font-semibold text-green-800">
        Your parcel tracking id :
        <span className="text-emerald-950 badge badge-warning">
          {" "}
          {paymentInfo.trackingId}
        </span>
      </p>
      <h2>Back to</h2>
      <button className="btn btn-primary text-black">Home</button>
      <button className=" btn btn-primary text-black">My Parcels</button>
    </div>
  );
};

export default PaySuccess;
