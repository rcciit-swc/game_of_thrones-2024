"use client";
import Image from "next/image";
import { useState } from "react";


const navRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  return (
    <>
           <div
        className={` absolute z-40 max-md:border-b  mx-auto  pt-5 pb-2  w-full   transition-transform duration-300 ease-in-out 2xl:fixed ${
          isMenuOpen ? "relative" : ""
        }`}
      >
        <div className="items-center gap-20 justify-around px-5   pb-2  md:flex md:px-10">
          <Image
            src={"/assets/navbar/logo.svg"}
            className=" w-36  "
            width={0}
            height={0}
            alt="logo"
          />

          <div
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="absolute right-8  top-9 h-10 w-10 cursor-pointer text-white md:hidden"
          >
            {isMenuOpen ? (
              <h1 className="text-2xl font-semibold">X</h1>
            ) : (
              <Image
                src={"/assets/navbar/hamburger.svg"}
                height={24}
                width={24}
                alt=""
              />
            )}
          </div>
              <div className="flex flex-row items-center gap-20">
              <ul
            className={`smooth-scroll absolute border-b   left-0 z-[1]  w-full bg-body pb-8  pl-9 transition-all duration-500 ease-in-out md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              isMenuOpen ? "bottom-[-350px]" : "top-[-490px]"
            }`}
          >
            {navRoutes.map((link, index) => (
              <li className="my-4 pt-2 font-semibold md:my-0 md:ml-8 xl:text-xl">
                <h1
                  className="cursor-pointer  p-2   transition   "
                >
                  {link.name}
                </h1>
              </li>
            ))}
             <button className="md:hidden px-10 bg-[#2D3493] py-2 rounded-xl border text-md font-semibold">Login</button>
          </ul>
          <button className="md:block hidden px-14 bg-[#2D3493] py-3 rounded-xl border text-lg font-semibold">Login</button>
              </div>
        
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
