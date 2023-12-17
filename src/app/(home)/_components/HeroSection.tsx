import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-row'>
        <div className="flex flex-col mt-20 gap-10">
        <Image
          src="/assets/hero/lefttop.svg"
          className="w-14  "
          height={0}
          width={0}
          alt="lefttop"
        />
        <Image
          src="/assets/hero/leftdown.svg"
          className="h-full w-full"
          height={0}
          width={0}
          alt="lefttop"
        />
        {/* <div className="z-[30] block w-full md:hidden">
          <button className="text-md absolute left-[14%] top-[60%] rounded-xl border-2 border-neutral bg-[#2D3493] px-20 py-5 font-semibold shadow-md shadow-neutral">
            Register Now
          </button>
        </div> */}
      </div>

      <div className="relative flex flex-row ">
        <Image
          src="/assets/hero/line-1.svg"
          alt="footballer"
          className="absolute h-full w-full"
          priority
          width={0}
          height={0}
        />
        {/* <h1 className="absolute right-[2vh] top-[30vh] z-[30] flex flex-col text-lg font-medium leading-10 max-md:rotate-90 md:text-2xl lg:left-[15vh]  lg:top-[15vh]  lg:gap-8 lg:text-3xl 2xl:left-[25vh] 2xl:top-[15vh] 2xl:text-4xl">
          <span className="hidden md:block">{`“ONE FOR`}</span>
          <span className="block md:hidden">{`"ONE FOR ALL,`}</span>
          <span className="hidden md:block">{`ALL, `}</span>
          <span>{`ALL FOR ONE.”`}</span>
        </h1> */}
        <Image
          src="/assets/hero/footballer.svg"
          alt="footballer"
          className=" h-full w-full"
          width={0}
          height={0}
        />
      </div>



    </div>
  )
}

export default HeroSection