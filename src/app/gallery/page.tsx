import { SectionHeader } from "@/components";
import { gallery } from "@/utils/constant";
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
      <div className="max-w-[1600px] font-sans rounded-2xl justify-center items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-20 gap-20 px-5 md:px-10 md:border mx-auto">
        {gallery.map((photo, index) => (
          <div key={index}>
            <Image
              src={photo.image}
              alt="football"
              className="w-full h-full rounded-2xl object-cover "
              width={480}
              height={480}
              sizes="(min-width: 1680px) 453px, (min-width: 1040px) calc(30.16vw - 48px), (min-width: 780px) calc(50vw - 81px), calc(100vw - 40px)"
            />
            <h1 className="text-center text-2xl font-semibold tracking-widest">
              {photo.sport}
            </h1>
            <h1 className="text-center text-xl">{photo.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
