"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeamCard = ({ member }: any) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="flex transform flex-col items-center justify-center overflow-hidden 
          rounded-2xl grayscale transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0"
    >
      <div
        className="relative h-[350px] w-[350px] overflow-hidden rounded-2xl 
          grayscale hover:grayscale-0
          
          "
      >
        <Image
          src={member.image}
          alt="image"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "0 20%" }}
          //className="h-full w-full rounded-2xl object-cover "
          //width={480}
          // height={480}
          // sizes="(min-width: 1680px) 453px, (min-width: 1040px) calc(30.16vw - 48px), (min-width: 780px) calc(50vw - 81px), calc(100vw - 40px)"
          onLoadingComplete={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-100"></div>
        )}
      </div>

      <h1 className="mt-4 text-center text-2xl font-semibold tracking-widest">
        {member.title}
      </h1>
      <h1 className="mt-1 text-center text-xl">{member.sport}</h1>
    </div>
  );
};

export default TeamCard;
