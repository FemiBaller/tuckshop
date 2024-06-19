import React from "react";
import Image from "next/image";
import ImageOne from "@/public/assets/firstimg.jpg";
import ImageTwo from "@/public/assets/secondimg.jpg";
import ImageThree from "@/public/assets/thirdimg.jpg";
import ImageFour from "@/public/assets/fourthimg.jpg";


export const OurModules = () => {

  const moduleComps = [
    {
      id: 1,
      image: ImageTwo,
      title: 'Student Management',
      content: `Each student's transactions, pocket money wallets, and spending habits can be easily managed with the tuck shop, providing detailed insights for parents and administrators, and ensuring a secure and efficient way for students to handle their finances and purchases within the school environment.`
    },
    {
      id: 2,
      image: ImageThree,
      title: 'Transaction Management',
      content: `The transactions include crediting a student's pocket money wallet, debiting the wallet and purchase of goods. Students can also a list of all transcations made and also download the list in pdf format.`
    },
    {
      id: 3,
      image: ImageFour,
      title: 'Admin Management',
      content: `Each student's transactions, pocket money wallets, and spending habits can be easily managed with the tuck shop, providing detailed insights for parents and administrators, and ensuring a secure and efficient way for students to handle their finances and purchases within the school environment.`
    },
  ]

  return (
    <section id="modules" className="w-full mt-28 px-5 sm:px-20">
      <p className="font-bold text-2xl sm:text-5xl text-stone-500 mb-8">Our Modules</p>
      <div className="w-full flex flex-col gap-8">
        {
          moduleComps.map((module) => (
            <div key={module.id} className="w-full grid lg:grid-cols-2 gap-5">
              <div className="h-[350px]">
                <Image src={module.image} className="" />
              </div>
              <div className={`bg-white rounded-md shadow-md px-7 py-10 ${module.id % 2 === 0 ? '' : 'lg:-order-1'}`}>
                <h4 className="font-bold text-lg sm:text-3xl text-stone-500 mb-6">
                  {module.title}
                </h4>
                <p className="font-normal text-base sm:text-lg text-stone-400 leading-normal">
                  {module.content}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};
