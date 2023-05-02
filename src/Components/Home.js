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
import tc1 from '../images/Top_Categories/digital_marketing.jpg';
import tc2 from '../images/Top_Categories/data.jpg';
import tc3 from '../images/Top_Categories/graphics_design.jpg';
import tc4 from '../images/Top_Categories/data.jpg';
import tc5 from '../images/Top_Categories/still_confused.png';
import tc6 from '../images/Top_Categories/video_animation.jpg';
import tc7 from '../images/Top_Categories/video_animation.jpg';
import wcg1 from '../images/Why_Choose_Grachiever/1.png';
import wcg2 from '../images/Why_Choose_Grachiever/2.png';
import wcg3 from '../images/Why_Choose_Grachiever/3.png';
import wcg4 from '../images/Why_Choose_Grachiever/4.png';
import sc1 from '../images/Skill_Consultancy/1.png';
import slogo from '../images/Skill_Consultancy/1.png';
//  this link for react icon 
import { FaSearch } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// fa-graduation-cap
function Home() {
    return(
        <>
            
{/* <!-- ........................ home section start ..................................... --> */}
 <section className="px-5 sm:px-5 md:px-10 lg:px-10 pt-10">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div className="pl-5 md:pl-10 lg:pl-10">
      <span className="type text-[30px] mt-5 lg:text-[50px] font-bold text-[#349fcf]">Start Monetizing Off Your Skills With Passion </span>
      {/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script>
          var typed = new Typed('.type', {
              strings: [
                  'Start Monetizing',
                  'Off Your Skills ',
                  'With Passion',
              ],
              typeSpeed: 60,
              backSpeed: 60,
              loop: true,
          });
      </script> */}
      {/* <!-- <p className="font-bold text-3xl sm:text-3xl md:text-3xl lg:text-3xl">Start monetizing off your skills with passion</p> --> */}
      <p className="mt-5 text-2xl">The only easier, powerful and authoring platform designed for consistent learners to
        unlock the power of monetizing</p>
      {/* <!--Search--> */}
      <div className="border-b-[#349fcf] border-r-[#349fcf] border-2 flex items-center mt-8 w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] rounded-full outline-none">
        <input type="text" className="py-2.5 px-4 outline-none w-full " placeholder="Search Anything..." />
        <select className="mr-2 py-2 px-4 w-auto h-[44px]">
          <option>Courses</option>
          <option>freelancing</option>
          <option>tools</option>
        </select>
        <span className="w-24 h-12 rounded-full bg-[#349fcf] text-white"><FaSearch className='text-xl mx-auto mt-3'/></span>
      </div>
      <div className='flex flex-wrap mt-10'> 
        <div className='bg-[#ededed] p-1 h-10 m-1 flex rounded-full shadow-xl hover:scale-105 duration-300'>
          <img className='w-auto' src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Ficon-free-certificates.png?auto=format&h=50&ixlib=php-4.1.0&s=c25548f8b3bc8df8ae051dbe30a9a50a' />
          <p className='mx-3 self-center'>Free Certificates</p>
        </div>
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


      {/* <div className="flex flex-wrap">
        <button className="px-5 py-3 bg-[#f7c200] rounded-md text-lg text-white font-bold mt-10">Book Your Free Trial Now<i className="fa-sharp fa-solid fa-arrow-right ml-3 animate-bounce"></i></button>
        <button className="px-5 py-3 bg-[#349fcf] rounded-md text-lg text-white font-bold ml-5 mt-10">Enquire Now<i className="fa-solid fa-bell ml-3 animate-bounce"></i> </button>
      </div>

      <div className=" flex flex-wrap mt-7">
        <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" className="w-12 rounded-full bg-yellow-100 p-2 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">HTML</p> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" className="w-12 ml-5 bg-blue-100 rounded-full p-2 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">Python</p> 
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" className="w-12 bg-red-100 rounded-full p-2 ml-5 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">Java</p> 
      </div>
      <div className=" flex flex-wrap mt-7">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" className="w-12 rounded-full bg-orange-100 p-2 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">CSS</p> 
        <img src="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" className="w-12 rounded-full bg-gray-300 p-2 ml-5 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">Bootstrap</p> 
        <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" className="w-12 rounded-full bg-green-100 p-2 ml-5 hover:-translate-y-1 hover:scale-110 duration-300" /><p className="ml-2 mt-3">JavaScript</p> 
      </div> */}

      
      {/* <!-- <div className="flex flex-wrap mt-5"> 
        <div className="p-5 w-52">
          <p className="font-bold text-3xl text-[#f7c200]">95%</p>
          <p className="mt-3">placed within 8 months of graduation</p>
        </div>
        <div className="p-5 w-52">
          <p className="font-bold text-3xl text-[#349fcf]">11 LPA</p>
          <p className="mt-3">average dream job CTC</p>
        </div>
        <div className="p-5 w-52">
          <p className="font-bold text-3xl text-[#f7c200]">240+</p>
          <p className="mt-3">Our Hiring Partners</p>
        </div>
        <div className="p-5 w-52">
          <p className="font-bold text-3xl text-[#349fcf]">1:1</p>
          <p className="mt-3">Dedicated Mentorship</p>
        </div>
      </div> */}

    </div>
    <div className="mt-20 pt-5">
      <img src={homeimage01} className="w-[80%] m-auto" />            
    </div>
  </div>
      {/* <!-- <a href="sign_up.html" className="bg-red-500"><img src="images/LOGOS/Resiter_now_button.png" className="fixed top-96 right-0 w-40 animate-bounce z-50"></a> 
        <a href="#"><img src="images/LOGOS/whatsapp-icon-unscreen.gif" className="float-right fixed right-0 w-40 z-50"></a> */}

</section>
{/* <!-- ...................... home section end ................................... --> */}

    {/* <!--Trusted Section-->    */}
    
  <section className="p-0 sm:p-0 md:p-10 lg:p-10" > 
    <div className="p-3 mt-5">
        <h1 className=" text-center text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">Trusted By World Best</h1>

        <div className="owl-carousel owl-theme grid grid-cols-2 xs:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 m-5 md:m-5 lg:m-5 h-72 md:h-24 lg:h-24  text-center">
          <div className=" w-24  mx-auto"><h1 className="mt-8">
          <img src={slidelogo1} />
            </h1></div>
            <div className=" w-24  mx-auto"><h1 className="mt-8">
            <img src={slidelogo2} />

            </h1></div>
            <div className=" w-24  mx-auto"><h1 className="mt-8">
            <img src={slidelogo3} />
            </h1></div>
            <div className=" w-24  mx-auto"><h1 className="mt-8">
            <img src={slidelogo4} />
            </h1></div>
            <div className="w-24  mx-auto"><h1 className="mt-8">
            <img src={slidelogo5} />
            </h1></div>
            <div className="w-24 mx-auto"><h1 className="mt-8">
            <img src={slidelogo6} />
            </h1></div>
        </div>
        </div>
        
  </section>

    {/* <!--Skill Section--> */}

    <section className="p-0 sm:p-0 md:p-10 lg:p-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"  data-aos="zoom-in" data-aos-duration="2000">
        <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10">
            <h1 className=" mt-5 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">Track The Trending Skills Over Time</h1>
            <p className="mt-10  text-lg">Our Skill Graph feature helps you stay up-to-date with the latest skills in demand. our Skill Graph displays the trending skills over time.</p>
            <p  className="mt-5 text-lg">allowing you to identify which skills are gaining popularity and which are losing relevance. With this powerful tool, you can make informed decisions about the skills you want to learn or develop, ensuring you stay ahead of the curve in your chosen field.</p>
        </div>
    {/* <!--Graph Section--> */}
        <div className="">
          <img src={sgraph} className='mx-auto' />
        </div>
    </div>
    </section>

    {/* <!-- .-================================================ --> */}

    {/* <!-- ........... card slider for codepen --> */}
<section className=" mt-10 bg-gray-50 p-0 sm:p-0 md:p-10 lg:p-10"  data-aos="zoom-in" data-aos-duration="2000">
  <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center mx-3 p-5 sm:p-5  md:p-10 lg:p-10">What Are You Searching For ?</h1>
  <div className="flex float-right text-lg">
    <button className="p-3 sm:p-3 md:p-5 lg:p-5 text-sm sm:text-sm md:text-lg lg:text-lg px-3  mx-3 bg-blue-100 rounded-2xl hover:text-[#6c5fa1]">All</button>
    <button className="p-3 sm:p-3 md:p-5 lg:p-5 text-sm sm:text-sm md:text-lg lg:text-lg  ml-2 px-3 mx-3 hover:bg-blue-100 hover:rounded-2xl">Trending</button>
    <button className=" p-3 sm:p-3 md:p-5 lg:p-3 text-sm sm:text-sm md:text-lg lg:text-lg ml-2 px-3 mx-3 hover:bg-blue-100 hover:rounded-2xl hover:text-[#6c5fa1]">Popular</button>
  </div>
  
  <div className="container swiper">
    <div className="slide-container mt-10 mx-5 sm:mx-5 md:mx-5 lg:mx-10 ">
      <div className="card-wrapper swiper-wrapper">
        <div className="card swiper-slide ">
         
           {/* <!--Card Number - 1 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://5.imimg.com/data5/SELLER/Default/2022/6/SD/NP/XP/113623010/web-development-training-program-1--500x500.jpg" alt="" />
                <div className="p-5">
                        <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</p>
                    <p className="mb-3 font-normal inline-flex text-lg">
                        lession
                        days
                        leve
                    </p><br />
                    <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                    <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
            </div>
  
        </div>
        <div className="card swiper-slide">
          {/* <!--Card Number - 2 --> */}
          <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel084aJaTNo9hFm8eLDzUGUK5TfBA_hQwMJhQN7ZYbE3QgmO9PWFzYH3B3p80krV1MwE&usqp=CAU" alt="" />
            <div className="p-5">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Java Full Stack Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                    lession
                    days
                    level

                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
          </div>
            
        </div>
        <div className="card swiper-slide">
           {/* <!--Card Number - 3 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tMIqCoU9bwPKyj8O1y4soyvbIUh2k3qq_Q&usqp=CAU" alt="" />
            <div className="p-5">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Angular Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
           </div>
         
        </div>
        <div className="card swiper-slide">
           {/* <!--Card Number - 4 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uj_Aoh6g77m6XmA99aD6re4DkPXucU7BVOIQaf1O18m6vgpcQfbizGoH-yWQst5Vcbo&usqp=CAU" alt="" />
            <div className="p-5">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#0A0878]">Dotnet Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
            </div>
  
        </div>
        <div className="card swiper-slide bg-yellow-500">
           {/* <!--Card Number - 5 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarDlD09LTHrMQKStJZ22-qRhSOqCyvl-3PA&usqp=CAU" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#0A0878]">CLoud Computing</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
            </div>
          
        </div>
  
        <div className="card swiper-slide bg-green-500">
           {/* <!--Card Number - 6 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnKHrLgdd7nzLozT8lIgmgNYbO-8mKGvzuzwiKY56_2svqfvbYoTzNL_8aXus6jmlaS4&usqp=CAU" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Mern Stack Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
            </div>
         
        </div>
  
        <div className="card swiper-slide bg-orange-500">
           {/* <!--Card Number - 7 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvduvdn6-mzK0W5mzghulbKUvHZCoJM9CrWlijq5gs8Yoc6tHjmYY0oHtbq_hmMRFVh4s&usqp=CAU" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Mean Stack Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
           </div>
          
        </div>
  
        <div className="card swiper-slide bg-pink-500">
           {/* <!--Card Number - 8 --> */}
           <div className="w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px] hover:-translate-y-1 hover:scale-110 duration-500">
                <img className="mx-auto w-full h-52" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0pxILyMxy2nDMIOGfpRrAYHUkUj0F_nDKA&usqp=CAU" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Backend Development</h5>
                <p className="mb-3 font-normal inline-flex text-lg">
                    lession
                    days
                    level
                </p><br />
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
                <a href="#" className="inline-flex  px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg md:mt-5">Enroll Now</a>
                </div>
           </div>
          
        </div>
      </div>
    </div>
    <div className="swiper-button-next swiper-navBtn scale-75"></div>
    <div className="swiper-button-prev swiper-navBtn scale-75"></div>
    {/* <!-- <div className="swiper-pagination"></div> --> */}
  </div>
  <center><button className=" w-60 h-10 rounded-lg justify-self-center mt-10 text-lg mb-10 bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf]">Browse All Card</button></center> 
  
</section>
{/* <!-- ye vali javascript ko koi bhi yha se hataye nhi please  --> */}
{/* <script> 
  var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
</script> */}
{/* <!-- ............................ card carousal section end...............................   --> */}

{/* <!--Top Categories--> */}

<section className="m-5 p-0 sm:p-0 md:p-10 lg:p-10" >
    <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center m-10 ">Top Categories</h1>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className=" w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-lg m-2 sm:m-2 md:m-5 lg:m-5">
            {/* <img src={tc1} alt='this is img' width='100%'  className=''/> */}
            <p className=""  style={{ backgroundImage: `url("https://picsum.photos/id/6/367/267")`  }}>okkk </p>
            <p>Digital Marketing</p>
            </div>
      
            <div className="w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-lg m-2 sm:m-2 md:m-5 lg:m-5 ">
            <img src={tc2} alt='this is img' width='100%' className=''/>
              <p >Data</p>
            </div>
          </div>
      
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-lg m-2 sm:m-2 md:m-5 lg:m-5">
            <img src={tc3} alt='this is img' width='100%' className=''/>
              <p >Graphics and Design</p>
            </div>
      
            <div className="w-auto sm:w-auto md:w-auto lg:w-auto h-52 rounded-lg m-2 sm:m-2 md:m-5 lg:m-5 ">
            <img src={tc4} alt='this is img' width='100%' className=''/>
              <p>Technology</p>
            </div>
          </div>
          </div>
       

        {/* Right Side Section--> */}
          <div className="md:m-5 lg:m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="rounded-lg h-96 sm:h-96 md:h-full lg:h-full w-full')] " >
            <img src={tc5} alt='this is img' width='100%' className=''/>
              <p >Still Confused?</p>
              <p >explore our skill consultancy services to get clear answer of which skill is best for you.</p>
            </div>
            <div className="">
              <div className="w-full sm:w-full md:w-full lg:w-full h-52 rounded-lg">
              <img src={tc6} alt='this is img' width='100%' className=''/>
                <p>Business</p>
              </div>
              <div className="w-full sm:w-full md:w-full lg:w-full h-52 rounded-lg mt-10">
              <img src={tc7} alt='this is img' width='100%' className=''/>
                <p>Video and Animation</p>
              </div>
            </div>
          </div>
    </div>
  </section>

{/* <!-- ....... why choose Grachiever .............--> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10"  data-aos="zoom-in" data-aos-duration="2000">
          <h1 className=" text-center text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold my-10">Why Choose Grachiever</h1>
          <div className="grid grid-flow-cols-1 md:grid-cols-4 lg:grid-cols-4 md:m-5 lg:m-5">
              <div className="m-3 border p-5 shadow-lg hover:shadow-gray-500 rounded-lg hover:-translate-y-5 duration-500">
              <img src={wcg1} className="w-[50%] m-auto mt-14 mb-32" />
                  <p className="font-semibold text-2xl">Diverse Offerings</p>
                  <p>Grachiever provides a variety of services, including online courses, freelancing opportunities, and expert consultancy, to help you develop the skills necessary for a successful career.</p>
              </div>
              <div className="m-3 border p-5 shadow-lg hover:shadow-gray-500 rounded-lg hover:-translate-y-5 duration-500">
              <img src={wcg2} className="w-[50%]  m-auto mt-10 mb-8" />
                  <p className="font-semibold text-2xl">Unique Tools & Features </p>
                  <p>Grachiever's Skill Graph feature and other innovative tools provide a personalized learning and work experience, tailored to your unique needs and goals.</p>
              </div>
              <div className="m-3 border p-5 shadow-lg hover:shadow-gray-500 rounded-lg hover:-translate-y-5 duration-500">
              <img src={wcg3} className="w-[50%] m-auto mt-16 mb-12" />
                  <p className="font-semibold text-2xl">Supportive Community</p>
                  <p>Grachiever's supportive community fosters networking, collaboration, and mutual support among learners and professionals, enhancing learning and work experiences.</p>
              </div>
              <div className="m-3 border p-5 shadow-lg hover:shadow-gray-500 rounded-lg hover:-translate-y-5 duration-500">
              <img src={wcg4} className="w-[50%] m-auto mt-16 mb-24" />
                  <p className="font-semibold text-2xl">Affordable And Flexible</p>
                  <p>Grachiever's budget-friendly and adaptable pricing options provide access to excellent educational resources and opportunities for skill development.</p>
              </div>
          </div>
      </section>

{/* <!-- ............... PHARA Section (3 card z-index )............ --> */}

{/* <!-- .................. z-index section 1 start............ --> */}
{/* <section className="p-0 sm:p-0 md:p-10 lg:p-10" data-aos="zoom-in" data-aos-duration="2000">
  <div className="relative mt-[100px] flex mx-5 md:mx-10 lg:mx-10">
    <div className="stacked w-[40%]">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXoOzCO6xDenUzyta0if2353uScOROh7FJUj1AwdEVkdAfB0C0pAZUJVEZNg3qdIQArg&usqp=CAU" className=" rounded-2xl h-52 sm:h-52 md:h-72 sm:h-72 w-full" />
        <div >
          <p className="absolute top-0 left-0 text-white lg:text-lg font-bold rounded-2xl lg:p-10 h-52 sm:h-52 md:h-72 lg:h-72 w-full" >welcome to Our Website . You Can Get Job From Here....</p>
          <button className="absolute top-52 left-5 text-white lg:text-lg font-bold bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-3 rounded-md">Learn More <i className="fa-solid fa-arrow-right ml-3 animate-bounce"></i></button>
        </div>
    </div>
    <div className="stacked top-0 left-[30%] w-[40%]">
      <img src="https://st.depositphotos.com/1658644/4186/v/950/depositphotos_41863297-stock-illustration-female-software-engineer.jpg" className=" rounded-2xl h-52 sm:h-52 md:h-72 sm:h-72 w-full" />
        <div >
          <p className="absolute top-0 left-0 text-white lg:text-lg font-bold rounded-2xl lg:p-10 w-full h-52 sm:h-52 md:h-72 sm:h-72" >You Can Leran Here Web Development...</p>
          <button className="absolute top-52 left-5 text-white lg:text-lg font-bold bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-3 rounded-md">Learn More <i className="fa-solid fa-arrow-right ml-3 animate-bounce"></i></button>
        </div>
    </div>
    <div className="stacked top-0 left-[60%] w-[40%]">
      <img src="https://cdn.computercareers.org/wp-content/uploads/computers-and-technology.jpg" className=" rounded-2xl w-full h-52 sm:h-52 md:h-72 sm:h-72" />
        <div >
          <p className="absolute top-0 left-0 text-white lg:text-lg font-bold rounded-2xl lg:p-10 w-full h-52 sm:h-52 md:h-72 sm:h-72" >we Are Providing Course And Releted Job here....</p>
          <button className="absolute top-52 left-5 text-white lg:text-lg font-bold bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-3 rounded-md">Learn More <i className="fa-solid fa-arrow-right ml-3 animate-bounce"></i></button>
        </div>
    </div>
   
  </div>
  </section> */}
  
  {/* <script>
    document.querySelectorAll('.stacked').forEach(el => {
    el.addEventListener('click', () => {
      // el.style.zIndex++
      el.classNameList.add("border-2")
    })
  })
  </script> */}
  
  {/* <!-- w-24 sm:w-28 md:w-52 lg:w-96 --> */}
  {/* <!-- .................. z-index section 1 end............ --> */}
  
   {/* <!-- ........................ PHARA section end ................... --> */}

    {/* <!--Skill Consultancy--> */}
    <section className="p-0 sm:p-0 md:p-10 lg:p-10" data-aos="zoom-in" data-aos-duration="2000">
      <div className="m-2 h-auto p-2 mt-[]">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl mx-0 sm:mx-0 md:mx-20 font-bold my-10">Skill <span class="text-[#4eb0e1]">Consultancy</span></h1>

    {/* <!--Skill Consultancy left section--> */}

    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="mx-0 sm:mx-5 md:mx-20 lg:mx-20 mb-10">
              <h1 className="font-bold text-2xl">Find Your Dream Career With Grachiever's Skill Consultancy</h1>
              <p className="text-lg mt-5">Our skilled consultancy service provides various offerings to guide you in selecting the most suitable skills. We help you identify in-demand skills, suggest the best courses to develop those skills, and advise you on future-ready skills that AI cannot replace."</p>

                  <li className="mx-5 mt-5"><strong>Personalized Guidance:</strong> Tailored advice for your unique path.</li>
                  <li className="mx-5"><strong>Your Skills:</strong> Stay ahead of the robots.</li>
                  <li className="mx-5"><strong>Expert Insights</strong>: Years of experience at your service.</li>
                  <li className="mx-5"><strong>Industry Trends:</strong> Know what's in demand.</li>
                  <li className="mx-5"><strong>Confidence-Boosting:</strong> Empowering you for success.</li>
                  <button className="bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded p-2  mt-5 ml-3 px-5">Learn more</button>
          </div>

    {/* <!--Skill Consultancy Rigth section--> */}

    <div className="">
      <img src={sc1} width="60%" className="mx-auto" />
    </div>
    </div>
    </div>
    </section>

    {/* <!--Feature Ready Skills sections--> */}
    <section className="p-0 sm:p-0 md:p-10 lg:p-10" data-aos="zoom-in" data-aos-duration="2000">
    <div className="p-3 text-center m-2 h-auto">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold my-10 ">Get Persional Feature Ready Skill Recommented</h1>
        <h2 className="text-lg">Enhance Your Skill With Grachiever</h2>
  
    <div className="text-center m-10">
    
        <select className=" w-32 h-14 border rounded p-2 m-2 font-semibold">
            <option>Category</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
    
   
        <select className=" w-32 h-14 border rounded p-2 m-2 font-semibold">
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <button className="bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-full p-3 px-5">Get Started Now</button>
        </div>
    </div>
</section>

 {/* <!--Achivments Sections--> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10"  data-aos="zoom-in" data-aos-duration="2000">
    <div className=" m-2">
            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center p-5">Achivments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 text-center ">
            <div className="border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] h-52 m-5 rounded-lg">
            <FaGraduationCap className='text-3xl text-black-400 mt-10 mx-auto m-2'/>
              <p className="text-2xl font-bold">350+</p>
              <p>Student worldwide</p>
            </div>
            <div className="border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] h-52 m-5 rounded-lg">
              <FaList className='text-3xl text-black-400 mt-10 mx-auto m-2'/>           
              <p className="text-2xl font-bold">450+</p>
              <p>Total Course Views</p>
            </div>
            <div className="border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] h-52 m-5 rounded-lg">
            <FaStar className='text-3xl text-black-400 mt-10 mx-auto m-2'/>
              <p className="text-2xl font-bold">550+</p>
              <p>Five-Star Course Reviews</p>
            </div>
            <div className="border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] h-52 m-5 rounded-lg">
              <FaUser className='text-3xl text-black-400 mt-10 mx-auto m-2'/>
              <p className="text-2xl font-bold">650+</p>
              <p>Student Community</p>
            </div>
        </div>
        </div>
</section>
 
   {/* <!-- Blog Section --> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10"  data-aos="zoom-in" data-aos-duration="2000">
     <div className=" ">
      <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold pl-10">Blog</h1>
        <div className="flex flex-wrap justify-between">
          <h1 className="mt-2 text-lg mx-10 p-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <button className="p-2 rounded-lg bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg float-right mx-10 mt-10 sm:mt-10 md:mt-10 lg:mt-0">Browse Blog</button>
        </div>
    </div>
     {/* <!--3 Card--> */}
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-2 h-auto  gap-10 sm:gap-10 md:gap-10 lg:gap-20 mx-5 lg:mx-10 md:mx-10 md:mt-10 lg:mt-10">
       {/* <!-- Card_1 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
           <div className=" h-52">
            <img src="https://www.classcentral.com/report/wp-content/uploads/2022/03/Best-Courses-Copywriting-Banner.png" width="100%" className="rounded-xl hover:scale-105 duration-300 h-52" />
           </div>
           <h1 className="text-xl font-bold mt-5">Best Copywriting Courses to Take in 2023</h1>
           <p className=" w-auto mb-6 space-x-8 p-2">Transform your writing skills into profit: discover the best copywriting courses to launch your lucrative career or side hustle..</p>
       </div>
       {/* <!-- Card_2 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
          <div className=" h-52">
          <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300 h-52 w-full" />
          </div>
          <h1 className="text-xl font-bold mt-5">Best pandas Courses to Take in 2023</h1>
          <p className=" w-auto mb-6 space-x-8 p-2">Unlock the power of data analysis with the top pandas courses. Pandas is a powerful, open-source Python library.</p>
       </div>
       {/* <!-- Card_3 --> */}
       <div className="shadow-lg hover:shadow-gray-500 w-auto overflow-hidden p-5 rounded-2xl">
          <div className=" h-52">
          <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/NumPy-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300 h-52 w-full" />
          </div>
          <h1 className="text-xl font-bold mt-5">Best NumPy Courses to Take in 2023</h1>
          <p className=" w-auto mb-6 space-x-8 p-2">Whether you’re a data scientist, machine learning engineer, or just someone who needs to crunch a bunch of numbers in a short amount of time, NumPy is definitely for you.</p>
        </div>
       </div>
   {/* </div> */}
</section>


{/* <!-- ....... popular and demand start  ...... --> */}
{/* 
<section className="mt-0 sm:mt-0 md:mt-20 lg:mt-20 scale-50 sm:scale-100 md:scale-100 lg:scale-100 w-auto p-0 sm:p-0 md:p-10 lg:p-10">
  <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center m-5 p-5 mt-10">Popular In Demand Services</h1>
  <div className="container1 w-auto">
    <div className="icon-image">
          <div className="icon">
            <img src="images/z_index_images/img1.jpg" alt="" />
          </div>
        <div className="hover-image one">
          <div className="img">
            <img src="images/z_index_images/img2.jpg" alt="" />
          </div>
        <div className="content">
          <div className="details">
            <div className="name">Lilly Carls</div>
            <div className="job">Blogger || Designer </div>
          </div>
        </div>
        </div>
    </div>
    <div className="icon-image">
          <div className="icon">
            <img src="images/z_index_images/img3.jpg" alt="" />
          </div>
        <div className="hover-image one">
          <div className="img">
            <img src="images/z_index_images/img4.jpg" alt="" />
          </div>
        <div className="content">
          <div className="details">
            <div className="name">Stephen Bald</div>
            <div className="job"> Designer || Developer</div>
          </div>
        </div>
        </div>
    </div>
    <div className="icon-image">
          <div className="icon">
            <img src="images/z_index_images/img5.jpg" alt="" />
          </div>
        <div className="hover-image one">
          <div className="img">
            <img src="images/z_index_images/img6.jpeg" alt="" />
          </div>
        <div className="content">
          <div className="details">
            <div className="name">Mike Tyson</div>
            <div className="job">Photographer || Youtuber</div>

          </div>
        </div>
        </div>
    </div>
    <div className="icon-image">
          <div className="icon">
            <img src="images/z_index_images/img1.jpg" alt="" />
          </div>
        <div className="hover-image one">
          <div className="img">
            <img src="images/z_index_images/img2.jpg" alt="" />
          </div>
        <div className="content">
          <div className="details">
            <div className="name">Emma Oliva</div>
            <div className="job">Developer || Designer</div>
          </div>
        </div>
        </div>
    </div>
    <div className="icon-image last">
          <div className="icon">
            <img src="images/z_index_images/img3.jpg" alt="" />
          </div>
        <div className="hover-image one">
          <div className="img">
            <img src="images/z_index_images/img1.jpg" alt="" />
          </div>
        <div className="content">
          <div className="details">
            <div className="name">David Marloo</div>
            <div className="job">Blogger || Youtuber</div>
          </div>
        </div>
        </div>
    </div>
  </div>

</section> */}
{/* <!-- ....... popular and demand end ...... --> */}
    
      {/* <!--Finding Your Right Course--> */}
<section className="p-0 sm:p-0 md:p-10 lg:p-10">
      <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-20">
        <div className="m-auto md:col-span-2">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold p-2">Finding Your Right Course</h1>
          <h1 className="p-2 mt-5 text-lg">From in-demand skills to future-ready courses, Grachiever makes it simple to discover and enroll in the courses you need to achieve your career goals.</h1>
         </div>
        <div className=" m-auto  ">
            <button className="p-2 rounded-lg bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg mt-5">Start Learning For Free</button>
        </div>
      </div>
    </section>

        </>
    );
}

export default Home;