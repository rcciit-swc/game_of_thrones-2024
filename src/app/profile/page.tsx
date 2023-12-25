import Image from "next/image";
import React from "react";
import RegForm from "./_components/RegForm";

const page = () => {
  return (
    <div className="flex flex-col items-start justify-center pt-20 lg:flex-row ">
      <div className="flex w-full flex-col items-start  gap-10  md:w-1/2">
        <Image
          src={"/assets/navbar/logo.svg"}
          className="w-36 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105 max-md:mx-auto  "
          width={0}
          height={0}
          alt="logo"
        />
        <h1 className="font-got text-xl font-semibold tracking-wider max-md:mx-auto lg:text-3xl">
          Registration
        </h1>
        <RegForm />
      </div>
      <div className="bg-primary">
        <Image
          src={"/assets/registration/reg.svg"}
          className="w-full cursor-pointer  "
          width={0}
          height={0}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default page;
