import { AxiosHeaders } from "axios";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const riderData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      nid: form.nid.value,
      age: form.age.value,
      dateOfBirth: form.dateOfBirth.value,
      district: form.district.value,
      address: form.address.value,
      vehicleType: form.vehicleType.value,
      vehicleRegistration: form.vehicleRegistration.value,
      reason: form.reason.value,
    };

    console.log("Rider Application:", riderData);

    axiosSecure.post("/riders", riderData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "Success",
          title: "Rider application submitted successfully, We`ll contact soon",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold my-5">Become a Rider</h2>

        <p className="text-gray-500 mb-8">
          Join our rider team and start earning with zapShift.
        </p>
      </div>

      <div className="divider"></div>

      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold my-5">
          Enter your rider details
        </h2>

        {/* Rider Information */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <fieldset className="fieldset flex-1">
              <label className="label">Full Name</label>

              <input
                type="text"
                name="fullName"
                className="input w-full"
                placeholder="Your Full Name"
              />
            </fieldset>

            <fieldset className="fieldset flex-1">
              <label className="label">Email</label>

              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Your Email"
              />
            </fieldset>
          </div>

          <div className="flex gap-5">
            <fieldset className="fieldset flex-1">
              <label className="label">Phone Number</label>

              <input
                type="tel"
                name="phone"
                className="input w-full"
                placeholder="Your Phone Number"
              />
            </fieldset>

            <fieldset className="fieldset flex-1">
              <label className="label">NID Number</label>

              <input
                type="text"
                name="nid"
                className="input w-full"
                placeholder="Your NID Number"
              />
            </fieldset>
          </div>

          <div className="flex gap-5">
            <fieldset className="fieldset flex-1">
              <label className="label">Age</label>

              <input
                type="number"
                name="age"
                className="input w-full"
                placeholder="Your Age"
              />
            </fieldset>

            <fieldset className="fieldset flex-1">
              <label className="label">Date of Birth</label>

              <input type="date" name="dateOfBirth" className="input w-full" />
            </fieldset>
          </div>
        </div>

        <div className="divider my-8"></div>

        {/* Address */}
        <h2 className="text-2xl font-semibold my-5">Address Details</h2>

        <div className="flex gap-5">
          <div className="flex-1">
            <fieldset className="fieldset font-medium">
              <label className="label">Select your district</label>

              <select name="district" defaultValue="" className="select w-full">
                <option value="" disabled>
                  Select District
                </option>

                <option value="Bagerhat">Bagerhat</option>
                <option value="Bandarban">Bandarban</option>
                <option value="Barguna">Barguna</option>
                <option value="Barisal">Barisal</option>
                <option value="Bhola">Bhola</option>
                <option value="Bogra">Bogra</option>
                <option value="Brahmanbaria">Brahmanbaria</option>
                <option value="Chandpur">Chandpur</option>
                <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Feni">Feni</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
              </select>
            </fieldset>
          </div>

          <div className="flex-1">
            <fieldset className="fieldset">
              <label className="label">Full Address</label>

              <textarea
                name="address"
                className="textarea w-full h-32"
                placeholder="Enter your full address"
              ></textarea>
            </fieldset>
          </div>
        </div>

        <div className="divider my-8"></div>

        {/* Vehicle */}
        <h2 className="text-2xl font-semibold my-5">Vehicle Information</h2>

        <div className="flex gap-5">
          <fieldset className="fieldset flex-1">
            <label className="label">Vehicle Type</label>

            <select
              name="vehicleType"
              defaultValue=""
              className="select w-full"
            >
              <option value="" disabled>
                Select Vehicle
              </option>

              <option value="bicycle">Bicycle</option>
              <option value="motorbike">Motorbike</option>
              <option value="scooter">Scooter</option>
            </select>
          </fieldset>

          <fieldset className="fieldset flex-1">
            <label className="label">Vehicle Registration Number</label>

            <input
              type="text"
              name="vehicleRegistration"
              className="input w-full"
              placeholder="Vehicle Registration Number"
            />
          </fieldset>
        </div>

        {/* Reason */}
        <fieldset className="fieldset my-5">
          <label className="label">Why do you want to become a rider?</label>

          <textarea
            name="reason"
            className="textarea w-full h-32"
            placeholder="Tell us briefly..."
          ></textarea>
        </fieldset>

        {/* Submit */}
        <div className="my-9">
          <button
            type="submit"
            className="btn btn-primary text-black rounded-2xl px-8"
          >
            Submit Rider Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rider;
