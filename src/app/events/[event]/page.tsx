
import { SectionHeader } from '@/components'
import events from '@/utils/events'
import fetchEvent from '@/utils/fetchEvent';
import { constructMetaData } from '@/utils/metadata';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'


export const metadata: Metadata = constructMetaData({
    title: "Events | GOT RCCIIT",
  });

type Params = {
    params:{
        event:string
    }
}
const page = ({params : {event}}:Params) => {
    const eventTitle = decodeURIComponent(event)
    console.log(eventTitle)
    const eventObj = fetchEvent(eventTitle)
  return (
    <div className='mt-[100px] px-10 justify-center  flex flex-col gap-8'>
        <SectionHeader text={eventTitle}/>
        <div className='flex flex-row flex-wrap-reverse justify-between items-center gap-8'>
        <div className='flex flex-col gap-8 text-xl md:text-2xl font-semibold font-got'>
        <h1>Registration Fees : <span className='font-sans font-medium'>{eventObj?.regFees == "" ? "Yet to be Announced"  : eventObj?.regFees}</span></h1>
       <h1>Prize : <span className='font-sans font-medium'>{eventObj?.prize == "" ? "Yet to be Announced"  : eventObj?.prize}</span></h1>
         <h1>Venue : <span className='font-sans font-medium'>{eventObj?.venue == "" ? "Yet to be Announced"  : eventObj?.venue}</span></h1>
        <h1>Date : <span className='font-sans font-medium'>{eventObj?.date == "" ? "Yet to be Announced"  : eventObj?.date}</span></h1>
        </div>
        <Image src={eventObj!.hoverImage} width={0} height={0} className='w-[800px] md:h-[400px] rounded-lg' alt={eventTitle} />
        </div>
        <h1 className='font-got text-2xl font-semibold'>Rules :</h1>
        <div className='text-start' dangerouslySetInnerHTML={{__html:eventObj!.rules}}></div>
    </div>
  )
}

export default page