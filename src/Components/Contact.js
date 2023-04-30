function Contact() {
    return(
        <section className=" p-1">

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 w-[90%] m-auto">
      <div className="m-2 mt-4 md:p-10 lg:p-10 w-[75%]">
       <p className="font-bold text-[#0A0878] text-2xl">Keep In Touch With Us.</p>
            <p className="mt-5">Stay up-to-date with the latest courses, promotions, and news from Grachiever</p>
            <p className="mt-10"> <i className="fa fa-phone"></i> +91 6266823567</p>
            <p className="mt-10"> <i className="fa fa-envelope"></i> info@grachiever.com</p>
        </div>
     <div className="md:p-10 lg:p-10">
        <div className="m-2 ">
            <p className="font-bold text-[#0A0878] text-2xl ">Send a message</p>
            <p className="mt-5 w-96">We`d love to hear from you! Reach out to us with any questions or feedback.</p>
            <form action="#" className="space-y-8 mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="w-full">
                        <label htmlFor="subject" className="block mb-2 font-bold text-[#0A0878] text-lg">Name</label>
                        <input type="text" id="subject" className="block p-3 w-full  w-full bg-white border-2 border-gray-400  px-4 py-2 pr-8 rounded-lg shadow leading-normal focus:outline-[#349fcf] focus:shadow-outline" placeholder="Name" required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 font-bold text-[#0A0878] text-lg">Your email</label>
                        <input className="block p-3 w-full  w-full bg-white border-2 border-gray-400  px-4 py-2 pr-8 rounded-lg shadow leading-normal focus:outline-[#349fcf] focus:shadow-outline" id="email" type="text" placeholder="Email" />

                    </div>
                    
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 font-bold text-[#0A0878] text-lg">Message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:outline-[#349fcf] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message.."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 rounded-lg sm:w-fit bg-[#349fcf] hover:bg-white text-white hover:text-black border-2 border-[#349fcf]">Send message</button>
            </form>
        </div>
    </div>


  </div>
    
</section>
    );
}

export default Contact;