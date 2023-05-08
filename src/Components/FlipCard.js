import React from 'react';

const FlipCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
      <div className="relative w-64 h-72 bg-red-100 m-auto rounded-2xl ">
      <div className="absolute inset-0 bg-white transform transition duration-500 hover:translate-x-60 p-2 rounded-2xl">
            <p className="text-gray-700 ml-3 font-bold">Tools</p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
    </div>

    <div className="relative w-64 h-72 bg-red-100 m-auto rounded-2xl ">
      <div className="absolute inset-0 bg-white transform transition duration-500 hover:translate-x-60 p-2 rounded-2xl">
            <p className="text-gray-700 ml-3 font-bold">Tools</p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl'  />
      </div>
    </div>

    <div className="relative w-64 h-72 bg-red-100 m-auto rounded-2xl ">
      <div className="absolute inset-0 bg-white transform transition duration-500 hover:translate-x-60 p-2 rounded-2xl">
            <p className="text-gray-700 ml-3 font-bold">Tools</p>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl'  />
      </div>
    </div>
    </div>
  );
};

export default FlipCard;
