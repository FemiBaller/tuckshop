"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useCalendar } from "../contexts/BookAppointment";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const {handleBookAppointment} = useCalendar();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menu]);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 flex items-center justify-between h-24 px-5 sm:px-20 border-b border-gray-200 shadow-sm bg-white">
        <Link href='/'><h1 className="text-xl sm:text-4xl font-semibold">Tuckshop</h1></Link>
        <div>
          <ul className="hidden lg:flex gap-8 font-medium text-stone-500 text-lg">
            <li className="cursor-pointer transition duration-300 ease-in-out">
              <a
                href="#modules"
                className="text-gray-700 hover:text-purple-600 hover:underline"
              >
                Modules
              </a>
            </li>
            <li className="cursor-pointer transition duration-300 ease-in-out">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 hover:underline"
              >
                Features
              </a>
            </li>
            <li className="cursor-pointer transition duration-300 ease-in-out">
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 hover:underline"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="lg:hidden" onClick={toggleMenu}>
            {menu ? (
              <MdClose className="h-8 w-8 text-gray-700" />
            ) : (
              <MdOutlineMenu className="h-8 w-8 text-gray-700" />
            )}
          </div>
          <button className="hidden lg:block bg-purple-600 py-3 px-6 rounded-md text-lg text-white font-medium hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transition-transform duration-300 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <MdClose className="h-8 w-8 text-gray-700" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-center pt-20 h-full space-y-8 text-lg text-stone-500">
          <a
            href="#modules"
            className="block text-gray-700 hover:text-purple-600 hover:underline"
            onClick={toggleMenu}
          >
            Modules
          </a>
          <a
            href="#features"
            className="block text-gray-700 hover:text-purple-600 hover:underline"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-purple-600 hover:underline"
            onClick={toggleMenu}
          >
            Contact us
          </a>
          <button
            className="bg-purple-600 py-3 px-6 rounded-md text-lg text-white font-medium hover:bg-purple-700 hover:shadow-lg transition duration-300 ease-in-out"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
