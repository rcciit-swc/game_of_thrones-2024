"use client";
import { useUser } from "@/lib/store/user";
import { handleLogin } from "@/utils/functions/login";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();

  const user = useUser((state) => state.user);

  return (
    <section className="flex flex-row justify-between max-md:mt-[-14vh] max-[380px]:mt-[-10vh]">
      <div className="flex min-h-screen min-w-full flex-col ">
        <Image
          src="/assets/hero/lefttop.svg"
          className="mt-10 w-5 max-lg:mt-[24%] max-md:mt-[50%] lg:w-10 2xl:w-14  "
          height={0}
          width={0}
          alt="lefttop"
        />
        <Image
          src="/assets/hero/leftdown.svg"
          className="h-3/5 w-10/12"
          height={0}
          width={0}
          alt="lefttop"
        />
        <div className="z-[30] block w-full md:hidden">
          {user ? (
            <button
              className="text-md absolute left-[14%] top-[60%] rounded-xl border-2 border-neutral bg-[#2D3493] px-20 py-5 font-semibold shadow-md shadow-neutral"
              onClick={() => router.push("/dashboard")}
            >
              View Dashboard
            </button>
          ) : (
            <button
              className="text-md absolute left-[14%] top-[60%] rounded-xl border-2 border-neutral bg-[#2D3493] px-20 py-5 font-semibold shadow-md shadow-neutral"
              onClick={handleLogin}
            >
              Register Now
            </button>
          )}
        </div>
      </div>

      <div className="absolute flex flex-row max-md:overflow-hidden">
        <Image
          src="/assets/hero/line-1.svg"
          alt="footballer"
          className="relative h-screen w-full -scale-x-90 overflow-hidden lg:-left-10 lg:mt-14 lg:rotate-12 lg:scale-x-90  2xl:left-5 2xl:mt-0"
          priority
          width={0}
          height={0}
        />
        <h1 className="absolute right-[2vh] top-[30vh] z-[30] flex flex-col text-lg font-medium leading-10 max-md:rotate-90 md:text-2xl lg:left-[15vh]  lg:top-[15vh]  lg:gap-8 lg:text-3xl 2xl:left-[25vh] 2xl:top-[15vh] 2xl:text-4xl">
          <span className="hidden md:block">{`“ONE FOR`}</span>
          <span className="block md:hidden">{`"ONE FOR ALL,`}</span>
          <span className="hidden md:block">{`ALL, `}</span>
          <span>{`ALL FOR ONE.”`}</span>
        </h1>
        <Image
          src="/assets/hero/footballer.svg"
          alt="footballer"
          className="absolute z-20 h-screen w-full -scale-x-90 max-md:-right-10 md:-right-10 lg:-left-20 lg:-right-14 lg:scale-x-90 2xl:left-0"
          width={0}
          height={0}
        />
      </div>

      <div className=" absolute max-lg:top-[12%] top-[8%] z-30 p-4 max-md:left-1 md:w-[45%] lg:right-20">
        <div className="flex flex-col items-start gap-8 md:items-center md:gap-12 lg:gap-16">
          <div className="flex flex-row items-center gap-2">
            <Link href={"https://rcciit.org/"} target="_blank">
              <Image
                src="/assets/hero/rcc.svg"
                height={0}
                width={0}
                className=" h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                alt="rcc"
              />
            </Link>
            <div className="flex flex-col font-serif text-sm font-semibold lg:text-xl 2xl:text-3xl">
              <span>RCC Institute of</span>
              <span>Information Technology</span>
            </div>
          </div>
          <h1 className="lg:text-md font-got text-sm font-extralight md:text-lg 2xl:text-2xl">
            PRESENTS
          </h1>
          <div className="avatar flex flex-row items-center shadow-none">
            <div className=" flex flex-col flex-wrap gap-3 font-got font-semibold  md:text-3xl lg:gap-6 lg:text-5xl 2xl:text-6xl">
              <span>GAME OF</span>
              <span>THRONES</span>
            </div>
          </div>
          <div className="flex flex-col items-center font-semibold md:text-xl lg:text-2xl 2xl:text-3xl">
            <span>Inter-college state</span>
            <span>level sports fest</span>
          </div>

          {user ? (
            <button
              className="hidden rounded-xl border-2 border-neutral bg-[#2D3493] px-10 py-5 font-bold shadow-md transition-all duration-300 ease-in-out hover:bg-[#242975] hover:shadow-neutral md:block"
              onClick={() => router.push("/dashboard")}
            >
              View Dashboard
            </button>
          ) : (
            <button
              className="hidden rounded-xl border-2 border-neutral bg-[#2D3493] px-10 py-5 font-bold shadow-md transition-all duration-300 ease-in-out hover:bg-[#242975] hover:shadow-neutral md:block"
              onClick={handleLogin}
            >
              Register Now
            </button>
          )}
        </div>
      </div>

      <Image
        src="/assets/hero/rightdown.svg"
        alt="footballer"
        className="absolute z-0 h-screen w-full -scale-x-90 overflow-x-hidden max-lg:left-10 max-lg:mt-[10%] lg:-right-[48px] lg:w-[80%] lg:scale-x-90 xl:-right-[56px] 2xl:-right-[70px] min-[1700px]:-right-[84px]"
        width={0}
        height={0}
      />
    </section>
  );
};

export default Hero;
