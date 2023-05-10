import React from 'react';
import { FaStar } from "react-icons/fa";

const FlipCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
      <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <p className="text-gray-700 ml-3 font-bold flex items-center ">Tools </p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'>
      <p className=" ml-3 font-bold flex items-center ">Tools </p>
      <p className="ml-3">
      Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
      </p>
      </div>
    </div>
    
    <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <p className="text-gray-700 ml-3 font-bold flex items-center ">Tools </p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'>
      <p className=" ml-3 font-bold flex items-center ">Tools </p>
      <p className="ml-3">
      Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
      </p>
      </div>
    </div>

    <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <p className="text-gray-700 ml-3 font-bold flex items-center ">Tools </p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'>
      <p className=" ml-3 font-bold flex items-center ">Tools </p>
      <p className="ml-3">
      Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
      </p>
      </div>
    </div>

    </div>
  );
};

export default FlipCard;
