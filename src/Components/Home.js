import homeimage01 from '../images/1/HOME page.png';
import slidelogo1 from '../images/2/cisco-logo.png';
import slidelogo2 from '../images/2/futurelearn-logo.png';
import slidelogo3 from '../images/2/google-logo-2.png';
import slidelogo4 from '../images/2/MIT_logo.png';
import slidelogo5 from '../images/2/nvidia-logo-16.png';
import slidelogo6 from '../images/2/oxford.png';
import slidelogo7 from '../images/2/stanford.png';
import slidelogo8 from '../images/2/University.png';
import sgraph from '../images/graph/skillgraph.png';
import Digital_Marketing from '../images/Top_Categories/digital_marketing.jpg';
// import tc2 from '../images/Top_Categories/data.jpg';
import Graphics_Design from '../images/Top_Categories/graphics_design.jpg';
import Data from '../images/Top_Categories/data.jpg';
import Still_Confused from '../images/Top_Categories/still_confused.png';
import Video_Animation from '../images/Top_Categories/video_animation.jpg';
// import tc7 from '../images/Top_Categories/video_animation.jpg';
import wcg1 from '../images/Why_Choose_Grachiever/1.png';
import wcg2 from '../images/Why_Choose_Grachiever/2.png';
import wcg3 from '../images/Why_Choose_Grachiever/3.png';
import wcg4 from '../images/Why_Choose_Grachiever/4.png';
import sc1 from '../images/Skill_Consultancy/1.png';
import slogo from '../images/Skill_Consultancy/1.png';
import Trusted_section from "./Trusted_section";
//  this link for react icon 
import { FaSearch } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Cards from "./Cards";
import Z_index_card1 from './Z_index_card1';
import FlipCard from './FlipCard';

import { Link } from 'react-router-dom'
import { useState } from "react";
// ........... text animation in home page ........
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


