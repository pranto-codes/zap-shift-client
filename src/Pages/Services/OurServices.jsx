import React from "react";
import serviceImg from "../../assets/service.png";

const OurServices = () => {
  return (
    <div className="my-15 border-2 p-10 rounded-2xl bg-secondary">
      <div className="text-center justify-center">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="my-3 text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className=" gap-3 rounded-2xl p-5  ">
        {/**first section start */}
        <div className="flex gap-4 ">
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Express & Standard Delivery</h2>
              <p>
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka
                within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Nationwide Delivery </h2>
              <p>
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48–72
                hours.
              </p>
            </div>
          </div>
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Fulfillment Solution</h2>
              <p>
                Fulfillment Solution We also offer customized service with
                inventory management support, online order processing,
                packaging, and after sales support.
              </p>
            </div>
          </div>
        </div>

        {/**first section end */}

        {/**second section start */}
        <div className="flex gap-4 ">
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Cash on Home Delivery</h2>
              <p>
                10% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {" "}
                Corporate Service / Contract In Logistics{" "}
              </h2>
              <p>
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
          </div>
          <div className="p-2 card bg-blue-50 w-96 mt-3 shadow-sm hover:bg-primary">
            <figure>
              <img className="justify-center" src={serviceImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> Parcel Return</h2>
              <p>
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>

        {/**second section end */}
      </div>
    </div>
  );
};

export default OurServices;
