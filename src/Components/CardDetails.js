import React, { useState } from 'react';
import google from '../images/Flipcard/Google.png';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import { BiBookAdd } from "react-icons/bi";
import img from "../images/Flipcard/video.png";
import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import FlipCard from './FlipCard';



const CardDetails = () => {
    const [icon, setIcon] = useState("check");
    const changeIcon = (state) => {
        if (state === "check") {
            return "unCheck";
        }
        return "check";
    };
    return (

        <section className='bg-blue-100'>
            <div className="flex md:flex-row p-20 flex-col">
                {/* left box */}
                <div className='flex flex-col w-full'>
                <div className='bg-white w-full rounded-lg m-8 max-w-[410px] max-h-[660px] p-5'>
                    <img src={img} alt="" />
                    <div className="flex justify-center flex-col mt-2">
                        <Link className="flex w-full" to='/CardDetails'>
                            <button type="button" class="flex justify-center gap-2 ml-2 w-full text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to class <FiExternalLink /></button></Link>

                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Independent</p> <BsFillQuestionCircleFill className='text-black mt-1.5' />
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Free Certificate</p>
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>English</p>
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>On-Demand</p>
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Beginner</p>
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Share this course</p>
                        </div>
                        <hr />
                        <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Certificate Available</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full rounded-lg m-8 max-w-[410px] overflow-y-scroll overflow-visible gap-y-3 flex flex-col items-center p-1'>
                <h1 className='text-black text-xl m-1 font-bold '>Related course</h1>
                <FlipCard />
                <FlipCard/>
                </div>
                </div>

                {/* right box */}
                <div className='flex flex-col'>
                    <div className='bg-white w-full rounded-lg m-8 p-10'>
                        <p className='text-gray-500 text-sm '>Business / Marketing / Digital Marketing / Google Analytics</p>
                        <img className='h-8 mt-2' src={google} alt="" />
                        <h1 className='text-black font-bold font-sans text-4xl'>Google Analytics for Beginners  </h1>
                        <h3 className=' text-black mt-2 flex flex-row items-baseline gap-2'>Google via Independent Help <BsFillQuestionCircleFill className='text-black' /> </h3>
                        <div className='flex flex-row  gap-2' > <div className=" text-4xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-black text-sm mt-3'>12k reviews</p></div>
                        {/* features */}
                        <div className='flex flex-row items-center mt-2 gap-x-2'>
                            <button className=" flex flex-row text-black text-2xl mb-2" onClick={() => setIcon((old) => changeIcon(old))}>{icon === "check" ? <BsBookmark /> : <BsBookmarkCheckFill />} <p className='text-black text-sm mt-1'>7.2k</p> </button>

                            <button type="button" class=" flex  flex-row gap-x-1 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-500"><BiBookAdd className='text-xl' />Add to list</button>

                            <button type="button" className=" flex  flex-row gap-x-1 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-500"> <CiCircleChevRight className='text-xl' />Mark complete</button>

                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Write review</button>
                        </div>
                    </div>

                    <div className='bg-white w-full rounded-lg mt-1 m-8 p-10'>
                        <h1 className='text-black text-2xl m-1 font-bold'>Overview</h1>
                        <p className='mt-2 font-sans'>Google Analytics for Beginners shows new users how to create an account, implement tracking code, and set up data filters. You'll learn how to navigate the Google Analytics interface and reports, and set up dashboards and shortcuts. The course will also demonstrate how to analyze basic Audience, Acquisition, and Behavior reports, and set up goals and campaign tracking. <br />
                            This course covers Google Analytics primarily for measuring website traffic. To learn about new capabilities that bring app and web analytics together, visit Analytics Help.</p>
                        <h1 className='text-black text-2xl mt-5 font-bold'>Syllabus</h1>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 1: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                            <h1 className='text-black text-base font-bold mt-3'>Unit 2: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                            <h1 className='text-black text-base font-bold mt-3'>Unit 3: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                            <h1 className='text-black text-base font-bold mt-3'>Unit 4: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                            <h1 className='text-black text-base font-bold mt-3'>Unit 5: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                            
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardDetails;
