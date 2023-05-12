import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";


const FlipCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
      <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools<span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
      <p className=" ml-3 font-bold flex items-center ">Tools</p>
      <p className="ml-3">
      Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
      </p>
      </div>
    </div>
    
    <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools <span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
      <p className=" ml-3 font-bold flex items-center ">Tools </p>
      <p className="ml-3">
      Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
      </p>
      </div>
    </div>

    <div className="group relative w-full md:w-64 h-72 bg-red-100  rounded-2xl ">
      <div className="absolute inset-0 bg-white  p-2 rounded-2xl z-10 ">
            <h2 className="text-gray-700 ml-3 font-bold  items-center ">Tools <span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaGreaterThan /></span></h2>
            <p className="text-gray-700 ml-3">HOW IT WORKS?</p>
            <img src={'https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png'} className='w-full h-52 p-2 rounded-2xl' />
      </div>
      <div className='w-52 h-[270px]  overflow-hidden rounded-2xl m-3 p-2 bg-gray-300 transform transition duration-500 group-hover:translate-x-60'><span className='float-right text-x m-2 border-2 border-black rounded-full p-1'><FaLessThan /></span>
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

// import { useState } from "react";

// function Card() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`${
//         isFlipped ? "rotate-y-180" : ""
//       } w-64 h-64 border-2 border-gray-300 rounded-md shadow-md`}
//       onMouseEnter={flipCard}
//       onMouseLeave={flipCard}
//     >
//       <div className="w-full h-full flex items-center justify-center">
//         <div className="text-4xl text-gray-500">{isFlipped ? "Front" : "Back"}</div>
//       </div>
//     </div>
//   );
// }

// export default Card;

// import { useState } from 'react';

// function App() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const flipCard = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`w-64 h-64 bg-blue-500 transform transition-transform duration-500 ${
//         isFlipped ? 'rotate-x-180' : ''
//       }`}
//       onClick={flipCard}
//     >
//       <div className="front">Front</div>
//       <div className="back">Back</div>
//     </div>
//   );
// }

// export  default App;