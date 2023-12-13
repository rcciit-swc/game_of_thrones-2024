import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({event}:{event:any}) => {
  return (
        <>
        <div className='cursor-pointer card w-[300px] md:w-[450px] rounded-2xl relative overflow-hidden'>
        <Image src={event.hoverImage} alt='football' className='w-full h-3/4' width={0} height={0} />

        <div className='card-body   absolute bottom-[-100%]  duration-500 w-full flex flex-col items-center justify-center h-full bg-[#1f3d4738] backdrop-blur-[5px]'>
        <h1 className='text-center font-semibold font-got md:text-2xl pt-2'>{event.title}</h1>
                <p className='px-4 py-2'>{event.description} Lorem ipsum dolor sit amet.</p>
                <div className='pt-3 flex flex-row gap-5  justify-between px-5'>
                    <Link href={`/events/${event.title.toLowerCase()}`}><button className='px-2 bg-green-600 py-1 rounded-xl font-medium'>See More</button></Link>
                    <button className='px-2 bg-violet-800 py-1 rounded-xl font-medium'>Register Now</button>
                </div>
        </div>

        </div>
        </>
   
  )
}

export default EventCard