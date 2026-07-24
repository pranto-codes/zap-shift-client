import React from "react";

const Faq = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Frequently Asked Questions (FAQ)</h2>
        <p className="my-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment,
          <br />
          reduce pain, and strengthen your body with ease!
        </p>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, <br />
          and spine, encouraging you to maintain proper posture throughout the
          day. Here’s how it typically <br />
          functions: A posture corrector works by providing support and gentle
          alignment to your shoulders.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is it suitable for all ages and body type?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <button className=" items-center justify-center btn btn-primary text-black rounded-2xl my-5">
        See More FAQ`s
      </button>
    </div>
  );
};

export default Faq;
