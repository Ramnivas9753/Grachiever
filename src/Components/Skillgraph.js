import sgraph from '../images/graph/skillgraph.png';
import React from 'react'
import ReactDOM from 'react-dom';
function Skill() {
    return (
        <>
            {/* <!--Skill Section--> */}

            <section className="p-0 sm:p-0 md:p-10 lg:p-10 mt-5">
                <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className="lg:h-full md:h-full mx-5 sm:mx-5 md:mx-10 lg:mx-10">
                        <h1 className=" mt-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"><span class="text-[#4eb0e1]">Track</span> The Trending<br /> <span class="text-[#4eb0e1]">Skills</span> Over Time</h1>
                        <p className="mt-5  text-lg">Our Skill Graph feature helps you stay up-to-date with the latest skills in demand. our Skill Graph displays the trending skills over time.</p>
                        <p className="mt-5 text-lg">allowing you to identify which skills are gaining popularity and which are losing relevance. With this powerful tool, you can make informed decisions about the skills you want to learn or develop, ensuring you stay ahead of the curve in your chosen field.</p>
                        <div className=' mt-10'>
                            <button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2 rounded-xl   px-8 text-lg  font-bold">Learn More</button>
                        </div>
                    </div>
                    {/* <!--Graph Section--> */}
                    <div className="mt-5 md:mt-0">
                        <img src={sgraph} className='mx-auto' />
                    </div>
                </div>
            </section>
            <p>hello is it working let me know</p>
        </>
    );
}

export default Skill;