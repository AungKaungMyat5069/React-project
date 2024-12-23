import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import {
  TbHeart,
  TbHelp,
  TbTruckDelivery,
  TbUser,
  TbWallet,
} from "react-icons/tb";

export default function TopNav() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarHandler = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      {/* Main Nav */}

      <nav className=" max-[1080]: mx-auto flex justify-between items-center p-4">
        {/* logo Nav */}

        <div className="flex items-center">
          <div onClick={sideBarHandler} className=" cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
            <b>Eat</b>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className=" bg-orange-700 text-white p-2 rounded-full font-bold">
              Free
            </p>
            <p className="font-bold p-2">Delivery</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-gray-200 rounded-full px-3 p-1 flex justify-center w-[200px] sm:w-[300px] md:w-[400px]">
          <AiOutlineSearch size={25} className=" translate-y-2" />
          <input
            type="text"
            className="bg-transparent focus:outline-none p-2 w-full"
            placeholder="search meal"
          />
        </div>

        {/* Cart  */}
        <button className="bg-orange-700 p-2 px-3 text-white rounded-full hidden md:flex items-center">
          <BsCart size={25} className="me-2" /> Cart
        </button>

        {/* filter */}
        {sideBar ? (
          <section
            onClick={sideBarHandler}
            className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          ></section>
        ) : (
          ""
        )}

        {/* side Bar  */}
        <nav
          className={
            sideBar
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-700 ease-out"
              : "fixed top-0 left-[-100%] h-screen w-0 z-0 duration-700 ease-in"
          }
        >
          {/* brand Name */}

          <h2 className="text-2xl p-6">
            Yum
            <span className="text-orange-700 font-bold ps-2">Eat</span>
          </h2>

          {/* menu */}
          <ul className="flex flex-col p-6 text-gray-900 text-xl">
            <li className=" cursor-pointer">
              <TbUser
                size={40}
                className="bg-black text-white rounded-full p-2 m-3 inline"
              />
              Account
            </li>
            <li className=" cursor-pointer">
              <TbTruckDelivery
                size={40}
                className="bg-black text-white rounded-full p-2 m-3 inline"
              />
              Devlivery
            </li>
            <li className=" cursor-pointer">
              <TbHeart
                size={40}
                className="bg-black text-white rounded-full p-2 m-3 inline"
              />
              Favourite
            </li>
            <li className=" cursor-pointer">
              <TbWallet
                size={40}
                className="bg-black text-white rounded-full p-2 m-3 inline"
              />
              My Wallet
            </li>
            <li className=" cursor-pointer">
              <TbHelp
                size={40}
                className="bg-black text-white rounded-full p-2 m-3 inline"
              />
              Help
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
