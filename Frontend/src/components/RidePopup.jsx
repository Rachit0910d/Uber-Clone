import React from "react";

const RidePopup = (props) => {
  return (
    <div className="flex flex-col gap-2 justify-between items-center">
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">A New Ride Available</h3>

      <div className="w-full px-5 flex flex-col gap-5 justify-start">
        <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4">
          <div>
            <p className="text-gray-600 text-sm">Distance</p>
            <p className="text-xl font-semibold">4.2 km</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Duration</p>
            <p className="text-xl font-semibold">12 min</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Fare</p>
            <p className="text-xl font-semibold">₹125</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <p className="text-xs text-gray-600">Pickup Location</p>
              <p className="text-sm font-semibold">123 Main Street, Downtown</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <p className="text-xs text-gray-600">Dropoff Location</p>
              <p className="text-sm font-semibold">456 Park Avenue, Uptown</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            props.setRidePopupPanel(false);
            props.setConfirmRidePopupPanel(true);

          }}
          className="w-full bg-yellow-400 active:bg-yellow-600  py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Accept Ride
        </button>

        <button
          onClick={() => {props.setRidePopupPanel(false);}}
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopup;
