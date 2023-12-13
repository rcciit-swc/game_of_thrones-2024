import Image from "next/image";
import { SectionHeader } from "@/components";
import { sponsorsData } from "@/utils/constant";

export default function SponsorPage() {
  return (
    <section className="mx-auto max-w-[1600px] bg-body font-got text-neutral ">
      <SectionHeader text="SPONSORS" />
      <div className="flex flex-row flex-wrap items-center  justify-center gap-10  px-4  pb-20">
        {sponsorsData.map((sponsor, index) => {
          const sponsorName = sponsor.name.split(" ");
          return (
            <div
              key={index}
              className="mx-auto flex  max-w-xl flex-col-reverse  items-center justify-center gap-5 rounded-xl   p-1 text-center"
            >
              <h2>
                {sponsorName[0]} <br /> Partner
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
    </section>
  );
}
