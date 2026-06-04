import React, { useContext, useState } from "react";
import image from "../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png";
import { Link, useNavigate } from "react-router-dom";
import {UserDataContext} from '../context/UserContext.jsx';
import Axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email, 
      password: password,
    }

    const response = await Axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/home');
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
