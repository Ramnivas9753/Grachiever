import logo1 from '../images/LOGOS/sign_in.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

function Login() {
    return(
        <>
            <div id="id01" className="modal mt-20 mb-5" >
  <form className="animate p-5 max-w-sm mx-auto bg-[#EBF5FB]" action="#" method="post">
    <div className="imgcontainer"> 
      <a href="index.html"><span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span></a>
      <img src={logo1} alt="Grachiever Logo" className=" w-20 h-20 mx-auto rounded-full" />
    </div>
    <div className="w-full max-w-lg">
          <h1 className="font-bold text-center">Login Form</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Username/Email" />
            <div className="error text-red-500 text-xs italic"></div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <div className="error text-red-500 text-xs italic"></div>
          </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Sign In
          </button>
          <div className="flex items-center justify-between mt-5">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="sign_up.html">Sign-Up</a>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="forgot_password.html">Forgot Password?</a>
          </div>
          <p className="w-10 h-10 bg-red-200 text-center rounded-full pt-2 mx-auto">OR</p>
          <div className="row mt-3">
            <a href="#" className="flex btn btn_login text-white items-center p-1 bg-blue-600 hover:bg-blue-500 border border-2 rounded justify-center m-1">
            < FaFacebook className='m-2 ' /> Login With Facebook
             </a>
            <a href="#" className="flex text-white btn btn_login items-center p-1 bg-blue-500 hover:bg-blue-600 border border-2 rounded justify-center m-1">
            < FaTwitter className='m-2 ' />  Login With Twitter
            </a>
            <a href="#" className="flex text-white btn btn_login items-center p-1 bg-red-600 hover:bg-red-700 border border-2 rounded justify-center m-1">
            < FaGooglePlus className='m-2 ' /> Login With Google+
            </a>
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

export default Login;