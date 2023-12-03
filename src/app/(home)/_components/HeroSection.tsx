import Image from "next/image";

const HeroSection = () => {
  return (
    <>
     <div className=" flex flex-row justify-evenly  lg:h-screen">
      <div className="flex flex-col lg:gap-20 xl:mt-20">
        <Image src={"/assets/hero/lefttop.svg"} className="h-[30dvh] w-[5dvw] " width={0} height={0} alt="lefttop" />
        <Image src={"/assets/hero/leftdown.svg"} className="h-[50dvh] w-[70dvw] " width={0} height={0} alt="lefttop" />
      </div>

      <div className="flex relative">
      <Image src={"/assets/hero/footballer.svg"} className="h-full w-full z-10" width={0} height={0} alt="lefttop" />
        <Image src={"/assets/hero/line-1.svg"} className="absolute w-[200%] h-[100%] z-0  " width={0} height={0} alt="lefttop" />
      </div>

      <div className="">
        
        <Image src={"/assets/hero/rightdown.svg"} className="w-[100dvw] h-[100dvh]" width={0} height={0} alt="lefttop" />
      </div>
    
     </div>
    </>
  )
}

export default HeroSection