import React from "react";
import trackingImg from "../../../assets/live-tracking.png";
import deliveryImg from "../../../assets/safe-delivery.png";

const Support = () => {
  return (
    <div className="my-20 ">
      <div className="flex bg-gray-200 rounded-2xl p-10 gap-9">
        <img src={trackingImg} alt="" />
        <div className="w-1 h-50 bg-gray-300"></div>

        <div>
          {" "}
          <h2 className="text-2xl font-semibold">Live Parcel Tracking</h2>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind
          </p>
        </div>
      </div>
      <div className="flex  bg-gray-200 rounded-2xl p-10 my-4 gap-9">
        <img src={deliveryImg} alt="" />
        <div className="w-1 h-50 bg-gray-300"></div>
        <div>
          {" "}
          <h2 className="text-2xl font-semibold">100% Safe Delivery</h2>
          <p>
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="flex  bg-gray-200 rounded-2xl p-10 my-4 gap-9 ">
        <img src={deliveryImg} alt="" />
        <div className="w-1 h-50 bg-gray-300"></div>
        <div>
          {" "}
          <h2 className="text-2xl font-semibold">24/7 Call Center Support</h2>
          <p>
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
