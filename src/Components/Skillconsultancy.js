import React from 'react';
import first from '../images/Skill_Consultancy/first.jpg';
import second from '../images/Skill_Consultancy/second.jpg';
function consultancy() {
    return (
        <>

            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-40">
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className=" min-h-min md: w-full bg-[#1b1d38] rounded-3xl">
                        <h1 className="text-7xl font-bold text-white text-left p-20 mt-10">Tailored Skill <br /> Consultancy for <br /> <span class="text-[#00c5ff]">Future Success</span> </h1>

                    </div>

                    {/* <!--Graph Section--> */}
                    <div className="mt-5 md:mt-0">
                        <img src={first} className='"h-auto max-w-full' />
                    </div>
                </div>
            </section>
            {/* --------------------------------second-part------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5">
                <div className=' mt-0'>
                    <button className="bg-white   shadow-cyan-500/50  text-[#00c5ff]  border-2 border-[#00c5ff] p-2 rounded-xl ml-60  px-8 text-lg  font-bold">Take the Next Step</button>
                    <p className="text-lg p-10 ">
                        In today's fast-paced and competitive job market, it's crucial to stay ahead of the curve. Employers are constantly seeking candidates with the latest skills and abilities that align with industry trends. At Grachiever, we recognize the challenges professionals face in keeping up with these changes. That's why we've developed Skill Graph – an innovative tool designed to provide real-time insights and recommendations for career growth.
                    </p>
                </div>
            </section>
            {/* -----------------------------------image-part----------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-0">
                <div className="mt-2 md:mt-0">
                    <img src={second} className='"h-auto max-w-full p-10 ml-20' />
                </div>
            </section>
            {/* ----------------------------third-part------------------------------ */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5">
                <div className=' mt-0'>
                    <h1 className="text-3xl font-bold text-center p-3 mt-2">How Skill Consultancy Works</h1>
                </div>
                {/* --------------------- */}
                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 ml-20 mt" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#c8d9db]  rounded-3xl">
                        <p className="text-lg p-10 ">
                            <label className='font-bold'> Assessment:</label> We begin by conducting a comprehensive assessment of your current skills, experiences, and career aspirations. This helps us gain a deep understanding of your strengths and areas for development.
                            Personalized Guidance: Based on the assessment, our consultants will provide personalized guidance tailored to your specific needs. We'll identify the most relevant and in-demand skills for your desired career path.
                        </p>
                    </div>

                    {/* <!--box2--> */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#c8d9db]  rounded-3xl">
                        <p className="text-lg p-10 ">
                        <label className='font-bold'> Assessment:</label> We begin by conducting a comprehensive assessment of your current skills, experiences, and career aspirations. This helps us gain a deep understanding of your strengths and areas for development.
Personalized Guidance: Based on the assessment, our consultants will provide personalized guidance tailored to your specific needs. We'll identify the most relevant and in-demand skills for your desired career path.
                        </p>
                    </div>
                </div>

                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 ml-20" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#c8d9db]  rounded-3xl">
                        <p className="text-lg p-10 ">
                        <label className='font-bold'> Skill Development :</label> Together, we'll create a customized skill development plan that outlines the necessary steps to enhance your skill set. This plan will focus on acquiring new skills, improving existing ones, and staying updated with industry trends.
Ongoing Support: Our consultants will be there every step of the way, offering ongoing support and advice as you progress through your skill development journey. We'll provide regular check-ins, monitor your progress, and make adjustments to the plan as needed.
                        </p>
                    </div>

                    {/* <!--box2--> */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#c8d9db]  rounded-3xl">
                        <p className="text-lg p-10 ">
                        Skill Development : Together, we'll create a customized skill development plan that outlines the necessary steps to enhance your skill set. This plan will focus on acquiring new skills, improving existing ones, and staying updated with industry trends.
Ongoing Support: Our consultants will be there every step of the way, offering ongoing support and advice as you progress through your skill development journey. We'll provide regular check-ins, monitor your progress, and make adjustments to the plan as needed.
                        </p>
                    </div>
                </div>
            </section>
            {/* ----------------------------forthsectin---------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#c8d9db] mb-5 rounded-3xl mt-5">
      <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5">
        <div className=" md:col-span-2">
          <p className="p-2  text-lg  text-black"><label className='font-bold' >Future-Proofing:</label>  Our goal is to make you  future-ready. We'll not only help you acquire the  <br /> skills you need today but also equip you with the tools and knowledge to adapt to future <br /> industry demands.</p>
         </div>
        <div className="  mb-0 ">
            <button className="p-3  ml-20  mt-5 rounded-lg bg-white font-bold hover:bg-white text-black hover:text-black border-2 border-[#349fcf] px-8 text-lg ">join Now</button>
        </div>
      </div>
    </section>




        </>


    )



}
export default consultancy