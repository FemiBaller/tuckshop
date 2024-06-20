"use client"

import React from "react";
import HeroImage from '@/public/assets/hero.jpg';

function Hero() {

  console.log(HeroImage.src)

  return (
    <section 
      id="hero"
      className=" h-screen max-w-full pt-20"
      style={{backgroundImage:`url(${HeroImage.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover"}}
       
      >
      <div className="w-full h-full flex items-center justify-center flex-col bg-[#00000055] px-3 sm:px-8 lg:px-24">
        <h2 className="font-bold text-3xl sm:text-6xl text-white text-center w-full leading-tight capitalize">
          Transform <span className="text-white">school snack </span>
          times with our <span className="text-white">Tuck Shop App</span>
        </h2>

        <p className="text-center text-2xl sm:text-lg mt-7 mb-4 text-white ">
          Easy, convenient ordering for students' favorite treats!
        </p>

        <div className="flex justify-center gap-5">
          <button className="bg-purple-600 py-3 px-6 rounded-md text-lg text-white font-medium hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out">
            Book Appointment
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
