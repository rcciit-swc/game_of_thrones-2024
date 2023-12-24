"use client";
import Image from "next/image";
import ProfileCard from "./ProfileCard";

const ProfileSide = () => {
  return (
    <div className="sticky top-0  overflow-y-auto  flex lg:h-screen flex-col lg:w-1/4 lg:border-r ">
      <Image
        src={"/assets/navbar/logo.svg"}
        className="hidden w-44 cursor-pointer pl-10 pt-10 transition-colors duration-500 ease-in-out hover:scale-105 md:block  "
        width={0}
        height={0}
        alt="logo"
      />
      <div className="flex flex-row-reverse  items-center md:flex-col md:gap-20 ">
        <div className="hidden flex-col  items-center gap-2  lg:flex">
          {/* <Image
            src={userData?.user_metadata?.avatar_url}
            className="w-44 cursor-pointer  pt-10 transition-colors duration-500 ease-in-out hover:scale-105"
            width={0}
            height={0}
            alt="logo"
          />
          <h1 className="text-2xl">{data?.username}</h1>
          <h1 className="text-2xl">{data?.email}</h1> */}
        </div>

        <div className=" flex items-center  gap-10 lg:flex-col lg:items-start">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/dashboard/dashboard.svg"}
              className="w-4 cursor-pointer   transition-colors duration-500 ease-in-out hover:scale-105 md:w-8  "
              width={0}
              height={0}
              alt="logo"
            />
            <h1 className="text-lg md:text-2xl">Dashboard</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/dashboard/events.svg"}
              className="w-4 cursor-pointer  transition-colors duration-500 ease-in-out hover:scale-105 md:w-8  "
              width={0}
              height={0}
              alt="logo"
            />
            <h1 className="text-lg md:text-2xl">Registered Events</h1>
          </div>
          {/* {isLoggedIn && <ProfileCard />} */}
          <div className=" absolute bottom-0 mx-auto hidden flex-row items-center  gap-3 pb-10 lg:flex">
            <Image
              src={"/assets/dashboard/logout.svg"}
              className="w-8   cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
              width={0}
              height={0}
              alt="logo"
            />
            <h1 className=" text-2xl">Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSide;