function Home () {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Monetize off', 'Yours Skills', ' With passion'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    // Initialize Typed.js
    const typedInstance = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typedInstance.destroy();
    };
  }, []);

  // const [searchText, setSearchText] = useState('');
  // const [showContent, setShowContent] = useState(false);
  // const handleSearchClick = () => {
  //   setShowContent(true);
  // };

  const [isDivVisible, setDivVisibility] = useState(false);

  const handleInputClick = () => {
    setDivVisibility(true);
    document.getElementById('homepageicons').style.marginTop="200px";
  };

  const handleMouseLeave = () => {
    setDivVisibility(false);
    document.getElementById('homepageicons').style.marginTop="10px";
  };
 
    return(
        <>
            
{/* <!-- ........................ home section start ..................................... --> */}
 <section className="px-5 sm:px-5 md:px-10 lg:px-10 pt-10 mt-12 md:mt-28">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="pl-5 md:pl-10 lg:pl-10">
      <span className="type text-[30px] mt-5 lg:text-[60px] font-medium text-[#00c5ff]" ref={typedRef}></span>
      <p className="mt-5 text-2xl">The only easier, powerful and authoring platform designed for consistent learners to
        unlock the power of monetizing</p>
      {/* <!--Search--> */}
      <div className="relative border-b-[#349fcf] border-[#349fcf] border-2 flex items-center mt-8 w-auto rounded-full outline-none text-xl">
        <input type="text" className="py-3 px-4 outline-none w-full rounded-full" placeholder="Search Anything..."  onClick={handleInputClick}/>
        <select className="focus:outline-none cursor-pointer w-24 text-md sm:text">
          <option>Courses</option>
          <option>Freelancing</option>
          <option>Tools</option>
        </select>
        <span className="w-16 sm:w-16 md:w-16 lg:w-14 m-1 h-10 rounded-full bg-[#00c5ff] text-white"><FaSearch className='text-2xl mx-auto mt-2'/></span>
        {isDivVisible && (
            <div
              id="z2"
              className="absolute top-12 p-5 mt-1 w-[100%] shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto"
              onMouseLeave={handleMouseLeave} >
              <p className="font-bold text-center">Recent Search</p>
              <Link to=''>Python Full Stack Development</Link><hr/>
              <Link to=''>Java Full Stack Developmentt</Link><hr/>
              <Link to=''>Angular Development</Link><hr/>
              <Link to=''>.Net Developer</Link><hr/>
              <Link to=''>Frontend Developer</Link><hr/>
              <Link to=''>Backend Developer</Link><hr/>

              <p className="font-bold text-center">Letest Search</p>
              <Link to=''>Python Full Stack Development</Link><hr/>
              <Link to=''>Java Full Stack Developmentt</Link><hr/>
              <Link to=''>Angular Development</Link><hr/>
              <Link to=''>.Net Developer</Link><hr/>
              <Link to=''>Frontend Developer</Link><hr/>
              <Link to=''>Backend Developer</Link><hr/>

              <p className="font-bold text-center">Popular Search</p>
              <Link to=''>Python Full Stack Development</Link><hr/>
              <Link to=''>Java Full Stack Developmentt</Link><hr/>
              <Link to=''>Angular Development</Link><hr/>
              <Link to=''>.Net Developer</Link><hr/>
              <Link to=''>Frontend Developer</Link><hr/>
              <Link to=''>Backend Developer</Link><hr/>
            </div>
          )}
      </div>

      {/* <div className="relative">
          <input
            type="text"
            className="py-2.5 px-4 outline-none w-full rounded-full"
            placeholder="Search Anything..."
            onClick={handleInputClick}
          />
          {isDivVisible && (
            <div
              id="z2"
              className="absolute bg-green-100 p-5 mt-1 w-auto shadow-lg rounded-bl rounded-br max-h-36 overflow-y-scroll"
              onMouseLeave={handleMouseLeave}
            >
              <p className="font-bold text-center">Popular Search</p>
              <p>Python Full Stack Development</p>
              <p>Java Full Stack Development</p>
              <p>Angular Development</p>
              <p>.Net Developer</p>
              <p>Frontend Developer</p>
              <p>Backend Developer</p>
            </div>
          )}
       </div> */}


      {/* <div id='z1' className='bg-red-100 p-10 h-32 overflow-y-scroll' style={{ visibility: searchItem }}>
        <p className='font-bold text-center'>Letest Search</p>
        <p>Python</p>
        <p>Java</p>
        <p>.NET</p>
        <p>Angular</p><hr/>
        <p className='font-bold text-center'>Popular Search</p>
        <p>welcome to search bar </p>
        <p>welcome to search bar </p>
        <p>welcome to search bar </p>
      </div> */}

      
      <div id='homepageicons' className='flex flex-wrap mt-10'> 
        <a href='https://tailwindcss.com/'><div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-free-certificates.png?auto=format&h=50&ixlib=php-4.1.0&s=c25548f8b3bc8df8ae051dbe30a9a50a' />
          <p className='mx-3 self-center'>Free Certificates</p>
        </div></a>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Fmit-trn-sq.png?auto=format&h=50&ixlib=php-4.1.0&s=1b47847319a2b8619dc6912cbc801f4f' />
          <p className='mx-3 self-center'>MIT</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto rounded-full' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Famazon-trn-sq.png?auto=format&h=50&ixlib=php-4.1.0&s=8cfd15253d459ddaf51523a64c66b858' />
          <p className='mx-3 self-center'>Amazon</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Fstanford-trn-sq.png?auto=format&h=50&ixlib=php-4.1.0&s=82be5cad71579bd3b69343036dfc77bf' />
          <p className='mx-3 self-center'>Stanford</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300 ml-2'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-ivy-league.png?auto=format&h=50&ixlib=php-4.1.0&s=311a4304715b0a9d768eed1d0f8f2e79' />
          <p className='mx-3 self-center'>ivy Leagues</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto rounded-full' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-business.png?auto=format&h=50&ixlib=php-4.1.0&s=6c89a012fda1b748c0da9d16eb51cac0' />
          <p className='mx-3 self-center'>Business</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-cs.png?auto=format&h=50&ixlib=php-4.1.0&s=ca1b72eb12f2dfea042808d8709c73d8' />
          <p className='mx-3 self-center'>Computer</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-data-science.png?auto=format&h=50&ixlib=php-4.1.0&s=a25f5a44fdf128f96448a57332226029' />
          <p className='mx-3 self-center'>Data Science</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Fgoogle-trn-sq.png?auto=format&h=50&ixlib=php-4.1.0&s=c569365ef52e93e5d7a267230eabd784' />
          <p className='mx-3 self-center'>Google</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto rounded-full' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-engineering.png?auto=format&h=50&ixlib=php-4.1.0&s=719f1975b1e159a8cd83e2733fc78deb' />
          <p className='mx-3 self-center'>Prompt Engineering</p>
        </div>
        <div className='bg-[#f9fafc] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto rounded-full' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-cs.png?auto=format&h=50&ixlib=php-4.1.0&s=ca1b72eb12f2dfea042808d8709c73d8' />
          <p className='mx-3 self-center'>Computer Science</p>
        </div>

      </div>

    </div>
    <div className="mt-8 md:mt-0">
      <img src={homeimage01} className="md:w-[80%] m-auto" />            
    </div>
  </div>
</section>
{/* <!-- ...................... home section end ................................... --> */}

    {/* <!--Trusted Section-->    */}

    <Trusted_section/>

    {/* <!--Skill Section--> */}

    <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-5">
      <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
        <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10">
            <h1 className=" mt-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"><span class="text-[#4eb0e1]">Track</span> The Trending<br/> <span class="text-[#4eb0e1]">Skills</span> Over Time</h1>
            <p className="mt-5  text-lg">Our Skill Graph feature helps you stay up-to-date with the latest skills in demand. our Skill Graph displays the trending skills over time.</p>
            <p  className="mt-5 text-lg">allowing you to identify which skills are gaining popularity and which are losing relevance. With this powerful tool, you can make informed decisions about the skills you want to learn or develop, ensuring you stay ahead of the curve in your chosen field.</p>
            <div className=' mt-10'>
       <button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl   px-8 text-lg  font-bold"><Link to="/Skillgraph">Learn More</Link></button>
       </div>
        </div>
    {/* <!--Graph Section--> */}
        <div className="mt-5 md:mt-0">
          <img src={sgraph} className='mx-auto' />
        </div>
    </div>
    </section>
   
    {/* <!-- ........... card slider for codepen --> */}

    <Cards />

  {/* Top Categories Section */}

  <section className="m-5 p-0 sm:p-0 md:p-10 lg:p-10" >
  <h1 className="text-2xl md:text-4xl font-bold text-center  p-5 ">Top Categories</h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto mt-5">
  {/* Left Side Section--> */}
  <div className="md:m-5 lg:m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-5">
  <div className="">
  <div className="shadow-md shadow-gray-500  w-full sm:w-full md:w-full lg:w-full h-52 rounded-2xl" style={{position: 'relative'}}>
              <img src={Data} alt='this is img' width='100%' className='w-full h-full brightness-50 rounded-2xl hover:scale-110 duration-300  '/>
                <p className='font-bold text-xl w-full text-center' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>Data</p>
              </div>
              <div className="shadow-md shadow-gray-500  w-full sm:w-full md:w-full lg:w-full h-52 rounded-2xl mt-10" style={{position: 'relative'}}>
              <img src={Digital_Marketing} alt='this is img' width='100%' className='w-full h-full brightness-50 rounded-2xl hover:scale-110 duration-300  '/>
                <p className='font-bold text-xl w-full text-center' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>Digital Marketing</p>
              </div>

            </div>
            <div className="shadow-md shadow-gray-500  brightness-100 bg-[#a6a6a6] rounded-2xl h-full sm:h-full md:h-full lg:h-full w-full  overflow-hidden" >
            <img src={Still_Confused} alt='this is img' width='100%' className=' w-full  brightness  rounded hover:scale-110 duration-300  '/>
              <h1 className="text-center text-white font-semibold text-4xl m-2" >Still Confused?</h1>
              <p className="font-semibold text-white  m-2 text-md text-center">explore our skill consultancy services to get clear answer of which skill is best for you.</p>
              <div className='text-center mt-3 mb-3'>
       <button className="border border-2 border-white p-2 rounded-xl   text-white hover:text-black bg-[#a6a6a6] hover:bg-gray-400 px-8 text-lg  font-bold">Learn More</button>
       </div>
            </div>
          </div>
          <div>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[95%]">
            <div className="shadow-md shadow-gray-500  w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-2xl m-2 sm:m-2 md:m-5 lg:m-5" style={{position: 'relative'}}>
            <img src={Data} alt='this is img' className='w-full h-full brightness-50 rounded-2xl hover:scale-110 duration-300' />
              <p className='flex font-bold text-md text-center' style={{position: 'absolute', top: '8%', left: '20%', transform: 'translate(-50%, -50%)', color:'white'}}>
              <span className="m-auto"><FaStar className="ml-5 md:-ml-1 text-yellow-300"/></span>POPULAR</p>
              <p className='font-bold text-xl text-center' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>A.I.M.L.</p>
            </div>
            <div className="shadow-md shadow-gray-500  w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-2xl m-2 sm:m-2 md:m-5 lg:m-5 " style={{position: 'relative'}}>
            <img src={Video_Animation} alt='this is img' width='100%' className='w-full h-full brightness-50 rounded-2xl hover:scale-110 duration-300  '/>
              <p className='font-bold text-xl w-full text-center' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>Video Animation</p>
            </div>
          </div>
      
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-[95%]">
            <div className="shadow-md shadow-gray-500  w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-2xl m-2 sm:m-2 md:m-5 lg:m-5 col-span-2" style={{position: 'relative'}}>
            <img src={Graphics_Design} alt='this is img' width='100%' className='w-full h-full brightness-50 rounded-2xl hover:scale-110 duration-300  '/>
              <p className='font-bold text-xl w-full text-center' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>Graphics and Design</p>
            </div>
      
          </div>
          </div>
    </div>
    <div className='text-center mt-10'>
      <Link to="Signup"><button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl   px-20 text-lg  font-bold">Browse All</button></Link> 
       </div>
  </section>

{/* <!-- ....... why choose Grachiever .............--> */}

<section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-10" >
          <h1 className=" text-center text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2">Why Choose Grachiever?</h1>
          <div className="grid grid-flow-cols-1 md:grid-cols-4 lg:grid-cols-4  md:mt-12">
          <div className='justify-item-center hover:-translate-y-5 duration-500' >
          <div className='  -mb-20 h-auto md:h-72 w-[80%] rounded-xl p-2 m-5'>
          <img src={wcg1} className="rounded-xl p-2 w-[100%] h-auto md:h-72 m-auto" />
          </div>
          <div className='shadow-xl hover:shadow-gray-500 m-5 rounded-xl bg-[#f5f5f5] p-2 w-[80%] h-auto pb-10'>
          <h2 className="font-semibold text-2xl mt-20">Diverse Offerings</h2>
                  <p>Grachiever provides a variety of services, including online courses, freelancing opportunities, and expert consultancy, to help you develop the skills necessary for a successful career.</p>
          </div>
          </div>

          <div className='justify-item-center hover:-translate-y-5 duration-500' >
          <div className='  -mb-20 h-auto md:h-72 w-[80%] rounded-xl p-2 m-5'>
          <img src={wcg2} className="w-[60%] m-auto" />
          </div>
          <div className='shadow-xl hover:shadow-gray-500 m-5 rounded-xl bg-[#e0ebff] p-2 w-[80%] h-auto pb-10'>
          <h2 className="font-semibold text-2xl mt-20">Unique Tools & Features </h2>
                  <p>Grachiever's Skill Graph feature and other innovative tools provide a personalized learning and work experience, tailored to your unique needs and goals.</p>
          </div>
          </div>

          <div className='justify-item-center hover:-translate-y-5 duration-500 ' >
          <div className='  -mb-20 h-auto md:h-72 w-[80%] rounded-xl p-2 m-5'>
          <img src={wcg3} className="w-[70%] m-auto" />
          </div>
          <div className='shadow-xl hover:shadow-gray-500 m-5 rounded-xl bg-[#f5f5f5] p-2 w-[80%] h-auto pb-10'>
          <h2 className="font-semibold text-2xl mt-20">Supportive Community</h2>
                <p>Grachiever's supportive community fosters networking, collaboration, and mutual support among learners and professionals, enhancing learning and work experiences.</p>
          </div>
          </div>

          <div className='justify-item-center hover:-translate-y-5 duration-500' >
          <div className='  -mb-20 h-auto md:h-72 w-[80%] rounded-xl p-2 m-5'>
          <img src={wcg4} className="rounded-xl p-2 w-[80%] h-auto md:h-72 m-auto" />
          </div>
          <div className='shadow-xl hover:shadow-gray-500 m-5 rounded-xl bg-[#e0ebff] p-2 w-[80%] h-auto pb-10'>
          <h2 className="font-semibold text-2xl mt-20">Affordable And Flexible</h2>
                  <p>Grachiever's budget-friendly and adaptable pricing options provide access to excellent educational resources and opportunities for skill development.</p>
          </div>
          </div>
    </div>
      </section>

      {/* BOOST YOUR PRODUCTIVITY WITH GRACHIEVER`S TOOLS SERVICE */}

      <section className='pb-20 bg-[#1b1d38]'>
        <h1 className='text-center font-bold text-white md:text-3xl md:p-10 mb-10'><span class="text-[#4eb0e1]">BOOST</span> YOUR PRODUCTIVITY WITH GRACHIEVER`S TOOLS SERVICE</h1>
       <div className='p-16 flex justify-center gap-20'>
        <FlipCard  />
        <FlipCard  />
        <FlipCard  />
        </div>
      </section>


   {/* <!--Skill Consultancy--> */}
    <section className="p-0 sm:p-0 md:p-10 lg:p-10">
      <div className="m-2 h-auto p-2 mt-[]">
          {/* <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl mx-0 sm:mx-0 md:mx-20 font-bold my-10">Skill <span class="text-[#4eb0e1]">Consultancy</span></h1> */}

    {/* <!--Skill Consultancy left section--> */}

    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="mx-0 sm:mx-5 md:mx-20 lg:mx-20 mb-10">
              <h1 className="font-bold text-4xl">Find Your <span class="text-[#4eb0e1]">Dream Career</span> With Grachiever's Skill Consultancy</h1>
              <p className="text-lg mt-5">Our skilled consultancy service provides various offerings to guide you in selecting the most suitable skills. We help you identify in-demand skills, suggest the best courses to develop those skills, and advise you on future-ready skills that AI cannot replace."</p>

                  <li className="mx-5 mt-5"><strong>Personalized Guidance:</strong> Tailored advice for your unique path.</li>
                  <li className="mx-5"><strong>Your Skills:</strong> Stay ahead of the robots.</li>
                  <li className="mx-5"><strong>Expert Insights</strong>: Years of experience at your service.</li>
                  <li className="mx-5"><strong>Industry Trends:</strong> Know what's in demand.</li>
                  <li className="mx-5"><strong>Confidence-Boosting:</strong> Empowering you for success.</li>
                  <button className="bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg p-2  mt-5 ml-3 px-5">Register for Free</button>
          </div>

    {/* <!--Skill Consultancy Rigth section--> */}

    <div className="">
      <img src={sc1} width="60%" className="mx-auto" />
    </div>
    </div>
    </div>
    </section>

    {/* <!--Feature Ready Skills sections--> */}
    <section className="p-0 sm:p-0 md:p-10 lg:p-10 bg-[#1b1d38]">
    <div className="p-3 text-center m-2 h-auto">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold my-10  text-white">Get Personal Future Ready Skill Recommandations</h1>
        <h2 className="text-3xl text-gray-300">Enhance Your Skill With Grachiever</h2>
  
    <div className="text-center m-2 mt-5">
        <select className="mt-5 w-full md:w-64 lg:w-64  h-14 border rounded-xl text-xl p-2  md:m-2 font-semibold outline-none">
            <option>Category</option>
            <option>Data</option>
            <option>Digital Marketing</option>
            <option>A.I.M.L.</option>
            <option>Video Animation</option>
            <option>Graphics and Design</option>
        </select>
    
   
        <select className="mt-5 w-full md:w-60 lg:w-60 h-14 border rounded-xl text-xl p-2  md:m-2 font-semibold outline-none">
            <option>Demo Plane</option>
            <option>Basic Plane</option>
            <option>Advance Plan</option>
          </select>
          <button className="mt-5 w-full md:w-auto m-auto bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] text-xl rounded-full p-3 md:px-10">Get Started Now</button>
        </div>
    </div>
</section>


 {/* <!--Achievements Sections--> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10 " >
    <div className="mt-5">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center p-5 mb-10">Achievements</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 text-center">
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-44 w-44 lg:h-48 lg:w-48 mb-10 rounded-full">
              <FaGraduationCap className='text-5xl text-black-400 mt-10 mx-auto m-2 group-hover:text-blue-500'/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">350+</p>
              <p className='group-hover:text-green-500'>Student worldwide</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-44 w-44 lg:h-48 lg:w-48 mb-10 rounded-full">
              <FaList className='text-3xl text-black-400 mt-10 mx-auto m-2 group-hover:text-green-500'/>           
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">450+</p>
              <p className='group-hover:text-blue-500'>Total Course Views</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-44 w-44 lg:h-48 lg:w-48 mb-10 rounded-full">
              <FaStar className='text-3xl text-black-400 mt-10 mx-auto m-2 group-hover:text-yellow-500'/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">550+</p>
              <p className='group-hover:text-orange-500'>Course Reviews</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-44 w-44 lg:h-48 lg:w-48 mb-10 rounded-full">
              <FaUser className='text-3xl text-black-400 mt-10 mx-auto m-2 group-hover:text-orange-500'/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">650+</p>
              <p className='group-hover:text-yellow-500'>Student Community</p>
            </div>
        </div>
    </div>
</section>
 
   {/* <!-- Blog Section --> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-5" >
     <div className="m-10">
      <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold ">Blog</h1>
      <p className="mt-2 mb-2 text-2xl font-semibold">Most Recent</p>
      <hr />
        <div className="flex flex-wrap justify-between">
          {/* <button className="p-2 rounded-lg bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg float-right mx-10 mt-10 sm:mt-10 md:mt-10 lg:mt-0">Browse Blog</button> */}
        </div>
    </div>
     {/* <!--3 Card--> */}
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-2 h-auto  gap-10 sm:gap-10 md:gap-10 lg:gap-20 mx-5 lg:mx-10 md:mx-10 md:mt-10 lg:mt-10">
       {/* <!-- Card_1 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
           <div className=" h-52">
            <img src="https://www.classcentral.com/report/wp-content/uploads/2022/03/Best-Courses-Copywriting-Banner.png" width="100%" className="rounded-xl hover:scale-105 duration-300 h-52" />
           </div>
           <h2 className="text-xl font-bold mt-5">Best Copywriting Courses to Take in 2023</h2>
           <p className=" w-auto mb-6 space-x-8 p-2">Transform your writing skills into profit: discover the best copywriting courses to launch your lucrative career or side hustle..</p>
       </div>
       {/* <!-- Card_2 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
          <div className=" h-52">
          <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300 h-52 w-full" />
          </div>
          <h2 className="text-xl font-bold mt-5">Best pandas Courses to Take in 2023</h2>
          <p className=" w-auto mb-6 space-x-8 p-2">Unlock the power of data analysis with the top pandas courses. Pandas is a powerful, open-source Python library.</p>
       </div>
       {/* <!-- Card_3 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
          <div className=" h-52">
          <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/NumPy-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300 h-52 w-full" />
          </div>
          <h2 className="text-xl font-bold mt-5">Best NumPy Courses to Take in 2023</h2>
          <p className=" w-auto mb-6 space-x-8 p-2">Whether you’re a data scientist, machine learning engineer, or just someone who needs to crunch a bunch of numbers in a short amount of time, NumPy is definitely for you.</p>
        </div>
       </div>
      
</section>


{/* <!-- ....... popular and demand start  ...... --> */}
<section className='mt-10 mb-36'>
<div className='h-96'>
    <h1 className="text-center text-5xl">Popular <span className='text-[#00c5ff]'>In-Demand </span> Services</h1>
       <Z_index_card1 />
    </div>
</section>

{/* <!-- ....... popular and demand end ...... --> */}
    
      {/* <!--Finding Your Right Course--> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10 bg-[#e0ebff] mb-5">
      <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5">
        <div className="m-auto md:col-span-2">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold p-2">Finding Your Right Course</h1>
          <p className="p-2 mt-5 text-lg md:w-[75%] font-bold text-gray-600">From in-demand skills to future-ready courses, Grachiever makes it simple to discover and enroll in the courses you need to achieve your career goals.</p>
         </div>
        <div className=" m-auto mb-5">
            <button className="p-2 rounded-lg bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg mt-5">Start Learning For Free</button>
        </div>
      </div>
    </section>

        </>
    );
}

export default Home;