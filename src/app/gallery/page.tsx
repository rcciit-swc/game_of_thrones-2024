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
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center justify-center gap-20 rounded-2xl px-5 py-10 font-sans md:grid-cols-2 md:border md:px-10 md:py-20 lg:grid-cols-3">
        {gallery.map((photo, index) => (
          <div key={index}>
            <Image
              src={photo.image}
              alt="football"
              className="h-full w-full rounded-2xl object-cover "
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
