import { Metadata } from "next";

import { constructMetaData } from "@/utils";
import { SectionHeader } from "@/components";
import { team } from "@/utils/constant";
import Image from "next/image";
import { useState } from "react";
import TeamCard from "./_components/TeamCard";

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
          <TeamCard key={index} member={photo} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
