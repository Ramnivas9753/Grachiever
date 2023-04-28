// import logo from './logo.svg';
// import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (

    // This Code is bydefault from react app dont touch this code...
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <>
      <Navbar />
      {/* <Home /> */}
      <Blog />
      <About />
      <Contact />
      <Login />
      <p className='mt-10' ></p>
      <Signup />
      <Footer />
    </>
  );
}

export default App;
