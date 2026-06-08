import React from "react";
import Image1 from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import {Link} from 'react-router-dom';
const FinishRide = () => {


  return (
    
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Ride completed
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Finish Ride
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Fare amount</p>
            <p className="mt-3 text-4xl font-semibold text-slate-900">₹125</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">
              Payment method
            </label>
            <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100">
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
        </div>
      </div>
    
  );
};

export default FinishRide;
