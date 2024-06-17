import React from "react";
import Image from "next/image";
import ImageOne from "@/public/assets/firstimg.jpg";
import ImageTwo from "@/public/assets/secondimg.jpg";
import ImageThree from "@/public/assets/thirdimg.jpg";
import ImageFour from "@/public/assets/fourthimg.jpg";


export const OurModules = () => {
  return (
    <section id="modules" className="px-[10rem] mb-[8rem]   lg:px-[3rem] ">
      <p  className="font-bold text-4xl text-stone-500 mb-16 ">Our Modules</p>
      <div className="mb-[10rem] large:mb-[4rem] tablet:mb-[6rem]">
        <div className="flex items-center gap-20 md:gap-7 w-full tablet:flex-col-reverse">
          <div className="w-1/2 h-[350px] tablet:w-full">
            <Image src={ImageTwo} className="w-full h-full" />
          </div>

          <div className="w-1/2 bg-white rounded-md shadow-md px-7 py-10 ] tablet:w-full">
            <h4 className="font-bold text-3xl text-stone-500 mb-6 lg:text-xl large:text-base md:text-xs ">
              Student Management
            </h4>

            <p className="font-normal text-lg text-stone-400 leading-normal large:text-sm  md:text-xs tablet:text-3xl">
              Each student’s transactions, pocket money wallets, and spending
              habits can be easily managed with the tuck shop, providing
              detailed insights for parents and administrators, and ensuring a
              secure and efficient way for students to handle their finances and
              purchases within the school environment.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[10rem] large:mb-[4rem] ">
        <div className="flex items-center gap-20  md:gap-7 w-full tablet:flex-col ">
          <div className="w-1/2 bg-white rounded-md shadow-md px-7 py-16 tablet:w-full ">
            <h4 className="font-bold text-3xl text-stone-500 mb-6 lg:text-xl large:text-base   md:text-xs ">
              Transaction Management
            </h4>
  
            <p className="font-normal text-lg text-stone-400 leading-normal large:text-sm  md:text-xs ">
              The transactions include crediting a student’s pocket money
              wallet, debiting the wallet and purchase of goods. Students can also a list of all transcations made and also download the list in pdf format.
            </p>
          </div>
          <div  className="w-1/2 h-[350px] tablet:w-full">
            <Image src={ImageThree} className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-20  md:gap-7 w-full tablet:flex-col-reverse  ">
          <div className="w-1/2 h-[350px] tablet:w-full">
            <Image src={ImageFour} className="w-full h-full object-cover" />
          </div>

          <div className="w-1/2 bg-white rounded-md shadow-md px-7 py-10 tablet:w-full ">
            <h4 className="font-bold text-3xl text-stone-500 mb-6  lg:text-xl large:text-base md:text-xs">
              Admin Management
            </h4>

            <p className="font-normal text-lg text-stone-400 leading-normal large:text-sm md:text-xs">
              Each student’s transactions, pocket money wallets, and spending
              habits can be easily managed with the tuck shop, providing
              detailed insights for parents and administrators, and ensuring a
              secure and efficient way for students to handle their finances and
              purchases within the school environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
