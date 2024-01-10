import { Metadata } from "next";

import { constructMetaData } from "@/utils";
import { SectionHeader } from "@/components";
import { team } from "@/utils/constant";
import Image from "next/image";

export const metadata: Metadata = constructMetaData({
  title: "Our Team | GOT RCCIIT",
});

const TeamsPage = () => {
  const teamAlphabetical = team.slice().sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="mt-[100px] ">
      <SectionHeader text="Our Team" />
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center justify-center gap-20 rounded-2xl px-5 py-10 font-sans md:grid-cols-2 md:border md:px-10 md:py-20 lg:grid-cols-3">
        {teamAlphabetical.map((photo, index) => (
          <div key={index}>
            <div
              className="relative h-[600px] w-[400] overflow-hidden rounded-2xl 
          grayscale hover:grayscale-0"
              key={index}
            >
              <Image
                src={photo.image}
                alt="image"
                fill={true}
                style={{ objectFit: "cover" }}
                //className="h-full w-full rounded-2xl object-cover "
                //width={480}
                // height={480}
                // sizes="(min-width: 1680px) 453px, (min-width: 1040px) calc(30.16vw - 48px), (min-width: 780px) calc(50vw - 81px), calc(100vw - 40px)"
              />
            </div>

            <h1 className="mt-4 text-center text-2xl font-semibold tracking-widest">
              {photo.title}
            </h1>
            <h1 className="mt-1 text-center text-xl">{photo.sport}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
