import Image from 'next/image'
import React from 'react'

const Location = () => {
  return (
    <div className='flex flex-col  items-start gap-10'>
        <h1 className='font-got lg:px-10 text-primary text-2xl tracking-wider'>Location</h1>
        <div className='flex lg:px-8 flex-row gap-2 text-md'>
            <Image src="/assets/contacts/redpin.svg" height={0} width={0} className='w-8 lg:w-12' alt="location" />
            <p>Canal S Rd, Beleghata, Kolkata, West Bengal 700015 <br /> RCC Institute of Information Technology.</p>
        </div>
        <iframe className='w-[90%] mx-auto h-[300px] lg:h-[500px]  rounded-md'    loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.562428918149!2d88.39410617591764!3d22.558058533501942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02768400b479b1%3A0x5ad44b718c770205!2sRCC%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20(New%20Campus)!5e0!3m2!1sen!2sin!4v1701647880889!5m2!1sen!2sin" ></iframe>
    </div>
  )
}

export default Location