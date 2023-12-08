"use client";
import { useState } from "react";
import { SectionHeader } from "@/components";
import events from "@/utils/events";
import Link from "next/link";
import Image from "next/image";
import EventCard from "@/app/events/_components/EventCard";

const Events = () => {
  const [hover, setHover] = useState(false);
  
  return (
    <section>
      <div className="mx-auto max-w-full ">
        <SectionHeader text="Events" />
        <div className={`mt-[10px] h-full w-full`}>
         <ul className="xl:flex justify-center hidden accordion flex-wrap">
            {
              events.map((event , index) => (
              <li key={index}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={`${
                  hover
                    ? event.hoverImage
                    : event.image
                } `}
                className=""
                height={0}
                width={0}
                alt="image"
              />
              <div className="content  ">
                <span className="flex flex-col items-center justify-around bg-white bg-opacity-10">
                  <div className="py-5">
                    <h2 className="text-xl font-semibold font-got text-center">{event.title}</h2>
                    <p className="text-center">Description</p>
                  </div>
                  <Link href={`/events/${event.title.toLowerCase()}`}><button className="tracking-widest hover:text-green-300 hover:scale-105 duration-300 pb-5">
                    {`Know More >>`} 
                  </button></Link>
                </span>
              </div>
            </li>
              ))
            }
            
          </ul>
           <div className="xl:hidden  max-w-[1600px] flex flex-wrap items-center justify-center gap-16 rounded-2xl   mx-auto">
           {
             events.map((event , index) => (
               <div>
                  <EventCard key={index} event={event} />
               </div>
             ))
           }
          </div>
          
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Events;
