import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <section id="contact" className="bg-[#FFFFF0] w-full text-gray-600 px-5 sm:px-20 py-10 mt-24">
      <div className="mb-6">
        <div>
          <p className="text-2xl mb-6 font-semibold">Tuckshop</p>
        </div>
        <div>
          <p className="mb-4 font-bold">Contact Us</p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5"> 
              <FaSquarePhone />
            <p>Phone : 0906783837</p>
          </div>
        <div className="flex items-center gap-5">
          <MdEmail />
          <p>Emai: info@Tolteminternational</p></div>
          <div className="flex items-center gap-5">
            <FaAddressCard />
            <p>Address: ilesha garage, Akure city</p></div>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-200 mb-5"></div>
      <div>
        <p className="text-center text-base">Copyright © 2024 Toltem Ineternational. All right reserved</p>
      </div>
    </section>
  );
};

export default Footer;
