import React from "react";
import bookingImg from "../../assets/bookingIcon.png";

const Functions = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold">How it Works</h2>
      {/** card section */}

      <div className="flex gap-3 rounded-2xl p-5 border-2">
        <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm">
          <figure>
            <img src={bookingImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Booking Pick & Drop</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-blue-50 w-96 mt-3 shadow-sm">
          <figure>
            <img src={bookingImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Delivery Hub</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-blue-50 w-96 mt-3 shadow-sm">
          <figure>
            <img src={bookingImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cash On Deliver</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-blue-50 w-96 mt-3 shadow-sm">
          <figure>
            <img src={bookingImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Booking SME & Corporate</h2>
            <p>
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
