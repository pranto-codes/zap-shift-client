import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { AiTwotoneFolderOpen } from "react-icons/ai";

const RiderApplications = () => {
  const axiosSecure = useAxiosSecure();

  const [selectedRider, setSelectedRider] = useState(null);

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRidersStatus = (rider, status) => {
    const updatedInfo = {
      status: status,
      email: rider.email,
    };

    axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status updated to ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRidersStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRidersStatus(rider, "rejected");
  };

  const handleView = (rider) => {
    setSelectedRider(rider);
    document.getElementById("rider_modal").showModal();
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold m-5 text-secondary">
        Riders Pending Applications : {riders.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Number</th>
              <th>Vehicle Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>

                <td>{rider.fullName}</td>

                <td>{rider.email}</td>

                <td>{rider.district}</td>

                <td>{rider.number}</td>

                <td>{rider.vehicleType}</td>

                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>

                <td className="flex gap-2">
                  {/* View Button */}
                  <button onClick={() => handleView(rider)} className="btn">
                    <AiTwotoneFolderOpen />
                  </button>

                  {/* Approve Button */}
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <FaUserCheck />
                  </button>

                  {/* Reject Button */}
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn"
                  >
                    <FaUserAltSlash />
                  </button>

                  {/* Delete Button */}
                  <button className="btn">
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rider Details Modal */}
      <dialog id="rider_modal" className="modal">
        <div className="modal-box max-w-2xl">
          {selectedRider && (
            <>
              <h3 className="font-bold text-2xl text-primary mb-5">
                Rider Application Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Full Name</p>
                  <p>{selectedRider.fullName}</p>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p>{selectedRider.email}</p>
                </div>

                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p>{selectedRider.phone}</p>
                </div>

                <div>
                  <p className="font-semibold">NID Number</p>
                  <p>{selectedRider.nid}</p>
                </div>

                <div>
                  <p className="font-semibold">Age</p>
                  <p>{selectedRider.age}</p>
                </div>

                <div>
                  <p className="font-semibold">Date of Birth</p>
                  <p>{selectedRider.dateOfBirth}</p>
                </div>

                <div>
                  <p className="font-semibold">District</p>
                  <p>{selectedRider.district}</p>
                </div>

                <div>
                  <p className="font-semibold">Vehicle Type</p>
                  <p>{selectedRider.vehicleType}</p>
                </div>

                <div>
                  <p className="font-semibold">Vehicle Registration</p>
                  <p>{selectedRider.vehicleRegistration}</p>
                </div>

                <div>
                  <p className="font-semibold">Status</p>
                  <p
                    className={
                      selectedRider.status === "approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {selectedRider.status}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="font-semibold">Address</p>
                  <p>{selectedRider.address}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="font-semibold">
                    Why do you want to become a rider?
                  </p>
                  <p>{selectedRider.reason}</p>
                </div>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default RiderApplications;
