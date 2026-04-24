import React, { useState } from "react";
import image from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });

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
          New here?{" "}
          <Link to="/signup" className="text-blue-500">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to="/captain-login" className="bg-yellow-500 mb-3 flex items-center justify-center text-black rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base ">
          Login as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
