import { SectionHeader } from "@/components";
import { gallery } from "@/utils/constant";
import events from "@/utils/events";
import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = constructMetaData({
  title: "Gallery | GOT RCCIIT",
});

const Gallery = () => {
  return (
    <div className="pt-[100px] ">
      <SectionHeader text="gallery" />
      <div className="max-w-[1600px] font-sans rounded-2xl justify-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-20 gap-20 px-5 md:px-10 md:border mx-auto">
        {gallery.map((photo, index) => (
          <div key={index}>
            <img
              src={photo.image}
              alt="football"
              className="w-full h-full rounded-2xl object-cover"
              width={0}
              height={0}
            />
            <h1 className="text-center text-2xl font-semibold tracking-widest">{photo.sport}</h1>
            <h1 className="text-center text-xl">{photo.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
