import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel1 = () => {
  const {
    register,
    handleSubmit,
    control,
    //formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const wareHouses = useLoaderData();
  const regionsDuplicate = wareHouses.map((w) => w.region);
  const regions = [...new Set(regionsDuplicate)];
  //explore useMemo callback
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  //const senderRegion = watch("senderRegion");
  console.log(regions);

  const districtsByRegion = (region) => {
    const regionDistricts = wareHouses.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    //const sameDistrict = data.senderDistrict === data.receiverDistrict
    //console.log(sameDistrict)

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let totalCost = 0;
    if (isDocument) {
      totalCost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        totalCost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        totalCost = minCharge + extraCharge;
      }
    }

    console.log("cost", totalCost);
    data.totalCost = totalCost;

    Swal.fire({
      title: "Are you agree with our charge?",
      text: `Youll be charged ${totalCost} BDT!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and continue to payment",
    }).then((result) => {
      if (result.isConfirmed)
        //save the info to db
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);

          if (res.data.insertedId) {
            navigate("/dashboard/myParcels");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your parcel has been create continue to pay",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    });
  };

  return (
    <div className="my-5">
      <h2 className="text-4xl font-semibold">Send A Parcel</h2>
      <div className="divider"></div>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-3 p-4">
        <h2 className="text-2xl font-medium">Enter your parcel details</h2>
        {/**parcel doc type */}
        <div className="my-5">
          <label className="label mr-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/**parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        <div className="divider"></div>
        {/**two column*/}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {/**sender infp */}
            <h2 className="text-2xl font-semibold">Sender Details</h2>
            <fieldset className="fieldset ">
              {/**sender name */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input"
                defaultValue={user?.displayName}
                {...register("senderName")}
                placeholder="Sender Name"
              />
              {/**sender Email  */}
              <label className="label">Sender Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                className="input"
                {...register("senderEmail")}
                placeholder="Sender email"
              />
              {/**sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/**sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a district"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/**sender Sender Address */}
              <label className="label">Sender Address</label>
              <input
                type="text"
                className="input"
                {...register("senderAddress")}
                placeholder="Sender Address"
              />
              {/**sender Contact No */}
              <label className="label">Sender Contact No.</label>
              <input
                type="number"
                className="input"
                {...register("senderContact")}
                placeholder="Sender  Contact No."
              />
              {/**sender description */}
              <label className="label"> Pickup instruction</label>
              <legend className="fieldset-legend">Pickup instruction</legend>
              <textarea
                className="textarea h-30"
                {...register("instructions")}
                placeholder="Pickup instruction"
              ></textarea>
            </fieldset>
          </div>
          <div>
            {/**receiver infp */}
            <h2 className="text-2xl font-semibold">Receiver Details</h2>
            <fieldset className="fieldset">
              {/**Receiver Name  */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input"
                {...register("receiverName")}
                placeholder="Receiver Name"
              />
              {/**Receiver Email  */}
              <label className="label">Receiver Email</label>
              <input
                type="email"
                className="input"
                {...register("receiverEmail")}
                placeholder="Receiver email"
              />

              {/**receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>

                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/**receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/*Receiver Sender Address */}
              <label className="label">Receiver Address</label>
              <input
                type="text"
                className="input"
                {...register("ReceiverAddress")}
                placeholder="Receiver Address"
              />
              {/**Receiver Contact No */}
              <label className="label">Receiver Contact No.</label>
              <input
                type="number"
                className="input"
                {...register("Receiver-contact")}
                placeholder="Receiver  Contact No."
              />
              {/**Receiver description */}
              <label className="label">Delivery instruction</label>
              <legend className="fieldset-legend">Delivery Instruction</legend>
              <textarea
                className="textarea h-30"
                {...register("instructions")}
                placeholder="Delivery instruction"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black my-8 rounded-2xl w-full "
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel1;
