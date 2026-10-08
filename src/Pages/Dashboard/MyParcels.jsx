import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TbEditFilled } from "react-icons/tb";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { data, Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?.email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount) {
            //no need to refesh the page
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      totalCost: parcel.totalCost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo,
    );
    console.log(res.data.url);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>All of my Parcels : {parcels.length}</h2>
      {/**table start */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.totalCost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="badge badge-success font-semibold rounded-2xl">
                      Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary btn-sm text-black"
                    >
                      Pay Now
                    </button>
                  )}
                </td>
                <td className="flex gap-5">
                  <button className="btn btn-square hover:bg-primary">
                    <TbEditFilled />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <LuBookOpenCheck />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/**table end */}
    </div>
  );
};

export default MyParcels;
