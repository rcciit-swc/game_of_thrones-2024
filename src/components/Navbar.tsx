"use client";
import Image from "next/image";
import Link from "next/link";
import { navRoutes } from "@/utils/constant";
import { useState , useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
         <div className={` z-[40] w-full fixed top-0 left-0`}>
      <div className={`${scrolling ? "bg-body" : "bg-transparent"} md:flex items-center justify-around gap-20 bg-tansparent py-2 md:px-10 px-7`}>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <Image
              src={"/assets/navbar/logo.svg"}
              className="w-36 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
              width={0}
              height={0}
              alt="logo"
            />
        </span>
       
      </div>
      
      <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
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

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-body md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isMenuOpen ? 'top-20 ':'top-[-490px]'}`}>
        {
          navRoutes.map((link , index)=>(
            <Link href={link.href} onClick={()=>setIsMenuOpen(false)} key={index}>
                  <li className="my-4 pt-2 font-semibold duration-500 ease-linear md:hover:scale-105 md:hover:text-yellow-300 md:my-0 md:ml-8 xl:text-xl">
                    <h1 className="cursor-pointer p-2 transition">
                      {link.name}
                    </h1>
                  </li>
                </Link>
          ))
        }
        <li className="md:ml-20 ">
        <button className="text-md rounded-xl border  bg-[#2D3493] px-10 py-2 font-semibold hover:bg-[#242975] ">
                Login
              </button>
        </li>
         
      </ul>
     
      </div>
    </div>

    </>
  );
};

export default Navbar;
