import { SectionHeader } from '@/components'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col overflow-y-scroll h-screen  w-3/4'>
        <div className='flex flex-row justify-between px-10 pt-10'>
                <h1 className='text-2xl'>Dashboard</h1>
                <div className='flex flex-row items-center gap-3'>
                <Image
                src={"/assets/dashboard/Search.svg"}
                className="w-8  cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
              <input type="text" name="" id="" className='bg-body  px-5 py-1 rounded-xl' placeholder='Search Events...' />
                </div>
                
        </div>

        <div className='flex justify-center my-auto items-center'>
            <SectionHeader text="Coming Soon" />
        </div>

    </div>
  )
}

export default Dashboard