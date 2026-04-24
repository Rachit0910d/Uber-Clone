import React, { useState } from "react";
import image from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName:{
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    })
    
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
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
              required
              value={firstname}
              onChange={(e) =>{
                setFirstname(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 font-medium rounded px-4 py-2 border text-base placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) =>{
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
              onChange={(e) =>{
                setEmail(e.target.value);
              }}
            className="bg-[#eeeeee] mb-6 font-medium rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />

          <h3 className="text-base mb-2">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-6 font-medium rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            value={password}
              onChange={(e) =>{
                setPassword(e.target.value);
              }}
            placeholder="password"
            required
          />

          <button className="bg-[#111] text-white mb-2 rounded px-4 py-2 font-semibold w-full text-base placeholder:text-sm ">
            Login
          </button>
        </form>
        <p className="text-center ">
          Already a user?{" "}
          <Link to="/login" className="text-blue-500">
            Go to login page
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-signup"
          className="bg-[#5CD5ED] mb-3 flex items-center justify-center text-white rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base "
        >
          Signup as captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
