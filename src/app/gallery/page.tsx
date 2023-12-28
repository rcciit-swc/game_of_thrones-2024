import { SectionHeader } from "@/components";
import { gallery } from "@/utils/constant";
import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import GalleryCard from "./_components/GalleryCard";

export const metadata: Metadata = constructMetaData({
  title: "Gallery | GOT RCCIIT",
});

const Gallery = () => {

  return (
    <div className="pt-[100px] px-5">
      <SectionHeader text="gallery" />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center justify-center gap-20 rounded-2xl px-5 py-10 font-sans md:grid-cols-2 md:border md:px-10 md:py-20 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <GalleryCard photo={photo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
