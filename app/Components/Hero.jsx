import React from "react";

function Hero() {
  return (
    <section id="hero" className=" bg-[ #FFFFF0] py-28 px-40 font-bold max-w-full  ">
      <div className="flex justify-center"> 
      <div>
        <h2 className="text-7xl text-center w-full leading-tight capitalize xl:text-5xl xl:leading-tight  lg:text-4xl md:text-2xl tablet:leading-normal mobile:text-xs leading-none  ">
          Transform <span className="text-purple-700"> school snack </span>
          times with our <span className="text-purple-700">Tuck Shop App </span>
        </h2>
        <p className="text-center font-bold text-lg my-10 text-stone-500  tablet:text-xs md:text-sm  ">
    
          Easy, convenient ordering for students' favorite treats!
        </p>
        <div className="flex justify-center gap-5  mobile:flex-col mobile:justify-center">
         
        <button className="bg-purple-600 py-3 px-6 rounded-md text-lg text-white font-medium lg:text-base  hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out mobile:w-[12rem] ">
  Book Appointment
</button>
         
          <button className="bg-transparent border-2  py-3 px-6 rounded-md text-black font-medium shadow-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-black mobile:w-[12rem]">
  About us
</button>

        
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
