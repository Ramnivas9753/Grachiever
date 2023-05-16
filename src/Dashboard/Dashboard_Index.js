import React from 'react'
import Sidebar from './Sidebar';
import GraphChart from '../Components/GraphChart';
import logo1 from '../images/LOGOS/sign_in.jpeg';


const Dashboard_Index = () => {
  return (
    <>
    {/* ============================================================================================= */}

    {/* This is OverAll Div... */}

    <div className='flex bg-gray-100 mt-20'>
      {/* This is LeftSide Div... */}
      <div className='bg-yellow-500 w-[24%] h-auto'>
        
        <div className='mb-10'>
            <Sidebar/>
        </div>
      
      </div>
      
      {/* This is RightSide Div... */}
      <div className='w-[76%] '>
        {/* ============================================== */}
        <div className='bg-[#11cdef] pb-10'>

        <div className=''>
            <p className=''>this is top Navbar</p>
          </div>

          <div className='grid grid-cols-4 '>
          
          {/* ------------Card_1------------ */}

          <div className='bg-white border border-blue-400 rounded-2xl m-5'>

          <div className='flex m-3'>

          <div className='w-full'>
            <p className='text-gray-500 font-bold'>TODAY'S MONEY</p>
            <p className='font-bold'>$53,000</p>
          </div>
          
          <div className='m-auto'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-10' />
          </div>

          </div>
          
            <p className='m-3'><span className='text-green-400 font-bold'>+55%</span> since yesterday</p>
          </div>


          {/* ------------Card_2------------ */}

          <div className='bg-white border border-blue-400 rounded-2xl m-5'>

          <div className='flex m-3'>

          <div className='w-full'>
            <p className='text-gray-500 font-bold'>TODAY'S MONEY</p>
            <p className='font-bold'>$53,000</p>
          </div>
          
          <div className='m-auto'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-10' />
          </div>

          </div>
          
            <p className='m-3'><span className='text-green-400 font-bold'>+55%</span> since yesterday</p>
          </div>

          {/* ------------Card_3------------ */}

          <div className='bg-white border border-blue-400 rounded-2xl m-5'>

          <div className='flex m-3'>

          <div className='w-full'>
            <p className='text-gray-500 font-bold'>TODAY'S MONEY</p>
            <p className='font-bold'>$53,000</p>
          </div>
          
          <div className='m-auto'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-10' />
          </div>

          </div>
          
            <p className='m-3'><span className='text-green-400 font-bold'>+55%</span> since yesterday</p>
          </div>

          {/* ------------Card_4------------ */}

          <div className='bg-white border border-blue-400 rounded-2xl m-5'>

          <div className='flex m-3'>

          <div className='w-full'>
            <p className='text-gray-500 font-bold'>TODAY'S MONEY</p>
            <p className='font-bold'>$53,000</p>
          </div>
          
          <div className='m-auto'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-10' />
          </div>

          </div>
          
            <p className='m-3'><span className='text-green-400 font-bold'>+55%</span> since yesterday</p>
          </div>
          </div>

        </div>


          {/* Graph Section Start */}
        
        <div className='flex -mt-10 '>
            
            <div className='bg-white w-[60%] h-96 rounded-2xl m-3'>
              <p className='font-bold text-center'>For Graph</p>
            </div>
            
            <div className='bg-blue-900 w-[40%] h-96 rounded-2xl m-3'>
            <img src='https://wallpapers.com/images/featured/murjp1nk4lp1idlt.jpg' className='h-full rounded-2xl' />
            </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mb-5'>

        {/* -----------------------Card_1-------------------- */}

        <div className='bg-white rounded-2xl p-5 m-3' >
          <h1 className='text-xl'>Team Members</h1>
          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

        
  
        </div>

       {/* -----------------Card_2------------  */}

       <div className='bg-white rounded-2xl p-5 m-3' >
          <h1 className='text-xl'>Team Members</h1>
          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

        </div>

        {/* --------------------------Card_3------------------------------         */}

        <div className='bg-white rounded-2xl p-5 m-3' >
          <h1 className='text-xl'>Team Members</h1>
          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />
  
        </div>
      </div>

      {/* Last Section */}

      <div className='flex '>
            
            <div className='bg-white w-[60%] h-auto rounded-2xl m-3'>
              <p className='font-bold text-center'>For Graph</p>
            </div>
            
            <div className='w-[40%] h-auto rounded-2xl m-3'>
            <div className='bg-white rounded-2xl p-5' >
          <h1 className='text-xl'>Team Members</h1>
          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />

          <div className='flex mt-3 mb-2'>
            <div className=' w-[20%]'>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0HMfzvQG_0ePm7WauQoS-2chZlw6a49s190jXwe1Zw&usqp=CAU&ec=48665699'} className='w-12 m-auto' />
            </div>
            <div className=' w-[40%]'>
              <p>Name</p>
              <p>Online</p>
            </div>
            <div className=' w-[40%] m-auto'>
              <button className='border p-2 w-full  border-[#11cdef] rounded-xl m-auto'>Add</button>
            </div>
          </div>
          <hr />
  
        </div>
            </div>

        </div>
        {/* ============================================== */}
      </div>
    </div>

    {/* ============================================================================================= */}

    </>
  )
}

export default Dashboard_Index
