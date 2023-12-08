import { SectionHeader } from "@/components";
import events from "@/utils/events";
import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = constructMetaData({
  title: "Gallery | GOT RCCIIT",
});

const Gallery = () => {
  return (
  <div className="pt-[100px] font-got">
    <SectionHeader text="gallery" />
     <div className="max-w-[1600px] rounded-2xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-20 gap-12 px-5 md:px-10 md:border mx-auto">
      {
        events.map((event , index) => (
          <div key={index}>
            <Image src={event.hoverImage} alt='football' className='w-full h-full' width={0} height={0} />
          </div>
        ))
      }
     </div>
  </div>
  );
};

export default Gallery;
