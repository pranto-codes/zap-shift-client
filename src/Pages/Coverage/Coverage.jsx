import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const warehouses = useLoaderData();
  //console.log(warehouses);
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = warehouses.find((w) =>
      w.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord, 16);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        We are available in 64 districts
      </h2>

      <div className="my-5 ml-5">
        {/**search section */}
        <h1 className="text-2xl font-semibold mb-5">
          Search our Service Centers
        </h1>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      <div className="border w-full h-[800px] my-10">
        <MapContainer
          center={position}
          zoom={9}
          className="h-[800px]"
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehouses.map((houses, index) => (
            <Marker key={index} position={[houses.latitude, houses.longitude]}>
              <Popup>
                <strong>District : {houses.district}</strong> <br />
                <strong>
                  Warehoues : {houses.covered_area.join(",")}
                </strong>{" "}
                <br />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
