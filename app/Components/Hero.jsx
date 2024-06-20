"use client"

import React, { useEffect, useRef } from "react";
import HeroImage from '@/public/assets/hero.jpg';
import { useCalendar } from "../contexts/BookAppointment";

function Hero() {

  const {isAppointment, setAppointment, handleBookAppointment} = useCalendar();

  const containerRef = useRef(null);

    useEffect(() => {
      const menuOutsideClick = (e) => {
        if (!containerRef.current.contains(e.target)) {
          setAppointment(false);
        }
        else {
          setAppointment(true);
        }
      }

      document.addEventListener('mousedown', menuOutsideClick);

      return () => {
        document.removeEventListener('mousedown', menuOutsideClick);
      }
    }, []);

  return (
    <section 
      id="hero"
      className=" h-screen max-w-full pt-20"
      style={{backgroundImage:`url(${HeroImage.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover"}}
       
      >
      <div className="w-full h-full flex items-center justify-center flex-col bg-[#0000008c] px-3 sm:px-8 lg:px-24">
        <h2 className="font-bold text-3xl sm:text-6xl text-white text-center w-full leading-tight capitalize">
          Transform <span className="text-white">school snack </span>
          times with our <span className="text-white">Tuck Shop App</span>
        </h2>

        <p className="text-center text-2xl sm:text-lg mt-7 mb-4 text-white ">
          Easy, convenient ordering for students' favorite treats!
        </p>

        <div className="flex justify-center gap-5">
          <button className="bg-purple-600 py-3 px-6 rounded-md text-lg text-white font-medium hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>

      </div>


      <div className={`w-full h-screen fixed left-0 bottom-0 top-0 bg-[#000000a4] flex items-center justify-center ${isAppointment ? 'scale-1' : 'scale-0'} transition-transform ease duration-500`}>
        <div ref={containerRef} className="w-[1000px] max-w-[95%] h-[75%] bg-white overflow-hidden mt-[5.5rem] rounded-lg">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0HNNygeKSFHyjKsryn4txV0KSyquw5Ckizi--R_Vjty7X78J1FNUa8yODRRf7-TNTGdg1qFEEo?gv=true"
            style={{ border: 0, width: "100%", height: "100%" }}
            frameborder="0"
          />
        </div>
      </div>


    </section>
  );
}

export default Hero;
