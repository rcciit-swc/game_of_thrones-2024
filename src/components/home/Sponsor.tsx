import React from "react";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

interface SponsorDataType {
  name: string;
  logo: string[];
}
const sponsorsData: SponsorDataType[] = [
  {
    name: "Brodcasting Partner",
    logo: ["/sheffield.jpeg"],
  },
  {
    name: "Medical Partner",
    logo: ["/wsb.jpeg"],
  },
  {
    name: "Kits Partner",
    logo: ["/dec.png"],
  },
  {
    name: "Banking Partners",
    logo: ["/hdfc.png", "/idfc.jpeg", "/boi.png"],
  },
];

export default function SponsorPage() {
  return (
    <div
      className="p-6 font-got"
      style={{ backgroundColor: "#1E1E1E", color: "#FFFFFF" }}
    >
      <SectionHeader text="SPONSORS" size='5xl' />
      <div className="flex flex-row flex-wrap items-center  justify-center gap-10  px-4  pb-10">
        {sponsorsData.map((sponsor, index) => {
          const sponsorName = sponsor.name.split(" ");
          return (
            <div
              key={index}
              className="mx-auto flex  max-w-xl flex-col-reverse  items-center justify-center gap-5 rounded-xl   p-1 text-center"
            >
              <h2>
                {sponsorName[0]} <br /> {sponsorName[1]}
              </h2>
              <div className="flex flex-row flex-wrap items-center justify-center space-x-4">
                {sponsor.logo.map((logo, subindex) => {
                  return (
                    <Image
                      key={subindex}
                      src={logo}
                      width={150}
                      height={150}
                      alt={sponsor.name}
                      className="m-2"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
