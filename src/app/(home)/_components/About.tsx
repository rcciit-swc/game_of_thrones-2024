import Image from "next/image";
import { SectionHeader } from "@/components";

const About = () => {
  return (
    <section className="relative max-[550px]:-mt-[21vh]    md:-mt-[4vh] lg:mt-0">
      <div className="mx-auto max-w-[1600px]">
        <div className="absolute top-0 -scale-x-90 overflow-x-hidden max-lg:-left-6 md:-right-10 lg:-right-[54px]  md:scale-x-90">
          <Image
            src="/assets/about/vector-9-orange.svg"
            className="h-full w-full"
            alt="football"
            width={0}
            height={0}
          />
          <Image
            src="/assets/about/line.svg"
            className="absolute -right-32 top-0 h-full w-full"
            alt="football"
            width={0}
            height={0}
          />
        </div>
        <div className="relative mx-auto mt-[20px] flex w-[320px] flex-col items-center justify-center md:mt-[200px] md:w-[60%] lg:flex-row lg:space-x-20">
          <SectionHeader text="About" />
          <p className="text-justify text-sm md:text-lg">
            Game Of Thrones (GOT&apos;24), RCC Institute of Information
            Technology&apos;s Annual Sports Meet, is back as a National Inter
            College Sports Tournament in Kolkata happening in January 2024.
            Featuring diverse sports competitions and attractive prizes,
            GoT&apos;23 invites colleges nationwide for intense and inclusive
            contests. Beyond rivalry, it emphasizes sportsmanship and teamwork,
            offering a platform for students to showcase talents and create
            lasting memories. Don&apos;t miss the biggest sports event of the
            year – mark your calendars!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
