import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import block from '../../public/block.jpeg'

function Home() {
  return (
    <><Navbar/>
      <div className="hero">
      <div className="hero-content">
        <img src={block} alt="Hero Image" className="hero-image" />
        <div className="hero-text">
          <h1 className="title">Welcome to Our Website</h1>
          <p className="subtitle">Efficiently manage and dispose of healthcare waste with our decentralized application.</p>
          <p className="subtitle">Get Started and Register your Organization with us!</p> 
          <button className="btn btn-primary"><a href='/FR'>Register</a></button>
        </div>
      </div>
    </div>
   
    </>
  );
}

export default Home;
