import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image2 from "../assets/uberMap.jpg";
import Image1 from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = (props) => {

  const [finishedRidePanel, setFinishedRidePanel] = useState(false);
  const finishedRidePanelRef = useRef(null);

 

  useGSAP(
    function () {
      if (finishedRidePanel) {
        gsap.to(finishedRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishedRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishedRidePanel],
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={Image1} alt="" />
        <Link
          to="/captain-home"
          className="font-semibold text-3xl pr-6 cursor-pointer"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img className="h-full w-full object-cover" src={Image2} alt="" />
      </div>

      <div
        onClick={() => {
         setFinishedRidePanel(true);
        }}
        className="h-1/5 p-6 flex justify-between relative items-center"
      >
        <h5
          onClick={() => {}}
          className="p-2 text-center w-[95%] absolute top-0"
        >
          <i className="text-3xl text-gray-500 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4km away</h4>
        <button className="bg-green-500 active:bg-green-700 text-white font-semibold flex  justify-center px-10 p-3 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div ref={finishedRidePanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
        <FinishRide  />
      </div>
    </div>
  );
};

export default CaptainRiding;
