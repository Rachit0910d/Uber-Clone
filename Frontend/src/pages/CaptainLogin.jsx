import React, { useState } from "react";
import image from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain,
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img className="ml-5 w-20" src={image} alt="" />

        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg mb-2">What's your email</h3>

          <input
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 font-medium rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg mb-2">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-7 font-medium rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-[#111] text-white mb-2 rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base ">
            Login
          </button>
        </form>
        <p className="text-center ">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-500">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-red-700 mb-3 flex items-center justify-center text-white rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base "
        >
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
