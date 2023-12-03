import Image from "next/image";
import { SectionHeader } from "@/components";

const About = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-[1600px]">
        <div className="absolute top-0 -scale-x-90 overflow-x-hidden max-lg:-left-6 md:-right-14 lg:scale-x-90">
          <Image
            src="about/vector-9-orange.svg"
            className="h-full w-full"
            alt="football"
            width={0}
            height={0}
          />
          <Image
            src="about/line.svg"
            className="absolute -right-32 top-0 h-full w-full"
            alt="football"
            width={0}
            height={0}
          />
        </div>
        <div className="relative mx-auto mt-[20px] flex w-[320px] flex-col items-center justify-center md:mt-[200px] md:w-[60%] md:space-x-20 lg:flex-row">
          <SectionHeader text="About" />
          <p className="text-justify text-sm md:text-lg">
            Game Of Thrones (GoT&apos;23), RCC Institute of Information
            Technology&apos;s Annual Sports Meet, is back as a National Inter
            College Sports Tournament in Kolkata from Feb 17 to Mar 5, 2023.
            Featuring diverse sports competitions and attractive prizes,
            GoT&apos;23 invites colleges nationwide for intense and inclusive
            contests. Beyond rivalry, it emphasizes sportsmanship and teamwork,
            offering a platform for students to showcase talents and create
            lasting memories. Don&apos;t miss the biggest sports event of the
            year – mark your calendars!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
