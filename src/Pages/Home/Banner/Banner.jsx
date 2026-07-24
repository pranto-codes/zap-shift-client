import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg1 from "../../../assets/banner/banner1.png";
import BannerImg2 from "../../../assets/banner/banner2.png";
import BannerImg3 from "../../../assets/banner/banner3.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={BannerImg1} alt="Banner 1" />
        <div>
          <p className="text-xs relative top-[-70px] ">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className="flex gap-3 relative top-[-60px] ml-15 px-3">
          <button className="btn rounded-2xl text-black">
            Track Your Package
          </button>
          <BsFillArrowUpRightCircleFill size={30} />
          <button className="btn  rounded-2xl">Be A Rider</button>
        </div>
      </div>
      <div>
        <img src={BannerImg2} alt="Banner 2" />
      </div>
      <div>
        <img src={BannerImg3} alt="Banner 3" />
      </div>
    </Carousel>
  );
};

export default Banner;
