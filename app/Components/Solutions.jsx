import React from "react";
import { BiDockTop } from "react-icons/bi";
import { LuWalletCards } from "react-icons/lu";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { TbAssetFilled } from "react-icons/tb";

const Card = [
  {
    id: 1,
    title: "",
    text: "",
    icon: "",
  },
  {
    id: 2,
    title: "Stock Inventory ",
    text: "  A bird’s eye view of all the available materials such as assets, teaching aids and consumables ",
    icon: <BiDockTop />,
  },
  {
    id: 3,
    title: "E-Pocket ",
    text: "Money an electronic wallet for students to manage students spending.",
    icon: <LuWalletCards />,
  },
  {
    id: 4,
    title: " E-Shopping ",
    text: "  E-shopping feature on the Tuck shop manages the selling of goods and services in the school.",
    icon: <HiMiniShoppingCart />,
  },
  {
    id: 4,
    title: "Asset Mangement ",
    text: "Money an electronic wallet for students to manage students spending.",
    icon: <TbAssetFilled />
  },
];

const Solutions = () => {
  return (
    <section id="features" className="  grid grid-cols-3 gap-y-20 gap-x-8 justify-center mt-[10rem] w-full px-20 transition-all duration-3000 large:grid-cols-2 tablet:px-9 mobile:flex mobile:flex-col ">
      {Card.map((card) => (
        <>
          {card.id === 1 ? (
            <div className="bg-purple-600 h-[320px] rounded-md shadow-lg flex items-center flex-wrap px-5">
              <p className="text-white font-bold text-4xl leading-tight text-center">
                Check out our features!
              </p>
            </div>
          ) : (
            <div
              key={card.id}
      className="bg-white h-[320px] rounded-md shadow-lg text-stone-500 px-10 hover:translate-y-[-1.2rem] hover:shadow-xl large   "
            >
              <div className="bg-purple-600  w-16 h-16 rounded-full flex items-center justify-center mt-[-2rem]">
                <p className="text-4xl text-white "> {card.icon}</p>
              </div>
              <div className="mt-12">
                <p className="text-xl large:text-lg font-semibold mb-[2rem]">{card.title}</p>
                <p className="my-5 leading-snug font-normal">{card.text}</p>
              </div>
            </div>
          )}
        </>
      ))}
    </section>
  );
};

export default Solutions;
