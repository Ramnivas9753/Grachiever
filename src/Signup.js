function Signup() {
    return(
        <>
            <div id="id01" class="modal">
  <form class="animate p-5 max-w-sm mx-auto bg-[#EBF5FB]" action="#" method="post">
    <div class="imgcontainer"> 
      <a href="index.html"><span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span></a>
      <img src="images/LOGOS/sign_in.jpeg" alt="Grachiever Logo" class=" w-20 h-20 mx-auto rounded-full" />
    </div>
    <div class="w-full max-w-lg">
        <p class="font-bold text-center">Registration Form</p>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name" />
        <div class="error text-red-500 text-xs italic"></div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Your Email" />
          <div class="error text-red-500 text-xs italic"></div>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">
              Mobile
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="number" placeholder="Enter Your Mobile" />
            <div class="error text-red-500 text-xs italic"></div>
          </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <div class="error text-red-500 text-xs italic"></div>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
            Confirm Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password" placeholder="******************" />
          <div class="error text-red-500 text-xs italic"></div>
        </div>
          

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Sign Up
          </button>
          <div class="flex items-center justify-between mt-5">
            <p>Already Have An Account? <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="sign_in.html">Sign-In</a></p>
          </div>
          
          <p class="text-center text-gray-500 text-xs mt-3">
            &copy;2020 Acme Corp. All Rights Reserved.
          </p>
    </div>
   
  </form>
  
</div>
        </>
    );
}

export default Signup;