import { Metadata } from "next";

import { constructMetaData } from "@/utils";
import { SectionHeader } from "@/components";

export const metadata: Metadata = constructMetaData({
  title: "Our Team | GOT RCCIIT",
});

const TeamsPage = () => {
  return (
    <div className="mt-[60px] ">
      <SectionHeader text="Our Team" />
      <div className="flex flex-col items-center justify-center ">
        <SectionHeader text="Coming Soon" />
      </div>
    </div>
  );
};

export default TeamsPage;
