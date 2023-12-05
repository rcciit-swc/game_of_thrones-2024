import Image from 'next/image'
import React from 'react'

const ProfileSide = () => {
  return (
    <div className='w-1/4 border-r sticky h-screen flex flex-col '>
     <Image
                src={"/assets/navbar/logo.svg"}
                className="w-44 pl-10 pt-10 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
              <div className='flex flex-col items-center gap-20 '>
              <div className='flex flex-col items-center  gap-2'>
                <Image
                src={"/assets/dashboard/blank.svg"}
                className="w-44  pt-10 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
              <h1 className='text-2xl'>User</h1>
              <h1 className='text-2xl'>IT2021XX/XX</h1>
                </div>

                <div className='flex flex-col items-start gap-10'>
                    <div className='flex flex-row gap-3 items-center'>
                    <Image
                src={"/assets/dashboard/dashboard.svg"}
                className="w-8   cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
                <h1 className='text-2xl'>Dashboard</h1>
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                    <Image
                src={"/assets/dashboard/events.svg"}
                className="w-8   cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
                <h1 className='text-2xl'>Registered Events</h1>
                    </div>
                   
                    <div className='flex flex-row gap-3 items-center mx-auto  absolute bottom-0 pb-10'>
                    <Image
                src={"/assets/dashboard/logout.svg"}
                className="w-8   cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
                <h1 className='text-2xl'>Logout</h1>
                    </div>
                
                </div>
              
              </div>
                
              

</div>
  )
}

export default ProfileSide