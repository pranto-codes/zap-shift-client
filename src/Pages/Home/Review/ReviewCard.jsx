import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { review: testimonial, userName, user_photoURL } = review;

  return (
    <div className="card bg-base-100 shadow-lg rounded-3xl p-7">
      <div className="text-5xl text-gray-300">
        <FaQuoteLeft />
      </div>

      <p className="mt-4 text-gray-500 leading-7">{testimonial}</p>

      <div className="border-t border-dashed border-gray-300 my-6"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full">
          <img src={user_photoURL} alt="" srcset="" />
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-800">{userName}</h3>

          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
