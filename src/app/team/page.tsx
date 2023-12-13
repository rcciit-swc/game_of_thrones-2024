import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import TeamCard from "./_components/TeamCard";
import { SectionHeader } from "@/components";

export const metadata: Metadata = constructMetaData({
  title: "Our Team | GOT RCCIIT",
});

const TeamsPage = () => {
  return(
    <div className="mt-[60px]">
      <SectionHeader text="Our Team" />
      <TeamCard />
    </div>
  );
};

export default TeamsPage;
