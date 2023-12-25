import { locations } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col  items-start gap-10">
      <h1 className="font-got lg:px-10 text-primary text-2xl tracking-wider">
        Locations
      </h1>
      <div className="flex flex-col w-[90%] mx-auto   gap-10 ">
        {locations.map((location, index) => {
          return (
            <>
              <div className="flex lg:px-8 flex-row gap-2 text-md">
                <Image
                  src="/assets/contacts/redpin.svg"
                  height={0}
                  width={0}
                  className="w-8 lg:w-12"
                  alt="location"
                />
                <p>
                  {location.name}
                  <br /> {location.landmark}
                </p>
              </div>
              <iframe
                className="w-[90%] mx-auto h-[300px] lg:h-[500px]  rounded-md"
                loading="lazy"
                src={location.place}
              ></iframe>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
