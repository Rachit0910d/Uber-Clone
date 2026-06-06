import React from "react";

const ConfirmRide = (props) => {
  return (
    <div className="flex flex-col gap-2 justify-between items-center">
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

      {/* Vehicle Image Section */}
      <img
        src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n"
        alt="vehicle"
        className="h-48  object-fit rounded-lg"
      /> 

      {/* Vehicle Details Section */}
      <div className="w-full px-5 flex flex-col gap-5 justify-start">
        
        {/* Distance and Duration Info */}
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

        {/* Pickup and Dropoff Details */}
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

        {/* Payment Method */}
        <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <i className="ri-wallet-line text-lg"></i>
            <span className="font-semibold">Cash Payment</span>
          </div>
          <i className="ri-arrow-right-s-line text-lg"></i>
        </div>

        {/* Action Button */}
        <button onClick={
            () =>{
                props.setConfirmRidePanel(false);
                props.setVehicleFound(true);
            }
        } className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition">
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
