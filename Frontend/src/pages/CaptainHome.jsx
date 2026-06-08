import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Image2 from "../assets/uberMap.jpg";
import Image1 from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import CaptainRiding from "./CaptainRiding";
import FinishRide from "../components/FinishRide";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ConfirmRidePopupPanelRef = useRef(null);

  
  const [captainRidingPanel, setcaptainRidingPanel] = useState(false);
  const captainRidingPanelRef = useRef(null);


  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel],
  );

  useGSAP(
    function () {
      if (ConfirmRidePopupPanel) {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePopupPanel],
  );

    useGSAP(
    function () {
      if (captainRidingPanel) {
        gsap.to(captainRidingPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(captainRidingPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [captainRidingPanel],
  );
 

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={Image1} alt="" />
        <Link
          to="/captain-home"
          className="font-semibold text-3xl cursor-pointer"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img className="h-full w-full object-cover" src={Image2} alt="" />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      <div
        ref={ConfirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setcaptainRidingPanel={setcaptainRidingPanel}
        />
      </div>

      

      
    </div>
  );
};

export default CaptainHome;
