import React from "react";
import Image2 from "../assets/uberMap.jpg";
import {Link} from "react-router-dom";


const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed h-10 w-10 font-semibold text-3xl pt-6 cursor-pointer flex rounded-2xl items-center">
            <i className="pl-3 ri-home-5-line"></i>
        </Link>

      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={Image2} alt="" />
      </div>

      <div className="h-1/2 p-6 flex flex-col gap-7">
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

        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <i className="ri-wallet-line text-lg"></i>
            <span className="font-semibold">Cash Payment</span>
          </div>
          <i className="ri-arrow-right-s-line text-lg"></i>
        </div>

        <button className="bg-black text-white text-xl font-semibold p-3 rounded-lg">Pay</button>
      </div>
    </div>
  );
};

export default Riding;
