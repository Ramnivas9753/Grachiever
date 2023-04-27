import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
