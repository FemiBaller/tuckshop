import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <section id="contact" className=" bg-[ #FFFFF0]  w-full text-gray-400 px-[10rem] py-[3rem]  
     md:px-[3rem] large:px-[5rem] tablet:px-[3rem] ">

      
      <div className=" mb-16">
        <div>
          <p className="text-3xl mb-20">
            <a href="#hero">Tuckshop</a>
          </p>
        </div>

        <div >
         
          <p  className="mb-[2rem] font-bold">Contact Us</p>
          <div  className="flex flex-col gap-5">
          <div className="flex items-center gap-5"> 
            <FaSquarePhone />
            <p>Phone : 0906783837</p></div>
        <div className="flex items-center gap-5">
          <MdEmail />
          <p>Emai: info@Tolteminternational</p></div>
        <div className="flex items-center gap-5">
          <FaAddressCard />
          <p>Address: ilesha garage, Akure city</p></div>
        </div>
          </div>
     

        
      </div>

      <div className="w-full border-2 border-gray-200 mb-10"></div>
      <div>
        <p className="text-center">Copyright © 2024 Toltem Ineternational. All right reserved</p>
      </div>
    </section>
  );
};

export default Footer;
