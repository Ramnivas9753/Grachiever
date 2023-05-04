import { FaBook, FaBookDead, FaCalendarMinus, FaCircle, FaDollarSign, FaFileInvoiceDollar, FaFunnelDollar, FaHeadSideCoughSlash, FaSearchDollar, FaStar, FaStopwatch, FaTimes, FaTimesCircle, FaUserTimes } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const settings = {
    infinite: true,
    autoplay:true,
    // autoplayTimeout:1000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <section className="bg-[#1b1a3a] p-10 ">
    <h1 className="text-center font-bold text-3xl text-white">What Are You Seaching For?</h1>
<Slider {...settings} className="m-10 ">

    {/* Card 1 */}
    <div className=" p-10 bg-white  rounded-lg ">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3  ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

    {/* Card 2 */}

    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

    {/* Card 3 */}

    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

    {/* Card 4 */}

    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

    {/* Card 5 */}
    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

    {/* Card 6 */}

    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>


    {/* Card 6 */}

    <div className=" p-10 bg-white  rounded-lg">
      <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" alt="image1" className="mx-auto w-full h-48 object-cover rounded-lg shadow-lg" />
      <div className="grid grid-cols-2 gap-20  mt-5">
      <div className="flex items-center  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className="flex items-center mx-3 ">
      <FaDollarSign className="" /> <h1 className="font-bold">Paid Courses</h1>
      </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pyhton Full Stack Development</h1>
      <div className="grid grid-cols-2 gap-10 mt-5">
      <div className="flex items-center">
      <FaBook className="m-2"/> <h1 className="font-bold">Grachiever</h1>
      </div>
      <div className="flex items-center ">
      <FaCalendarMinus className="m-2"/> <h1 className="font-semibold">Courses Timing</h1>
      </div>
      </div>
    <div className="grid grid-cols-2 mt-5 gap-4 ">
      <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Enroll Now</a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-center bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded-lg">Compaire</a>
    </div>
    </div>

  </Slider>
    </section>
  </>
  );
}

export default Cards;

