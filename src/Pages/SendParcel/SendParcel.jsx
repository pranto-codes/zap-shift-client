import React from "react";

const SendParcel = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold my-5">Send Your Parcel</h2>
      </div>

      <h2 className="text-3xl font-semibold my-5">Enter your parcel details</h2>
      <div className="my-5 text-xl font-semibold">
        <div className="flex space-between gap-5">
          <input type="radio" name="radio-1" className="radio" defaultChecked />
          <label className="label text-xl font-semibold">Document</label>
          <input type="radio" name="radio-1" className="radio" />
          <label className="label text-xl font-semibold">Non-Document</label>
        </div>

        <div className="flex space-between gap-5">
          <fieldset className="fieldset ">
            <label className="label">Parcel Name</label>
            <input type="email" className="input" placeholder="Parcel Name" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input type="email" className="input" placeholder="Parcel Weight" />
          </fieldset>
        </div>
      </div>
      <div className="divider"></div>
      {/** parcel side*/}

      <div className="flex gap-10">
        {/**left side start */}
        <div>
          <h2 className="text-2xl font-semibold">Sender Details</h2>
          <div className="  space-between gap-5 my-3">
            <div className="flex  space-between gap-5">
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Name</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Sender Name"
                />
              </fieldset>
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Pickup Wire house</label>
              </fieldset>
            </div>
            <div className="flex  space-between gap-5">
              <fieldset className="fieldset font-medium">
                <label className="label">Address</label>
                <input type="email" className="input" placeholder="Address" />
              </fieldset>
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Phone Number</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Sender Phone Number"
                />
              </fieldset>
            </div>
          </div>
          <div>
            {/**select district section */}

            <fieldset className="my-1 font-medium">
              <label className="label">Select your district</label>
              <select defaultValue="Server location" className="select ">
                <option value="">Select District</option>

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
                <option value="Chuadanga">Chuadanga</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jashore">Jashore</option>
                <option value="Jhalokathi">Jhalokathi</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Joypurhat">Joypurhat</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Khulna">Khulna</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kurigram">Kurigram</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Moulvibazar">Moulvibazar</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Netrokona">Netrokona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Shariatpur">Shariatpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Sirajganj">Sirajganj</option>
                <option value="Sunamganj">Sunamganj</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
                <option value="Thakurgaon">Thakurgaon</option>
              </select>
            </fieldset>

            <fieldset className="fieldset my-1 font-medium ">
              <legend className="">Pickup Instruction</legend>
              <textarea
                className="textarea h-24"
                placeholder="Pickup Instruction"
              ></textarea>
            </fieldset>
          </div>
        </div>
        {/**left side end */}
        {/**right side start */}
        <div>
          <h2 className="text-2xl font-semibold">Receiver Details</h2>
          <div className="  space-between gap-5 my-3">
            <div className="flex  space-between gap-5">
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Name</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Sender Name"
                />
              </fieldset>
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Pickup Wire house</label>
              </fieldset>
            </div>
            <div className="flex  space-between gap-5">
              <fieldset className="fieldset font-medium">
                <label className="label">Address</label>
                <input type="email" className="input" placeholder="Address" />
              </fieldset>
              <fieldset className="fieldset font-medium">
                <label className="label">Sender Phone Number</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Sender Phone Number"
                />
              </fieldset>
            </div>
          </div>
          <div>
            {/**select district section */}

            <fieldset className="my-1 font-medium">
              <label className="label">Select your district</label>
              <select defaultValue="Server location" className="select ">
                <option value="">Select District</option>

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
                <option value="Chuadanga">Chuadanga</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Cumilla">Cumilla</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Faridpur">Faridpur</option>
                <option value="Feni">Feni</option>
                <option value="Gaibandha">Gaibandha</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Habiganj">Habiganj</option>
                <option value="Jamalpur">Jamalpur</option>
                <option value="Jashore">Jashore</option>
                <option value="Jhalokathi">Jhalokathi</option>
                <option value="Jhenaidah">Jhenaidah</option>
                <option value="Joypurhat">Joypurhat</option>
                <option value="Khagrachari">Khagrachari</option>
                <option value="Khulna">Khulna</option>
                <option value="Kishoreganj">Kishoreganj</option>
                <option value="Kurigram">Kurigram</option>
                <option value="Kushtia">Kushtia</option>
                <option value="Lakshmipur">Lakshmipur</option>
                <option value="Lalmonirhat">Lalmonirhat</option>
                <option value="Madaripur">Madaripur</option>
                <option value="Magura">Magura</option>
                <option value="Manikganj">Manikganj</option>
                <option value="Meherpur">Meherpur</option>
                <option value="Moulvibazar">Moulvibazar</option>
                <option value="Munshiganj">Munshiganj</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Naogaon">Naogaon</option>
                <option value="Narail">Narail</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Narsingdi">Narsingdi</option>
                <option value="Natore">Natore</option>
                <option value="Netrokona">Netrokona</option>
                <option value="Nilphamari">Nilphamari</option>
                <option value="Noakhali">Noakhali</option>
                <option value="Pabna">Pabna</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Patuakhali">Patuakhali</option>
                <option value="Pirojpur">Pirojpur</option>
                <option value="Rajbari">Rajbari</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangamati">Rangamati</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Satkhira">Satkhira</option>
                <option value="Shariatpur">Shariatpur</option>
                <option value="Sherpur">Sherpur</option>
                <option value="Sirajganj">Sirajganj</option>
                <option value="Sunamganj">Sunamganj</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Tangail">Tangail</option>
                <option value="Thakurgaon">Thakurgaon</option>
              </select>
            </fieldset>

            <fieldset className="fieldset my-1 font-medium ">
              <legend className="">Pickup Instruction</legend>
              <textarea
                className="textarea h-24"
                placeholder="Pickup Instruction"
              ></textarea>
            </fieldset>
          </div>
        </div>
        {/**right side end */}
      </div>
      {/**last section */}
      <div className="my-9">
        <h2 className="text-1xl font-semibold my-5">
          *PickUp Time 4pm-7pm Approx.
        </h2>
        <button className="btn btn-primary text-black rounded-2xl">
          Proceed to Confrim Booking
        </button>
      </div>
    </div>
  );
};

export default SendParcel;
