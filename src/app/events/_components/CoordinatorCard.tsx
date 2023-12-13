import React from 'react'

export const CoordinatorCard = ({event}:{event:any}) => {

  return (
    <div className='bg-[#252525] w-full  flex flex-col items-center p-5 gap-5 border-t-2 border-b-2 rounded-xl '>
        <h1 className='font-got text-xl font-semibold '>Coordinators</h1>
        <div className='flex flex-col items-start gap-2'>
        {
            event.coordinators.map((coordinator:any , index:number)=>(
                <div key={index} className='flex flex-row items-center flex-wrap'>
                    <h1  className='font-serif text-lg font-semibold'>{coordinator.name} : </h1>
                    <a href={`tel:${coordinator.phone}`} className='font-sans  hover:text-green-400  text-lg font-semibold'>&nbsp;{coordinator.phone}</a>
                </div>
            ))
        }
        </div>
    </div>
  )
}
