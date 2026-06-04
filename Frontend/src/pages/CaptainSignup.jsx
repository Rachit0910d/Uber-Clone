import React, { useState } from "react";
import image from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const CaptainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        CaptainData,
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (err) {
      if (err.response) {
        console.error("Signup validation failed:", err.response.data);
        const firstError = err.response.data?.errors?.[0]?.msg || err.response.data?.message;
        if (firstError) alert(firstError);
      } else {
        console.error(err);
      }
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img className="ml-5 w-20" src={image} alt="" />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base mb-2">Enter your name</h3>

          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-base mb-2">What's your email</h3>

          <input
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-6 font-medium rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />

          <h3 className="text-base mb-2">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-6 font-medium rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <h3 className="text-base mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              required
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              required
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <input
              type="number"
              placeholder="Vehicle Capacity"
              required
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />

            <select
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="motorcycle">Moto</option>
              <option value="auto">Rickshaw</option>
              <option value="car">Car</option>
            </select>
          </div>

          <button className="bg-[#111] text-white mb-2 rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base ">
            Create Captain Account
          </button>
        </form>
        <p className="text-center ">
          Already have account?{" "}
          <Link to="/captain-login" className="text-blue-500">
            Go to login page
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/signup"
          className="bg-[#2c9421] mb-3 flex items-center justify-center text-white rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base "
        >
          Signup as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
