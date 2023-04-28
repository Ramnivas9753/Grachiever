function Navbar() {
    return (
        <>
        <section className="">
    <div className="">
        <nav className="px-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700" >
        <div className="flex flex-wrap items-center justify-between mx-auto top-0 fixed bg-[#FAF9F6] z-50 w-full sm:w-full md:w-full lg:w-full">
            <a href="index.html" className="flex items-center">
                <img src="images/LOGOS/grachiever-02.png" className="h-12 mr-3 hidden lg:block" alt="Grachiever Logo" />
                <img src="images/LOGOS/responsive_main_logo.jpg" className="h-12 mr-3 block lg:hidden " alt="Grachiever Logo" />
            </a>
            {/* login sign-up button for responsive design .... */}
            <div className="hidden max-md:block flex ">
               {/* <a href="sign_in.html"><button type="button" className="bg-[#00dbff] text-white px-3 py-1 rounded-full -ml-5" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Log-in</button></a> 
               <a href="sign_up.html"> <button type="button" className="text-white bg-[#00dbff] px-3 py-1 rounded-full ml-3" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign-Up</button></a>
               */}
               <a href="sign_in.html"> <button type="button" className="px-3 py-1 text-lg font-medium text-gray-900 hover:bg-[#349fcf] border border-gray-200 rounded-l-full bg-gray-100 hover:text-white" onClick="document.getElementById('id01').style.display='block'">
                Log-in</button> </a>
                <a href="sign_up.html"><button type="button" className="px-3 py-1 text-lg font-medium text-gray-900 bg-[#349fcf] border border-gray-200 rounded-r-full hover:bg-gray-100 hover:text-black text-white -ml-2" onClick="document.getElementById('id01').style.display='block'">
                Sign-Up </button></a>
            
              </div>

            <button data-collapse-toggle="N-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            
            <div className="hidden w-full md:block md:w-auto " id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#FAF9F6] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:-translate-x-10 pt-7 ">
                <li>
                <a href="index.html" className="block py-2 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-lg" aria-current="page">Home</a>
                </li>
                <li>
                    <div className="dropdown relative inline-block hover:dropdown-menu:block">
                        <button className="flex text-lg hover:text-blue-700">Course <svg className="w-5 h-5 ml-1 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div className="dropdown-menu absolute hidden z-10 bg-[#d3d4d5]">
                            <a className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700" href="#">Courses</a><hr />
                            <a className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700" href="#">Marketing</a><hr />
                            <a className="px-5 py-3 hover:bg-gray-200 block text-lg hover:text-blue-700" href="#">Animation</a><hr />
                        </div>
                    </div>
                </li>
                <li>
                <a href="Blog.html" className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Blog</a>
                </li>
                <li>
                  <a href="contact.html" className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">Contact</a>
                  </li>
                <li>
                    <a href="about.html" className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg">About</a>
                </li>
                <li>
                    <div className="flex md:order-2 hidden md:block lg:block lg:pl-20 lg:ml-10 -mt-3">
                      {/*   <a href="sign_in.html"><button type="button" className="hover:bg-[#00dbff] focus:ring-4 focus:outline-none hover:rounded-full hover:text-white text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-lg -mt-3" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Log-in</button></a>
                        
                        <a href="sign_up.html"><button type="button" className="bg-[#00dbff] focus:ring-4 focus:outline-none rounded-full text-white text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ml-3 text-lg -mt-3" onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Sign-Up</button></a> */}
                        
                          <a href="sign_in.html">
                           <button type="button" className="px-6 py-2 text-lg font-medium text-gray-900 hover:bg-[#349fcf] border border-gray-200 rounded-l-full bg-gray-100 hover:text-white">
                                Log-in
                              </button>
                            </a>
                          <a href="sign_up.html">
                              <button type="button" className="px-6 py-2 text-lg font-medium text-gray-900 bg-[#349fcf] border border-gray-200 rounded-r-full hover:bg-gray-100 hover:text-black text-white -ml-2">
                                Sign-Up
                          </button>
                          </a>
                    </div>
                </li>
            </ul>
           
            </div>
        </div>
        </nav>

    </div>
</section>
  </>
    );
  }
  
  export default Navbar;