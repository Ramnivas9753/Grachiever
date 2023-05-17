import image1 from "../images/About/about.png";
import education from "../images/About/Rectangle.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import PremierSection from "./Premier_Education";

function About() {
  return (
    <section className="md:p-10 lg:p-10 mt-20">

      <h1 className="text-2xl md:text-3xl font-bold text-center p-3 mt-2">
        Empowering Your Career Journey: <br />
        Trust Grachiever for a Brighter <span class="text-[#4eb0e1]">Future</span>
      </h1>
      <p className="text-l text-center mt-5 m-auto p-2">
        Trust Grachiever to empower your career journey towards a brighter future. Gain skills, access freelance work, receive
        <br /> personalized guidance, and join a supportive community.
      </p>


      <section>
      <div className=" grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-auto md:h-full grid grid-rows-3 grid-flow-col gap-7 mt-10 md:ml-10">
        <div className=" h-auto row-span-3 ... z-20">
          <img src={image1} alt="" />
        </div>
        <div className=" md:h-full  md:mx-10 col-span-2 ... md:p-5 p-1"> 
        <p className="font-bold mt-5"> Welcome to Grachiever Enhance your skills with best services</p>

          <p className="mt-5"> At Grachiever, we're committed to providing our learners with a range of services and benefits that go beyond just offering courses. Our personalized recommendations help learners find the courses that best match their interests and goals, while our course ratings and reviews allow learners to make informed decisions about their learning journeys.
            </p>
            <p className="mt-10">
          We also offer the ability to track progress and earn certifications, providing learners with tangible evidence of their newly acquired skills. And with our exceptional customer service and support, learners can rest assured that they'll have the assistance they need every step of the way. Join our community of learners today and experience the Grachiever difference.
          </p>
          </div>
        <div className="bg-[#1b1d38] md:-ml-[55%] h-auto md:w-auto md:h-96 row-span-2 md:col-span-2 ... rounded-br-3xl rounded-tl-3xl ">
        <h1 className="text-white  md:text-3xl font-bold  p-3 mt-2 md:w-[50%] md:ml-[40%]">
        Grachiever: Empowering Achievement<br /> through <span class="text-[#4eb0e1]">Job-Ready</span> Digital Skills 
      </h1>
      <p className=" text-white font-bold  p-3 md:w-[50%] mt-5 md:ml-[40%]">
      At Grachiever, we offer a globally scalable solution to address the widespread digital talent shortages impacting growth, productivity, and innovation. Through collaboration with enterprises and highly motivated individuals, we design customized talent transformation journeys using our advanced Digital Competency Platform.
      </p>
      <p className="text-white font-semibold md:w-auto  p-5 md:ml-0  md:p-5  md:text-center">
      Our exclusive content is developed in partnership with industry leaders, ensuring its relevance and quality. Each Grachiever program is meticulously crafted to eliminate the guesswork in selecting the right course, focusing on practical projects that cultivate critical thinking and workplace skills. Our expert mentors provide personalized support to unblock learning barriers and verify mastery of competencies.
      </p>
        </div>
      </div>

      </section>

      <h1 className="text-3xl font-bold text-center p-3 mt-5">
      Unlock Your Potential with Grachiever:<br /> 
      Comprehensive Services for 
     <span class="text-[#4eb0e1]"> Career Advancement</span>
      </h1>
      <div className="flex flex-col gap-8 mb-5 p-5">
      <div className="mr-20 text-xs md:text-lg  bg-[#1b1d38] rounded-tl-3xl rounded-br-3xl p-4 text-white">At Grachiever, we offer a comprehensive suite of services designed to empower you on your career journey. Our trusted platform provides a wide range of opportunities and resources to help you unlock your full potential and achieve professional success.</div>
      <div className=" text-xs md:text-lg flex justify-end ml-20 bg-[#1b1d38] rounded-tr-3xl rounded-bl-3xl p-4 text-white">
        From our extensive collection of online courses sourced from top institutions, to our curated freelance work opportunities and skilled consultancy services, we have everything you need to build the skills necessary for a thriving career.</div>
      <div className=" text-xs md:text-lg mr-20 bg-[#1b1d38] rounded-tl-3xl rounded-br-3xl p-4 text-white">With our unique Skill Graph feature, personalized recommendations, and cutting-edge tools, we provide a highly tailored learning and work experience that ensures you stay ahead of the curve. Our supportive community of like-minded learners and professionals is always ready to network, collaborate, and offer mutual support, making your journey even more enjoyable and fulfilling.</div>
      </div>

      <p className="text-xl text-center mt-5 m-auto p-2">
      Join Grachiever today and embark on a transformative career journey that will elevate your skills, broaden your<br /> opportunities, and unlock a world of possibilities.
      </p>

      <section className="p-0 sm:p-0 md:p-10 lg:p-10 " >
    <div className="mt-5">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center p-5 mb-10">Achievements</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 text-center ">
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-48 w-48 mb-10 rounded-full">
              <FaGraduationCap className='text-3xl group-hover:text-red-500 text-black-400 mt-10 mx-auto m-2 '/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">350+</p>
              <p>Student worldwide</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-48 w-48 mb-10 rounded-full">
              <FaList className='text-3xl  group-hover:text-green-500 text-black-400 mt-10 mx-auto m-2 '/>           
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">450+</p>
              <p>Total Course Views</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-48 w-48 mb-10 rounded-full">
              <FaStar className='text-3xl  group-hover:text-yellow-500 text-black-400 mt-10 mx-auto m-2 '/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">550+</p>
              <p>Course Reviews</p>
            </div>
            <div className="m-auto group border-2 border-blue-100 bg-blue-100 hover:bg-white hover:border-[#349fcf] hover:scale-110 duration-500 h-48 w-48 mb-10 rounded-full">
              <FaUser className='text-3xl  group-hover:text-blue-900 text-black-400 mt-10 mx-auto m-2 '/>
              <p className="text-2xl font-bold group-hover:text-[#349fcf]">650+</p>
              <p>Student Community</p>
            </div>
        </div>
    </div>
</section>

{/* Premier Education Providers */}

 <PremierSection/>

<section>
  <div className="bg-[#1b1d38] p-5 text-center sm:text-2xl md:text-3xl lg:text-5xl text-white rounded-3xl m-1">
    <h1>Accelerate Your Skills Growth with <br/><span class="text-[#4eb0e1]">Grachiever's Services</span></h1>
  </div>
</section>

{/* Education section */}
<section>
  <div className="relative mt-10 p-5">
<div className="flex justify-center ">
  <img src={education} alt="" />
</div>
<div className="bg-[#00C5FF] absolute top-5 left-40 md:left-60 sm:text-2xl md:text-3xl text-xs rounded-tl-3xl rounded-br-3xl p-3 font-bold text-center  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)] w-max ">
    <h2>Online Courses</h2>
</div>
<br></br>
<div className="bg-[#F6D93D] absolute top-5 md:top-32 md:right-20 sm:text-2xl md:text-3xl text-xs rounded-tl-3xl rounded-br-3xl p-3 font-bold text-center  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)]  w-max">
    <h1>Skill Graph Feature</h1>
</div>
<div className="bg-[#00C5FF] absolute right-20 bottom-40 sm:text-2xl md:text-3xl text-xs rounded-tr-3xl rounded-bl-3xl p-3 font-bold text-center  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)]  w-max">
    <h1>Skilled Consultancy Services</h1>
</div>
<div className="bg-[#F6D93D] absolute bottom-20 md:left-20 sm:text-2xl md:text-3xl text-xs rounded-tr-3xl rounded-bl-3xl p-3 font-bold text-center  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)]  w-max">
    <h1>Tools & Resources</h1>
</div>
<div className="bg-[#F6D93D] absolute bottom-60 md:bottom-60 left-30  sm:text-2xl md:text-3xl text-xs rounded-tr-3xl rounded-bl-3xl p-3 font-bold text-center  shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)]  w-max">
    <h1>Freelance Work Opportunities</h1>
</div>
  </div>
</section>


<section>
  <div className=" bg-[#1b1d38] p-10 md:p-40 text-center sm:text-2xl md:text-3xl lg:text-5xl  text-white rounded-3xl m-2">
    {/* <div className="bg-[#E0EBFF] absolute right-7 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#E0EBFF]  absolute bottom-10 left-70 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#E0EBFF]  absolute top-4 right-80 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#ffc9ae] absolute bottom-50 left-30 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#ffc9ae] absolute top-50 left-70 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#ffc9ae] absolute top-1 left-10 w-20 h-20 rounded-full"> &nbsp;</div>
    <div className="bg-[#ffc9ae] absolute bottom-10 right-10 w-20 h-20 rounded-full"> &nbsp;</div> */}
    <h1 className="">Join Grachiever in revolutionizing talent transformation and redefining your career growth and success.</h1>
  <button className="bg-[#349fcf] text-md md:text-xl hover:bg-white text-white hover:text-black border-2 font-bold border-[#349fcf] rounded-2xl px-5 py-2 text-center mt-10">Join For Free {">"} </button>
  </div>
</section>
 

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-1 sm:p-1 md:p-5 lg:p-5 mt-5">
      <div className="md:m-5 lg:m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="rounded-lg h-auto sm:h-auto  md:h-auto lg:h-full w-full">
          <img src="https://img.freepik.com/premium-photo/technology-social-networking-concept-smiling-student-girl-with-laptop-school_380164-47767.jpg?size=626&ext=jpg&ga=GA1.1.701009246.1681326713&semt=ais" className="rounded-2xl h-full w-full" />
        </div>
        <div className="overflow-hidden">
          <div className="w-auto sm:w-auto md:w-full lg:w-72 h-52 mt-5 sm:mt-0 md:mt-1 lg:mt-1 over">
            <img src="https://img.freepik.com/free-photo/teamwork-designers_1098-13045.jpg?size=626&ext=jpg&ga=GA1.1.701009246.1681326713&semt=ais" className="rounded-2xl h-full w-full" />
          </div>
          <div className="w-auto sm:w-auto md:w-[60%] lg:w-[60%] rounded-lg mt-8  md:ml-5 lg:ml-5 h-52">
            <img src="https://img.freepik.com/free-photo/teamwork-designers_1098-13045.jpg?size=626&ext=jpg&ga=GA1.1.701009246.1681326713&semt=ais" className="rounded-2xl w-full h-full" />
          </div>
        </div>
      </div>
     <div className="md:p-5 lg:p-5">
      <h1 className="font-bold text-2xl w-auto p-1 sm:p-1 md:p-3 lg:p-3 mt-10 sm:mt-10 md:mt-0 lg:mt-0">Welcome to Grachiever Enhance your skills with best services</h1>
        <p className=" w-auto p-1 sm:p-1 md:p-3 lg:p-3 ">
          At Grachiever, we're committed to providing our learners with a range of services and benefits that go beyond just offering courses. Our personalized recommendations help learners find the courses that best match their interests and goals, while our course ratings and reviews allow learners to make informed decisions about their learning journeys.</p>
          <p className=" w-auto p-1 sm:p-1 md:p-3 lg:p-3 ">We also offer the ability to track progress and earn certifications, providing learners with tangible evidence of their newly acquired skills. And with our exceptional customer service and support, learners can rest assured that they'll have the assistance they need every step of the way. Join our community of learners today and experience the Grachiever difference.</p>
            <button className="bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] rounded px-5 py-2 ml-3 mt-5">Start Learning For Free</button>
    </div>
  </div>
  <p>under trial saloni</p>
  <p>ok done...</p>
     */}
    </section>
  )
};

export default About;