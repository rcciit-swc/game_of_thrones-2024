import {teachers} from '@/utils/teachers'; 

export default function TeachersDesk() {
  return (
    <section className="TeachersDesk text-white">
        <div className="text-center font-got pb-10 my-8">
          <div className="text-xl md:text-3xl tracking-[5.20px]">TEACHER’S  DECK</div>
          <div className=" text-white text-opacity-10 text-xl md:text-5xl tracking-[10.40px] mt-[-30px] md:mt-[-40px]">TEACHER’S  DECK</div>
        </div>
        {teachers.map((item, index) => (
        <div className="relative pb-24">
          <div className="flex flex-col bg-primary rounded-xl w-9/10 mx-2 md:w-[750px] md:mx-auto ">
            <div className="font-['Poppins'] font-2xl my-6 pl-8">Dear students,</div>
            <div className="text-justify font-['Poppins'] px-12 md:pl-12 md:pr-96">{item.speech}</div>
            <div className="font-['Poppins'] pl-44 md:pl-56 mt-4 mb-6" dangerouslySetInnerHTML={{ __html: item.sign }}></div>
          </div>
          <div className="img absolute top-1/2 mt-[-180px] md:right-[20vw] lg:right-[30vw] hidden md:block">
            <img className="w-[220px] h-[270px] rounded-3xl" src={`${item.img}`}/>
            <div className="w-[220px] h-[270px] rounded-3xl bg-black mt-[-280px] ml-[-10px]"></div>
         </div>
        </div>
        ))}
    </section>
  );
}