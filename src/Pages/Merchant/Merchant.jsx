import React from "react";
import boxImg from "../../assets/location-merchant.png";
import bg from "../../assets/be-a-merchant-bg.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Merchant = () => {
  return (
    <section className="my-24">
      <div
        className="hero rounded-3xl overflow-hidden bg-secondary bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row justify-between w-full px-8 lg:px-16 py-16 lg:py-20">
          {/* Left Content */}
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift Courier delivers your
              parcels to every corner of Bangladesh quickly, safely, and on
              time.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <button className="btn btn-primary rounded-xl text-black">
                Become a Merchant
              </button>

              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary rounded-xl">
                Earn with ZapShift Courier
                <BsArrowUpRightCircleFill size={20} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-10 lg:mt-0">
            <img
              src={boxImg}
              alt="Merchant"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
