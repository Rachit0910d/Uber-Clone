import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();




  };
  return (
    <div className="flex flex-col gap-2 justify-between items-center">
      <h5
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to start
      </h3>

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

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            type="text"
            placeholder="Enter 4-digit OTP"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
          />
          <p className="text-xs text-gray-500">
            Ask the passenger for the ride OTP before confirming.
          </p>
        </div>

        <Link
          to="/captain-riding"
          className="w-full bg-yellow-400 justify-center flex active:bg-yellow-600  py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Confirm Ride
        </Link>

        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
            props.setCaptainRidingPanel(true);
          }}
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
