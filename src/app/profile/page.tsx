import Image from "next/image";
import React from "react";
import RegForm from "./_components/RegForm";

const page = () => {
  return (
    <div className="flex basis-2/4 flex-col items-start justify-center pt-20 lg:flex-row">
      <RegForm />
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
