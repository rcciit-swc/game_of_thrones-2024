"use client";
import Image from "next/image";
import Link from "next/link";
import { navRoutes } from "@/utils/constant";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute z-40 mx-auto  w-full  pb-2 pt-5  transition-transform   duration-300 ease-in-out max-md:border-b 2xl:fixed ${
          isMenuOpen ? "relative" : ""
        }`}
      >
        <div className="items-center justify-around gap-20 px-5   pb-2  md:flex md:px-10">
          <Link href={"/"}>
            <Image
              src={"/assets/navbar/logo.svg"}
              className=" w-36 hover:scale-105 duration-500 ease-in-out cursor-pointer transition-colors  "
              width={0}
            
              height={0}
              alt="logo"
            />
          </Link>

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
              className={`smooth-scroll absolute  left-0   z-[1] w-full  border-b bg-body pb-8  pl-9 transition-all duration-500 ease-in-out md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
                isMenuOpen ? "bottom-[-350px]" : "top-[-490px]"
              }`}
            >
              {navRoutes.map((link, index) => (
                <Link href={link.href}>
                  <li className="my-4 pt-2 hover:scale-105 duration-500 ease-linear hover:text-yellow-300 font-semibold md:my-0 md:ml-8 xl:text-xl">
                    <h1 className="cursor-pointer  p-2   transition   ">
                      {link.name}
                    </h1>
                  </li>
                </Link>
              ))}
              <button className="text-md rounded-xl border bg-[#2D3493] px-10 py-2 font-semibold md:hidden">
                Login
              </button>
            </ul>
            <button className="hidden rounded-xl border bg-[#2D3493] px-14 py-3 text-lg font-semibold md:block">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
