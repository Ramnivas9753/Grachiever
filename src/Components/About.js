function About() {
    return (
        <section className="md:p-10 lg:p-10 mt-20">
    <h1 className="text-3xl font-bold text-center p-3 mt-2">
      About Us
    </h1>
    <p className="font-semibold text-center   m-auto p-2">
      Explore your potential with Grachiever: diverse courses, personalized recommendations, and exceptional support.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-1 sm:p-1 md:p-5 lg:p-5 mt-5">
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
    
</section>
    );
}

export default About;