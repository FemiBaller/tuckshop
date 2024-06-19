import React from "react";
import { IoPeople } from "react-icons/io5";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { GoIssueTrackedBy } from "react-icons/go";
import { GrStatusInfo } from "react-icons/gr";

const Benefits = () => {

  const Features = [
    {
      id: 1,
      icon: <GoIssueTrackedBy />,
      title: "Asset Tracking",
      text: " The platform gives individuals the management the ability to track items or groups of items",
    },
    {
      id: 2,
      icon: <GrStatusInfo />,
      title: "Stock status",
      text: "The platform gives an overview of what is left in the stock and what has been purchases",
    },
    {
      id: 3,
      icon: <BiPurchaseTagAlt />,
      title: "Purchasing Record",
      text: "All records of inventory transactions can be traced and recorded",
    },
    {
      id: 4,
      icon: <IoPeople />,
      title: "Multiple user support",
      text: "The platform accommodates several members with different access.",
    },
  ];

  return (
    <section className="px-5 sm:px-20 max-w-full flex justify-center mt-28">
      <div>
        <p className="font-bold text-2xl sm:text-5xl text-stone-500 mb-8 pr-2">Benefits our Tuck-Shop App</p>
        <div className="bg-white rounded-md max-w-full shadow-2xl grid md:grid-cols-2 px-5 md:px-10 justify-items-center gap-x-10 gap-y-10 py-5 md:py-20">
          {Features.map((feature) => (
            <div
              className="bg-purple-500 rounded-md px-7 py-10"
              key={feature.id}
            >
              <div>
                <div className="flex flex-col items-center">
                  <p className="text-white text-4xl inline-block rounded-full p-2 border-white border-4">
                    {feature.icon}
                  </p>
                  <h3 className="text-xl font-semibold mt-5 text-white text-center">
                    {feature.title}
                  </h3>
                  <p className="my-5 leading-snug font-normal text-white text-lg text-center">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default  Benefits;



