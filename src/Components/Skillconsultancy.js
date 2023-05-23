import React from 'react';
import first from '../images/Skill_Consultancy/first.png';
import second from '../images/Skill_Consultancy/second.png';
import grachiever from '../images/Skill_Consultancy/grachiever.png';
import xicon from '../images/Skill_Consultancy/xicon.png';
import vector from '../images/Skill_Consultancy/Vector.png';
function consultancy() {
    return (
        <>
            {/* min-h-min */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-40 mx-5">
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className="mt-20 md:w-[100%] bg-[#1b1d38] rounded-3xl">
                        <h1 className="text-5xl font-bold text-white text-left px-24 p-12 mt-8">Tailored Skill <br /> Consultancy for <br /> <span class="text-6xl text-[#00c5ff]">Future Success</span> </h1>
                    </div>
                    {/* <!--Graph Section--> */}
                    <div className="mt-5 md:mt-0">
                        <img src={first} className='w-[100%] rounded-br-3xl z-50 md:-translate-x-20' />
                    </div>
                </div>
                {/* h-auto max-w-full */}
            </section>
            {/* --------------------------------second-part------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5">
                <div className=' mt-0'>
                    <button className="p-2 rounded-xl bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 ml-60 font-bold border-[#349fcf] px-8 text-lg mt-2">Take the Next Step</button>                    <p className="text-lg p-10 ">
                        In today's fast-paced and competitive job market, it's crucial to stay ahead of the curve. Employers are constantly seeking candidates with the latest skills and abilities that align with industry trends. At Grachiever, we recognize the challenges professionals face in keeping up with these changes. That's why we've developed Skill Graph – an innovative tool designed to provide real-time insights and recommendations for career growth.
                    </p>
                </div>
            </section>
            {/* -----------------------------------image-part----------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-0">
                <div className="mt-2 md:mt-0">
                    <img src={second} className='w-[65%] ml-64' />
                </div>
                {/* h-auto max-w-full p-10 ml-20 */}
            </section>
            {/* ----------------------------third-part------------------------------ */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5">
                <div className=' mt-0'>
                    <h1 className="text-3xl font-bold text-center p-3 mt-2">How Skill Consultancy Works</h1>
                </div>
                {/* --------------------- */}
                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 ml-20 mt" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl">
                        <p className="text-lg p-10 ">
                            <label id='box' className='font-bold'> Assessment:</label> We begin by conducting a comprehensive assessment of your current skills, experiences, and career aspirations. This helps us gain a deep understanding of your strengths and areas for development.

                        </p>
                    </div>

                    {/* <!--box2--> */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl">
                        <p className="text-lg p-10 ">
                            <label id='box' className='font-bold'>Personalized Guidance:</label> Based on the assessment, our consultants will provide personalized guidance tailored to your specific needs. We'll identify the most relevant and in-demand skills for your desired career path.
                        </p>
                    </div>
                </div>

                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 ml-20" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl">
                        <p className="text-lg p-10 ">
                            <label id='box' className='font-bold'> Skill Development :</label> Together, we'll create a customized skill development plan that outlines the necessary steps to enhance your skill set. This plan will focus on acquiring new skills, improving existing ones, and staying updated with industry trends.
                        </p>
                    </div>

                    {/* <!--box2--> */}
                    <div className=" p-1 w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl">
                        <p className="text-lg p-10 ">
                            <label id='box' className='font-bold'>Ongoing Support:</label> Our consultants will be there every step of the way, offering ongoing support and advice as you progress through your skill development journey. We'll provide regular check-ins, monitor your progress, and make adjustments to the plan as needed.
                        </p>
                    </div>
                </div>
            </section>
            {/* ----------------------------forthsectin---------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#E0EBFF] mb-5 rounded-3xl mt-5 shadow-lg hover:shadow-gray-500 mx-5">
                <div className=" mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-2">
                    <div className="m-auto md:col-span-2">
                        <p className="text-xl text-left text-black"><label id='box' className='font-bold' >Future-Proofing:</label>  Our goal is to make you  future-ready. We'll not only help you acquire the   skills you need today but also equip you with the tools and knowledge to adapt to future industry demands.</p>
                    </div>
                    <div className="m-auto mb-0 sm:p-0">
                        <button className="p-2 rounded-lg bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-16 text-lg mt-3">Join Now</button>
                    </div>
                </div>
            </section>
            {/* -----------------------------------------fifthsection------------------------- */}
            <section className="p-0 sm:p-0 md:p-3 lg:p-5  mb-5  mt-5  ">
                <div className=' mt-0 p-20 border-[#1b1d38] border-8 '>
                    <div className=' mt-0'>
                        <h1 className="text-3xl font-bold text-center  ">BENEFITS</h1>
                    </div>
                    {/* ---------------------------- */}
                    <div className=' mt-5' >
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  w-60 h-10 font-bold rounded-md shadow-md text-lg text-white">Confidence and Clarity </div>
                        </div>
                        <p className='text-lg p-5 ml-10'>
                            Skill consultancy provides clarity on your <br /> career path and boosts your confidence in <br /> pursuing the right skills.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  w-60 h-10 font-bold rounded-md shadow-md text-lg text-white">Targeted Approach </div>
                        </div>
                        <p className='text-lg p-5 ml-10'>

                            Our consultants have a deep <br /> understanding of industry trends and can <br /> guide you towards the most relevant and <br /> valuable skills.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  w-60 h-10 font-bold rounded-md shadow-md text-lg text-white"> Time Efficiency </div>
                        </div>
                        <p className='text-lg p-5 ml-10'>

                            With our expertise, you can avoid wasting <br /> time on irrelevant or outdated skills, <br /> focusing only on what matters most.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  w-60 h-10 font-bold rounded-md shadow-md text-lg text-white"> Competitive Edge </div>
                        </div>
                        <p className='text-lg p-5 ml-10'>
                            By staying ahead of the skills curve, you'll <br /> gain a competitive edge in the job market <br /> and stand out to potential employers.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  w-60 h-10 font-bold rounded-md shadow-md text-lg text-white">Lifetime Learning </div>
                        </div>
                        <p className='text-lg p-5 ml-10'>
                            The skills you acquire through our <br /> consultancy will benefit you throughout <br /> your career, ensuring long-term <br /> professional success.</p>
                    </div>
                    {/* ----------------------------- */}
                </div>
            </section>
            {/* --------------------------------------last-section------------------------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#1b1d38] mb-5 rounded-3xl mx-5">
                <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5">
                    <div className="m-auto  mb-0 ">
                        <button className="p-2 rounded-lg bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 text-lg mt-2">Get Started now!</button>
                    </div>
                    <div className="m-auto md:col-span-2  ml-30">
                        <p className="p-2  text-lg  font-bold text-white">
                            Ready to take your skills to the next level? Contact us today to schedule a consultation with one of our skill experts. Together, we'll unlock your full potential and set you on the path to a thriving career.</p>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------pricing-section------------------------ */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-10 mb-10">
                <div className=' mt-5'>
                    <img src={grachiever} className=" w-40 m-auto" ></img>
                    <h1 className="text-3xl  text-center p-3 mt-2">Monthly Pricing Plans</h1>
                </div>
                <div className=' mt-5 shadow-2xl overflow-auto rounded-lg'>
                    <div className=''>
                
                        <table className="w-full p-10 text-center border-collapse   ...">
                        <tbody>
                                <tr className='h-10'>
                                    <td className='text-3xl  text-center'>Pricing Table</td>
                                    <td className='bg-[#eddc24] '></td>
                                    <td className='bg-[#359bdb] '></td>
                                    <td className='bg-[#1839cc] '></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className='h-40'>
                                    <td></td>
                                    <td className='text-lg'>$ <span className='text-4xl'>19</span><br />per month</td>
                                    <td className='text-lg'>$ <span className='text-4xl'>29</span><br />per month</td>
                                    <td className='text-lg'>$ <span className='text-4xl'>99</span><br />per month</td>
                                </tr>
                            </tbody>
                            <tbody >
                                <tr className='h-20 '>
                                    <th className= " bg-[#f1f2eb] text-lg  border-slate-300 ...">Courses</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Limited Access</td>
                                    <td className=" bg-[#f1f2eb] text-lg border-slate-300 ...">Unlimited Access</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Unlimited Access</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className='h-20 '>
                                    <th className=" text-lg border-slate-300 ...">Freelancing & Projects</th>
                                    <td className="text-lg border-slate-300 ..."><img src={xicon} className=" w-10 m-auto" /></td>
                                    <td className="text-lg border-slate-300 ...">Limited Projects</td>
                                    <td className="text-lg border-slate-300 ...">Unlimited Projects</td>
                                </tr>
                                <tr className='h-20'>
                                    <th className="bg-[#f1f2eb] text-lg border-slate-300 ...">Skill Graph</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={xicon} className=" w-10 m-auto" /></td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={vector} className=" w-10 m-auto" /></td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={vector} className=" w-10 m-auto " /> <span></span></td>
                                    
                                </tr>
                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ...">Consultancy</th>
                                    <td className="text-lg border-slate-300 ...">1 call/month</td>
                                    <td className="text-lg border-slate-300 ...">4 call/month</td>
                                    <td className=" text-lg border-slate-300 ...">Unlimited Calls</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className="bg-[#f1f2eb] text-lg border-slate-300 ...">Tools & Resources</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Basic</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Uncommon</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Premium</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ...">Support</th>
                                    <td className=" text-lg border-slate-300 ...">Email</td>
                                    <td className=" text-lg border-slate-300 ...">Email + Chat</td>
                                    <td className="text-lg">Email, Chat, Phone</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ..."></th>
                                    <td className=" text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#eddc24] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2">Get Started </button></td>
                                    <td className=" text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#359bdb] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2">Get Started </button></td>
                                    <td className="text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#1839cc] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2">Get Started </button></td>
                                   
                                </tr>
                            </tbody>
                        </table>


                    </div>


                </div>
            </section>
        </>
    )
}
export default consultancy