import React from 'react';
import './Hero.css';
import banner from './banner.png';
function Hero() {
  return (
    <section className="hero">
        <img src={banner}/>
    </section>
  );
}

export default Hero;
