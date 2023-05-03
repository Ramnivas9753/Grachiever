
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import { useState } from "react";
import grachieverlogo from "../images/LOGOS/grachiever-02.png"

function Layout() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <>
      {/* <section className="">
          <div className="">
              <nav className="px-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700" >
              <div className="flex flex-wrap items-center justify-between mx-auto top-0 fixed bg-[#FAF9F6] z-50 w-full sm:w-full md:w-full lg:w-full">
                  <a href="index.html" className="flex items-center">
                      <img src="images/LOGOS/grachiever-02.png" className="h-12 mr-3 hidden lg:block" alt="Grachiever Logo" />
                      <img src="images/LOGOS/responsive_main_logo.jpg" className="h-12 mr-3 block lg:hidden " alt="Grachiever Logo" />
                  </a>
                  login sign-up button for responsive design ....
                  <div className="hidden max-md:block flex ">
                    <a href="sign_in.html"><button type="button" className="bg-[#00dbff] text-white px-3 py-1 rounded-full -ml-5" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Log-in</button></a> 
                    <a href="sign_up.html"> <button type="button" className="text-white bg-[#00dbff] px-3 py-1 rounded-full ml-3" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign-Up</button></a>
                   
                    <a href="sign_in.html"> <button type="button" className="px-3 py-1 text-lg font-medium text-gray-900 hover:bg-[#349fcf] border border-gray-200 rounded-l-full bg-gray-100 hover:text-white" >
                    onClick="document.getElementById('id01').style.display='block'"
                      Log-in</button> </a>
                      <a href="sign_up.html"><button type="button" className="px-3 py-1 text-lg font-medium text-gray-900 bg-[#349fcf] border border-gray-200 rounded-r-full hover:bg-gray-100 hover:text-black text-white -ml-2">
                      onClick="document.getElementById('id01').style.display='block'"
                      Sign-Up </button></a>
                  
                    </div>

                  <button data-collapse-toggle="N-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                  </button>
                  
                  <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#FAF9F6] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:-translate-x-10 pt-7 ">
                      <li>
                      < Link to="/" className="block py-2 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-lg" aria-current="page"> Home </Link>
                      </li>
                      <li>
                          <div className="dropdown relative inline-block hover:dropdown-menu:block">
                              <button className="flex text-lg hover:text-blue-700">Course <svg className="w-5 h-5 ml-1 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              </button>
                              <div className="dropdown-menu absolute hidden z-10 bg-[#d3d4d5]">
                                  <Link to="" className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700" >Courses</Link><hr />
                                 <Link to="" className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700">Marketing</Link><hr />
                                 <Link to="" className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700" >Animation</Link><hr />
                              </div>
                          </div>
                      </li>
                      <li>
                      <Link to="/blog" className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Blog</Link>
                     
                      </li>
                      <li>
                        <Link to="/contact" className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Contact</Link>
                        </li>
                      <li>
                          <Link to="/about"  className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">About</Link>
                      </li>
                      <li>
                          <div className="flex md:order-2 hidden md:block lg:block lg:pl-20 lg:ml-10 -mt-3">
                              
                                <Link to="/login">                                <button type="button" className="px-6 py-2 text-lg font-medium text-gray-900 hover:bg-[#349fcf] border border-gray-200 rounded-l-full bg-gray-100 hover:text-white">
                                      Log-in
                                    </button></Link>

                                 <Link to="/signup">
                                    <button type="button" className="px-6 py-2 text-lg font-medium text-gray-900 bg-[#349fcf] border border-gray-200 rounded-r-full hover:bg-gray-100 hover:text-black text-white -ml-2">
                                      Sign-Up
                                </button>
                                </Link>
                          </div>
                      </li>
                  </ul>
                
                  </div>
              </div>
              </nav>

          </div>
      </section> */}

    <section>  
        <nav className="w-full bg-[#FAF9F6]">
            <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/"><img src={grachieverlogo} className="h-12" alt="Grachiever Logo" /></Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden" }`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-medium">
                            <li className="hover:text-blue-500">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="">
                            <div className="flex ">
                                <div onMouseLeave={() => setOpen(false)} className="relative">
                                    <button
                                    onMouseOver={() => setOpen(true)}
                                    className="flex items-center"
                                    >
                                    <span className="mr-2">Courses</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>

                                    </button>
                                    <ul
                                    className={`absolute right-0 left-0 w-52 py-2 mt-2 rounded-lg shadow-xl bg-white ${
                                        open ? "block" : "hidden"
                                    }`}
                                    >
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                       <Link to="/">Python Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Java Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Angular Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Dotnet Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Frontend Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Backend Development Course</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Data Analyst</Link>
                                    </li><hr/>
                                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                        <Link to="/">Marketing..</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>

                            </li>
                            <li className="hover:text-blue-500">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className=" lg:pl-10">
                            <div className="flex">
                                <Link to="/login" className="px-4 py-2 text-center rounded-l-full shadow hover:text-blue-500">  Log-in</Link>
                                <Link to="/signup" className=" px-4 py-2 text-center text-gray-800 bg-[#349fcf] text-white rounded-r-full shadow ">Sign up</Link>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    </section>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;
