import React from "react";

// Image import
import BgImage from '@/app/img/school.jpg';

function Hero() {
  return (
    <section 
      id="hero"
      className=" h-[calc(100vh-96px)] max-h-[600px] max-w-full flex items-center justify-center pt-20 px-5 lg:px-20"
      style={{backgroundImage: `url(${BgImage})`}}
      >
      <div className="w-full px-3 sm:px-8 lg:px-24">
        <h2 className="font-bold text-3xl sm:text-6xl text-center w-full leading-tight capitalize">
          Transform <span className="text-purple-700">school snack </span>
          times with our <span className="text-purple-700">Tuck Shop App</span>
        </h2>

        <p className="text-center text-sm sm:text-lg mt-7 mb-4 text-stone-500">
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
