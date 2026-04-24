import React from 'react'
import image from '../assets/vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/95/ef/61/95ef6196a96de39d92cf033867dc0505.jpg)]  h-screen flex flex-col justify-between pt-8 w-full '>
            <img className='ml-5 w-20' src={image} alt="" />
            <div className='bg-white pb-7 py-5 px-10'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items.center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home