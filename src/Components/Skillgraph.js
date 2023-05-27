import rgraph from '../images/Skill_graph/Strategic consulting.gif';
import ggraph from '../images/Skill_graph/Marketing consulting.gif';
import sgraph from '../images/Skill_graph/App development.gif';
import plan from '../images/Skill_graph/Telecommuting.gif';
import carrer from '../images/Skill_graph/Projections.gif';
import React from 'react'
function Skill() {
    return (
        <>
            {/* <!--Skill Section--> */}
            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-20">
                <h1 className="text-xl md:text-3xl font-bold text-center p-3 mt-2">
                    Unleash Your Potential with <span class="text-[#00c5ff]">Skill Graph</span>: <br />
                    Real-Time Insights for Career Growth
                </h1>
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    {/* <!--Graph Section--> */}
                    <div className="mt-7 md:mt-0"
                     data-aos="fade-right"
                    //  data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <img src={rgraph}/>
                    </div>
                    <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10 mt-10"
                     data-aos="fade-left"
                    //  data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <p className="mt-7 mr-25 text-lg">At Grachiever, we understand the importance of staying ahead in today's dynamic job market. That's why we've developed Skill Graph, a powerful tool that empowers you with real-time insights into skill trends and in-demand abilities. With Skill Graph, you can navigate the ever-evolving landscape of professional skills effortlessly. Whether you're a student, a working professional, or a freelancer, Skill Graph provides personalized recommendations and identifies the skills you need to succeed. Our intuitive templates and resources help you craft a tailored skill development plan, unlocking opportunities for career growth and ensuring you remain competitive in the industry. Don't just keep up with the trends – lead the way with Grachiever's Skill Graph.</p>
                        <div className=' mt-10'>
                            <button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl   px-8 text-lg  font-bold">Register for FREE!</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* -------------------------introduction-part------------------------------ */}
            <div className=" w-[10] md:h-full mx-10 text-center col-span-2 ..."
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000"> <p className="text-3xl font-bold text-center p-3 mt-2">Introduction</p>

                <p className="text-lg">
                    In today's fast-paced and competitive job market, it's crucial to stay ahead of the curve. Employers are constantly seeking candidates with the latest skills and abilities that align with industry trends. At Grachiever, we recognize the challenges professionals face in keeping up with these changes. That's why we've developed Skill Graph – an innovative tool designed to provide real-time insights and recommendations for career growth.
                </p>
            </div>
            {/* ------------------------------------growth-section-------------------------------- */}

            {/* <!--Skill Section--> */}

            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-5">
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10 mt-20"
                     data-aos="fade-right"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <h1 className="text-3xl font-bold text-left p-3 mt-2">Understanding <span class="text-[#00c5ff]">Skill Graph</span> </h1>
                        <p className="mt-5 text-lg">
                            Skill Graph is a cutting-edge platform that leverages data analytics and artificial intelligence to offer valuable insights into skill trends. It gathers information from various sources, such as job postings, industry reports, and expert analysis, to provide users with up-to-date information on the skills that are in high demand. By understanding the current market needs, professionals can make informed decisions about their skill development journey.</p>
                        <div className=' mt-10'>
                            <button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl   px-8 text-lg  font-bold">I Want growth</button>
                        </div>
                    </div>
                    {/* <!--Graph Section--> */}
                    <div className="mt-5 md:mt-0"
                     data-aos="fade-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <img src={ggraph} className='md:ml-10 lg:ml-10' />
                    </div>
                </div>
            </section>
            {/* ------------------------------signup-section----------------------------- */}
           
            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-5">
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    {/* <!--Graph Section--> */}
                    <div className=" md:mt-0"
                     data-aos="fade-right"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <img src={sgraph} className='p-5 md:pl-10 lg:p-10' />
                    </div>
                    <div className="lg:h-full md:h-full mt-20  mx-5 sm:mx-5 md:mx-10 lg:mx-10"
                     data-aos="fade-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                     <h1 className="text-3xl  font-bold  p-0 mr-0 ">Navigating the <span class="text-[#00c5ff]">Professional Skills</span> Landscape </h1>
                        <p className="mt-10 text-lg">
                            The professional skills landscape is constantly evolving, with new technologies and industry trends emerging regularly. Skill Graph acts as a compass, guiding users through this ever-changing landscape. It offers a user-friendly interface that allows individuals to explore different skill categories and understand their relevance in specific industries.<br /> By identifying the most sought-after skills, Skill Graph helps users prioritize their learning efforts and stay ahead of the competition.</p>
                        <div className='grid mt-10'>
                           <button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl mx-auto px-8 text-lg font-bold justify-self-center">Sign Up for FREE</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------plan-section-------------------------------- */}
            {/* <!--Skill Section--> */}

            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-0">
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10 mt-20"
                     data-aos="fade-right"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <h1 className="text-3xl font-bold text-left p-3 mt-2">Tailored Skill <span class="text-[#00c5ff]">Development</span> Plan </h1>
                        <p className="mt-5 text-lg">

                            Skill Graph is a cutting-edge platform that leverages data analytics and artificial intelligence to offer valuable insights into skill trends. It gathers information from various sources, such as job postings, industry reports, and expert analysis, to provide users with up-to-date information on the skills that are in high demand. By understanding the current market needs, professionals can make informed decisions about their skill development journey.</p>
                    </div>
                    {/* <!--Graph Section--> */}
                    <div className="md:mt-0"
                     data-aos="fade-left"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <img src={plan} className='md:ml-10' />
                    </div>
                </div>
            </section>

            {/* --------------------------------career-section-------------------- */}
            
            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-0">
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    {/* <!--Graph Section--> */}
                    <div className=" md:mt-10"
                     data-aos="fade-right"
                    //  data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                        <img src={carrer} className='md:ml-10  ' />
                    </div>
                    <div className="lg:h-full md:h-full mt-20  mx-5 sm:mx-5 md:mx-10 lg:mx-10"
                    // lg:h-full md:h-full mx-5 sm:mx-10 md:mx-10 lg:mx-10 mt-[-6rem] lg:mt-20
                     data-aos="fade-left"
                    //  data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                    <h1 className="text-3xl font-bold">Unlocking <span class="text-[#00c5ff]">Opportunities</span> for Career Growth </h1>
                        <p className="mt-5 text-lg">
                            With Skill Graph, you not only gain insights into the skills needed for your current role but also discover new opportunities for career growth. By understanding the emerging trends and skills that are highly sought-after, you can identify potential areas where you can expand your expertise and explore new career paths. Skill Graph provides you with a comprehensive overview of the skills that are in high demand across industries, helping you make informed decisions about your professional development.</p>
                    </div>
                </div>
            </section>
            {/* --------------------------------------last-section------------------------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#1b1d38] mb-5 rounded-3xl"
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">
      <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-0">
        <div className=" md:col-span-2">
          <p className="p-2  text-lg  font-bold text-white">Supercharge Your Career Growth With <br /> Skill Graph: Unlock Your Potential Today!</p>
         </div>
        <div className="mb-5">
            <button className="p-2 rounded-lg bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg ">Get Started now!</button>
        </div>
      </div>
    </section>

        </>
    );
}

export default Skill;