import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png"; // Replace with actual image

const Hero = () => (
  <section className='bg-green-50 py-20 px-10 text-center overflow-hidden'>
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center'>
      {/* Animated Text Section */}
      <div className='md:w-1/2 mb-8 md:mb-0 animate-fadeInLeft'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight'>
          Instant & Secure <br /> Payments Made Easy
        </h1>
        <p className='text-lg text-gray-700 mb-6'>
          QuickPay is the simplest way to send and receive money. Fast, secure, and efficient, designed for modern
          businesses and individuals.
        </p>
        <Link to='/signup'>
          <button className='px-8 py-4 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105'>
            Get Started for Free
          </button>
        </Link>
      </div>

      {/* Animated Image Section */}
      <div className='md:w-1/2 animate-fadeInRight'>
        <img src={HeroImage} alt='QuickPay in action' className='w-full h-auto' />
      </div>
    </div>
  </section>
);

export default Hero;
