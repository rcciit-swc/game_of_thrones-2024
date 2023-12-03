import Image from "next/image";
import { SectionHeader } from "@/components";
import { sponsors } from "@/utils/constant";

export default function SponsorPage() {
  return (
    <div className="mx-auto max-w-[1600px] bg-body font-got text-neutral">
      <SectionHeader text="SPONSORS" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 px-4">
        {sponsors.map((sponsor, index) => {
          return (
            <div
              key={index}
              className="mx-auto flex max-w-xl flex-col-reverse items-center justify-center gap-5 rounded-xl p-1 text-center last:mb-[100px]"
            >
              <h2>
                {sponsor.typeOfPartner}
                <br />{" "}
                {sponsor.typeOfPartner === "Banking"
                  ? "Partners"
                  : "Partner"}{" "}
              </h2>
              <div className="flex flex-row flex-wrap items-center justify-center space-x-4">
                {sponsor.sponsorImage.map((logo, subindex) => {
                  return (
                    <Image
                      key={subindex}
                      src={logo}
                      width={150}
                      height={150}
                      alt={sponsor.typeOfPartner}
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
