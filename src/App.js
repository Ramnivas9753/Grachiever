// import logo from './logo.svg';
// import './App.css';

import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import GAtools from './Components/GAtools';

import Layout from './Components/Layout';
import Skillgraph from './Components/Skillgraph';
import Skillconsultancy from './Components/Skillconsultancy';
import BrowseAll from './Components/BrowseAll';
import Forgetpass from './Components/Forgetpass';

import Dashboard_Index from './Dashboard/Dashboard_Index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardDetails from './Components/CardDetails';

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


    // <>
    //   <Navbar />
    //   <Home />
    //   <Blog />
    //   <About />
    //   <Contact />
    //   <Login />
    //   <p className='mt-10' ></p>
    //   <Signup />
    //   <Footer />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="skillgraph" element={<Skillgraph />} />
          <Route path="skillconsultancy" element={<Skillconsultancy />} />
          <Route path="BrowseAll" element={<BrowseAll />} />
          <Route path="Dashboard_Index" element={<Dashboard_Index />} />
          <Route path="Gatools" element={<GAtools />} />
          <Route path="Forgetpass" element={<Forgetpass />} />
          <Route path="CardDetails" element={<CardDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
