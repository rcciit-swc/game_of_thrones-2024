import Image from 'next/image'
import React from 'react'
import RegForm from './_components/RegForm'

const page = () => {
  return (
    <div className='pt-20  flex flex-col lg:flex-row justify-center  items-start '>
       <div className='flex w-full md:w-1/2 flex-col  items-start  gap-10'>
       <Image
                src={"/assets/navbar/logo.svg"}
                className="w-36 cursor-pointer max-md:mx-auto transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
        <h1 className='font-got max-md:mx-auto text-xl lg:text-3xl font-semibold tracking-wider'>Registration</h1>
        <RegForm />
        
       </div>
       <div className='bg-primary'>
       <Image
                src={"/assets/registration/reg.svg"}
                className="w-full cursor-pointer  "
                width={0}
                height={0}
                alt="logo"
              />
       </div>
      
    </div>
  )
}

export default page