"use client";
import Image from "next/image";
import React, { useState } from "react";

const GalleryCard = ({ photo }: { photo: string }) => {
  const [loaded, setLoaded] = useState(false);

  console.log(photo);

  return (
    <div
      className="relative h-[300px] w-[400] transform overflow-hidden 
          rounded-2xl grayscale transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0
          "
    >
      <Image
        src={photo}
        alt="image"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        onLoadingComplete={() => setLoaded(true)}
      />
      {
        !loaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse"></div>
        )
      }
    </div>
  );
};

export default GalleryCard;
