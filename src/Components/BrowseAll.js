import React from 'react'
import Browsecards from "./Browsecards";
import { Checkbox } from "@material-tailwind/react";
import { Label } from '@mui/icons-material';
import { StarIcon } from "@heroicons/react/24/solid";
import { Select, Option } from "@material-tailwind/react";


function BrowseAll() {
  return (
    <section>
      <div className='bg-[#dbd8d0] p-10 flex flex-wrap  '>
        

        <div className='w-[100%] sm:w-[25%] bg-white p-5  mt-20 rounded-lg ml-10'>
          <p className='font-bold text-black outline-none'>Filter
            <hr className="border-t-2 border-gray-300 my-4 w-full" /> </p>


          <div className='mt-5'>
            <p>CATEGORIES</p>
            <p><Checkbox label="React" /></p>
            <p><Checkbox label="Javascript" /></p>
            <p><Checkbox label="Angular" /></p>
            <p><Checkbox label="Node" /></p>
            <p><Checkbox label="Angular js" /></p>
            <p><Checkbox label="GatsBy" /></p>
            <p><Checkbox label="GraphQL" /></p>
            <p><Checkbox label="Vuejs" /></p>
            <p><Checkbox label="Bootstrap" /></p>
            <p><Checkbox label="Figma" /></p>
            <p><Checkbox label="Sketch" /></p>
            <p><Checkbox label="HTML5" /></p>
          </div>
          <div className='ml-3'>
          <hr className="border-t-2 border-gray-300 my-4 w-full" /> 
            <p>RATINGS</p>
           
            <div className="5 flex items-center gap-0 mt-2">
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
            </div>
            <div className="5 flex items-center gap-0 mt-2">
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
            </div>
            <div className="5 flex items-center gap-0 mt-2">
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
            </div>
          </div>

          <div className='mt-5'>
          <hr className="border-t-2 border-gray-300 my-4 w-full" /> 
            <p>SKILL LEVEL</p>
            <p><Checkbox label="All Level" /></p>
            <p><Checkbox label="Beginner" /></p>
            <p><Checkbox label="Intermediate" /></p>
            <p><Checkbox label="Advance" /></p>
          
          </div>
        </div>
        <div className='w-[100%] sm:w-[70%] bg-[#dbd8d0] p-10'>
          <div className='flex ml-80'>
          <div className='text-center m2 mt-5'>
        <input type="text" className="mt-5 w-full ml-10 md:w-64 lg:w-64 text-lg  h-14 border rounded-xl  p-2  md:m-2  outline-none" placeholder="Search Course" />
        </div>
        <div className="text-center m-2 mt-5">
        <select className="mt-5 w-full ml-10 md:w-64 lg:w-64 text-lg  h-14 border rounded-xl  p-2  md:m-2  outline-none">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Free</option>
            <option>Most Popular</option>
            <option>Highest Rated</option>
        </select>
    </div>
    </div>
          <Browsecards />
       
        </div>

      </div>
    </section>
  );
}

export default BrowseAll;
