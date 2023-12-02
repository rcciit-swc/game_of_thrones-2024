import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-row justify-between">
      
      <div className="flex min-h-screen min-w-full flex-col ">
        <Image
          src={"/assets/hero/lefttop.svg"}
          className="mt-10 w-5 max-lg:mt-[24%] lg:w-10 2xl:w-14  "
          height={0}
          width={0}
          alt="lefttop"
        />
        <Image
          src={"/assets/hero/leftdown.svg"}
          className="h-3/5 w-10/12"
          height={0}
          width={0}
          alt="lefttop"
        />
          <div className="md:hidden  z-40  w-full block ">
        <button className=" absolute left-[14%] top-[76%]  rounded-xl border-2 border-white bg-[#2D3493] px-20 py-5 text-md font-semibold shadow-md shadow-white ">
              Register Now
        </button>
        </div>
      </div>
     
      <div className="max-md:overflow-x-hidden max-md:overflow-y-hidden absolute flex flex-row ">
        <Image
          src={"/assets/hero/line 1.svg"}
          alt="footballer"
          className="relative h-screen w-full rotate-12 -scale-x-90 lg:-left-10 lg:mt-14 lg:scale-x-90  2xl:left-5 2xl:mt-0 "
          width={0}
          height={0}
        />
        <Image
          src={"/assets/hero/footballer.svg"}
          alt="footballer"
          className="absolute -right-10 z-20 h-screen w-full -scale-x-90 md:scale-x-90  lg:-left-20 2xl:left-0"
          width={0}
          height={0}
        />
        
      </div>

      <div className=" md:w-[45%] absolute top-[14%] z-30  p-4  max-md:left-3 lg:right-20">
        {/* <Image src={"/assets/hero/Group 9.svg"} className="w-full h-full" alt="football" width={0} height={0} /> */}
        <div className="flex flex-col items-start gap-8 md:items-center lg:gap-16">
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/assets/hero/rcc.svg"
              height={0}
              width={0}
              className="h-16 w-16 lg:h-24 lg:w-24"
              alt="rcc"
            />
            <div className="flex flex-col font-serif text-sm font-semibold lg:text-xl 2xl:text-3xl">
              <span>RCC Institute of</span>
              <span>Information Technology</span>
            </div>
          </div>
          <h1 className="lg:text-md font-got text-sm font-extralight 2xl:text-2xl">
            PRESENTS
          </h1>
          <div className="flex flex-row items-center">
            <div className="flex flex-col flex-wrap gap-3 font-got font-semibold lg:gap-6 lg:text-5xl 2xl:text-6xl">
              <span>GAME OF</span>
              <span>THRONES</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold lg:text-2xl 2xl:text-3xl ">
            <span>Inter-college national</span>
            <span>level sports fest</span>
          </div>
          
            <button className="hidden md:block rounded-xl border-2 border-white bg-[#2D3493] px-10 py-5 font-bold shadow-md shadow-white ">
              Register Now
            </button>
          
        </div>
        
      
      </div>

      <div className="absolute z-0  max-lg:-left-10 max-lg:mt-[10%] lg:-right-16">
        <Image
          src={"/assets/hero/rightdown.svg"}
          alt="footballer"
          className=" h-screen w-full -scale-x-90 lg:scale-x-90"
          width={0}
          height={0}
        />
      
      </div>
    </div>
  );
};

export default Hero;