import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const About = () => {
  const poppinsFont = {
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div className="relative  mb-40 ">
        <div className="absolute -scale-x-90   lg:scale-x-90 max-lg:-left-10 -right-14 top-0 overflow-x-hidden">
            <Image src={"/assets/about/vector-9-orange.svg"} className=" w-full h-full" alt="football" width={0} height={0} />
            <Image src={"/assets/about/line.svg"} className="w-full h-full absolute top-0 -right-32" alt="football" width={0} height={0} />
        </div>
      <div className="relative top-36 flex flex-col lg:flex-row items-center justify-center w-[60%] gap-20 mx-auto">
        <SectionHeader text="About" size="5xl" />
        <p className="text-lg ">
          Game Of Thrones (GoT'23), RCC Institute of Information Technology's
          Annual Sports Meet, is back as a National Inter College Sports
          Tournament in Kolkata from Feb 17 to Mar 5, 2023. Featuring diverse
          sports competitions and attractive prizes, GoT'23 invites colleges
          nationwide for intense and inclusive contests. Beyond rivalry, it
          emphasizes sportsmanship and teamwork, offering a platform for
          students to showcase talents and create lasting memories. Don't miss
          the biggest sports event of the year – mark your calendars!
        </p>
      </div>
    </div>
  );
};

export default About;
