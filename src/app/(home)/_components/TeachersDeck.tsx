"use client";

import Image from "next/image";

import { SectionHeader } from "@/components";

export default function TeachersDesk({ value }: any) {
  return (
    <section className="text-neutral">
      <SectionHeader text={value.header} />

      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {/* Mobile Image */}
        <div className="relative block md:hidden">
          <div className="absolute z-[-10] ml-[-10px] mt-[10px] h-[250px] w-[100px] rounded-3xl bg-primary" />
          <Image
            src={value.img}
            className="h-72 w-60"
            alt="Principal"
            priority
            width={92}
            height={74}
          />
        </div>
        <div className="relative mx-2 flex w-[340px] flex-col rounded-md bg-primary md:w-[600px] lg:w-[1200px]">
          <div className="my-6 pl-8 text-2xl">Dear students,</div>
          <p
            className="px-4 text-justify text-sm md:pl-12 md:pr-72 md:text-xl"
            dangerouslySetInnerHTML={{ __html: value.speech }}
          />
          <p className="mb-6 mt-4 pl-20 text-sm font-semibold tracking-wider md:pl-56 md:text-xl">
            {value.signL1} <br /> {value.signL2}
          </p>

          {/* PC Image */}
          <div className="absolute right-[-50px] top-[40%] mt-[-180px] hidden md:block lg:right-[-50px]">
            <Image
              alt="Principal's Image"
              className="h-[390px] w-[300px] rounded-3xl"
              height={390}
              width={300}
              src={`${value.img}`}
            />
            <div className="ml-[-10px] mt-[-330px] h-[320px] w-[300px] rounded-3xl md:bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
