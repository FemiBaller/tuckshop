import React from "react";
import Image from "next/image";
import ImageTwo from "@/public/assets/moduleone.png";
import ImageThree from "@/public/assets/moduletwo.png";
import ImageFour from "@/public/assets/modulethree.png";


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
      content:  " The transactions include crediting a student's pocket money wallet, debiting the wallet, and purchasing goods. Students can also view a list of all transactions made and download the list in PDF format. This feature allows them to keep track of their spending, understand their purchasing behavior. "  ,

  },
    {
      id: 3,
      image: ImageFour,
      title: 'Admin Management',
      content: `Each student's transactions, pocket money wallets, and spending habits can be easily managed with the tuck shop, providing detailed insights for parents and administrators, and ensuring a secure and efficient way for students to handle their finances and purchases within the school environment.`
    },
  ]

  return (
    <section id="modules" className="w-full min-h-[70vh] pb-16 mt-28 px-5 sm:px-20">
      <p className="font-bold text-2xl sm:text-5xl text-black mb-8">Our Modules</p>
      <div className="w-full flex flex-col gap-8">
        {
          moduleComps.map((module) => (
            <div key={module.id} className="w-full grid lg:grid-cols-2 gap-5">
              <div className="max-h-[280px] ">
                <Image src={module.image} className=" h-full w-full" />
              </div>
              <div className={`bg-white rounded-md shadow-md px-7 py-5 ${module.id % 2 === 0 ? '' : 'lg:-order-1'} max-h-[auto]`}>
                <h4 className="font-bold text-lg sm:text-3xl text-black mb-6">
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
