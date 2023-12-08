import Image from 'next/image'
import Link from 'next/link'


const EventCard = ({event}:{event:any}) => {
  return (
        <div className='w-[300px] md:w-[450px] hover:scale-105 duration-500 h-fit pb-3 flex flex-col  rounded-2xl relative bg-primary bg-opacity-50'>
            <Image src={event.hoverImage} alt='football' className='w-full h-3/4' width={0} height={0} />
                <h1 className='text-center font-semibold font-got md:text-2xl pt-2'>{event.title}</h1>
                <p className='px-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis corrupti debitis! Voluptatum, harum nostrum, praesentium commodi nobis quaerat consequatur odit accusantium earum et obcaecati alias molestiae tempore dolor numquam!</p>
                <div className='pt-3 flex flex-row  justify-between px-5'>
                    <Link href={`/events/${event.title.toLowerCase()}`}><button className='px-2 bg-green-600 py-1 rounded-xl font-medium'>See More</button></Link>
                    <button className='px-2 bg-violet-800 py-1 rounded-xl font-medium'>Register Now</button>
                </div>
        </div>
   
  )
}

export default EventCard