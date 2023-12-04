"use client";
import { SectionHeader } from '@/components'
import Image from 'next/image'
import {useState} from 'react'
import Committee from './Committee'
import Location from './Location';

const Block = () => {
    const [selected, setSelected] = useState(true);
  return (
    <div className="relative mx-auto pt-20 overflow-x-hidden pb-20">
      <SectionHeader text="Contact Us" />
      
      <div className="w-1/2 mx-auto ">
      <div className="  flex flex-row gap-1">
       <Image onClick={()=>setSelected(true)}  src={"/assets/contacts/location.svg"} className="w-20 border-b-0  border p-2 rounded-xl " height={0} width={0} alt="location" />
       <Image onClick={()=>setSelected(false)} src={"/assets/contacts/people.svg"} className="w-20 border p-2 rounded-xl " height={0} width={0} alt="location" />
   </div>
        <div className="border  px-10 py-20 rounded-xl">
        {selected ? <Location /> : <Committee />}
        </div>
     
      </div>
      
    </div>
  )
}

export default Block