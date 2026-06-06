import React from "react";

const WaitForDriver = (props) => {
  return (
    <div className="flex flex-col gap-2 justify-between items-center h-screen">
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-2 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      {/* Driver Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/handsome-indian-young-man-looking-camera-while-sitting-car-man-wearing-white-t-shirt-glasses_1157-49929.jpg?semt=ais_hybrid&w=740&q=80"
          alt="driver"
          className="h-64 w-64 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* Driver Details Section */}
      <div className="w-full px-5 flex flex-col gap-5">
        {/* Driver Info */}
        <div className="bg-gray-100 rounded-lg p-5">
          <h3 className="text-2xl font-bold mb-2">Raj Kumar</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-lg">⭐</span>
            <span className="text-gray-600 text-sm">(2,450 rides)</span>
          </div>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Vehicle:</span> White Toyota
            Fortuner
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">License Plate:</span> DL 01 AB 1234
          </p>
        </div>

        {/* Message Box */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Send a message to the driver..."
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 transition">
            <i className="ri-send-plane-2-fill text-lg"></i>
          </button>
        </div>

        {/* Call Button */}
        <button className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition flex items-center justify-center gap-3">
          <i className="ri-phone-fill text-xl"></i>
          Call Driver
        </button>

        {/* Trip Info */}
        <div className="bg-gray-50 rounded-lg p-4 flex justify-between">
          <div>
            <p className="text-gray-600 text-sm">Pickup</p>
            <p className="font-semibold">123 Main Street</p>
          </div>
          <div className="text-center">
            <i className="ri-arrow-right-line text-gray-400"></i>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Dropoff</p>
            <p className="font-semibold">456 Park Avenue</p>
          </div>
        </div>

        {/* Cancel Button */}
        <button className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-200 transition">
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default WaitForDriver;
