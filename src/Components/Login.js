import logo1 from '../images/LOGOS/sign_in.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import sign_in from "../images/LOGOS/sign-up-image.jpg"


function Login() {
  return (
    <>
      {/* <div id="id01" className="modal mt-20 mb-5" >
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
    </div> */}
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src={sign_in} className="md:w-[60%] m-auto"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
           Sign in With 
            <button
              type="button"
              className="mx-1 mb-6 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
          </div>
        </div>
      </section>

    </>
  );
}

export default Login;