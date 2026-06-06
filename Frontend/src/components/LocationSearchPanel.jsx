import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    "221B Baker Street, London, UK",
    "1 Infinite Loop, Cupertino, CA, USA",
    "350 Fifth Avenue, New York, NY, USA",
    "10 Downing Street, London, UK",
    "78 Connaught Place, New Delhi, India",
    "12 MG Road, Bengaluru, Karnataka, India",
    "56 Marine Drive, Mumbai, Maharashtra, India",
    "23 Anna Salai, Chennai, Tamil Nadu, India",
    "45 Park Street, Kolkata, West Bengal, India",
    "101 Residency Road, Hyderabad, Telangana, India",
    "89 Hazratganj, Lucknow, Uttar Pradesh, India",
    "22 Civil Lines, Prayagraj, Uttar Pradesh, India",
    "67 Sector 18, Noida, Uttar Pradesh, India",
    "34 Rajpur Road, Dehradun, Uttarakhand, India",
    "15 Banjara Hills, Hyderabad, Telangana, India",
    "42 FC Road, Pune, Maharashtra, India",
    "11 C Scheme, Jaipur, Rajasthan, India",
    "73 Ashram Road, Ahmedabad, Gujarat, India",
    "29 Sector 17, Chandigarh, India",
  ];
  return (
    <div>
      {location.map((elem, idx) => {
        return (
          <div key={idx} onClick={() =>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className="flex items-center border-2 border-white rounded-xl active:border-black p-3 gap-4 mb-2 justify-start">
            <h2 className="bg-[#eee] h-8 w-12 flex items-center rounded-full justify-center ">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {elem}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
