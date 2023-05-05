import logo1 from '../images/LOGOS/sign_in.jpeg';

function Signup() {
    return(
        <>
            <div id="id01" className="modal">
  <form className="animate p-5 max-w-sm mx-auto bg-[#EBF5FB]" action="#" method="post">
    <div className="imgcontainer"> 
      <a href="index.html"><span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span></a>
      <img src={logo1} alt="Grachiever Logo" className=" w-20 h-20 mx-auto rounded-full" />
    </div>
    <div className="w-full max-w-lg">
        <p className="font-bold text-center">Registration Form</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name" />
        <div className="error text-red-500 text-xs italic"></div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Your Email" />
          <div className="error text-red-500 text-xs italic"></div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="mobile">
              Mobile
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="number" placeholder="Enter Your Mobile" />
            <div className="error text-red-500 text-xs italic"></div>
          </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <div className="error text-red-500 text-xs italic"></div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password2">
            Confirm Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password" placeholder="******************" />
          <div className="error text-red-500 text-xs italic"></div>
        </div>
          

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Sign Up
          </button>
          <div className="flex items-center justify-between mt-5">
            <p>Already Have An Account? <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="sign_in.html">Sign-In</a></p>
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-3">
            &copy;2020 Acme Corp. All Rights Reserved.
          </p>
    </div>
   
  </form>
  
</div>
        </>
    );
}

export default Signup;