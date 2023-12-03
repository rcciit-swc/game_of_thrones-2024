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
    <div className="absolute z-40  mx-auto mt-5 w-full">
      <div className="  flex flex-row items-center justify-around">
        <Image
          src={"/assets/navbar/logo.svg"}
          className=" w-36  "
          width={0}
          height={0}
          alt="logo"
        />

        <ul className="flex md:flex-row items-center gap-24 text-xl font-medium">
          {navRoutes.map((route, index) => (
            <li key={index}>{route.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
