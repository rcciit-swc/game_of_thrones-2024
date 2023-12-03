import {teachers} from '@/utils/teachers'; 
import SectionHeader from '../common/SectionHeader';
import Image from 'next/image';

export default function TeachersDesk() {
  return (
    <section className="TeachersDesk text-white ">
      <SectionHeader text="Principal's Deck" size='4xl' />
        {/* <div className="text-center font-got pb-10 my-8">
          <div className="text-xl md:text-3xl tracking-[5.20px]">TEACHER’S  DECK</div>
          <div className=" text-white text-opacity-10 text-xl md:text-5xl tracking-[10.40px] mt-[-30px] md:mt-[-40px]">TEACHER’S  DECK</div>
        </div> */}
        {teachers.map((item, index) => (
        <div key={index}  className="relative pb-10">
          <div className='flex  items-center flex-col lg:flex-row gap-8  justify-center'>
            {/* Mobile Image */}
            <div className='md:hidden block'>
              <Image src="/principal.png" className='w-60 h-72' alt="Principal" width={92} height={74} />
            </div>
          <div className="flex flex-col bg-primary rounded-xl w-9/10 mx-2 md:w-[600px] lg:w-[800px] ">
            <div className="font-['Poppins'] 2xl text-2xl my-6 pl-8">Dear students,</div>
            <div className="text-justify font-['Poppins'] px-12 text-xl md:pl-12 md:pr-96">{item.speech}</div>
            <div className="font-['Poppins'] text-xl font-semibold tracking-wider pl-44 md:pl-56 mt-4 mb-6" dangerouslySetInnerHTML={{ __html: item.sign }}></div>
          </div>
         {/* PC Image */}
          <div className=" absolute top-[40%] mt-[-180px] md:right-[20vw] lg:right-[25vw] hidden md:block">
            <img className="w-[300px] h-[320px] rounded-3xl" src={`${item.img}`}/>
            <div className="w-[300px] h-[320px] rounded-3xl bg-black mt-[-330px] ml-[-10px]"></div>
         </div>


          </div>
          
        </div>
        ))}
    </section>
  );
}