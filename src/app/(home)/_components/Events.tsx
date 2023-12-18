/* eslint-disable @next/next/no-img-element */
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
          <ul className="oveflow-x-scroll accordion gap-2 hidden justify-center xl:flex">
            {events.map((event, index) => (
              <li
                key={index}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src={`${hover ? event.hoverImage : event.image} `}
                  className=""
                  height={0}
                  width={0}
                  alt="image"
                />
                <div className="content  ">
                  <span className="flex flex-col items-center justify-around bg-white bg-opacity-10">
                    <div className="py-5">
                      <h2 className="text-center font-got text-xl font-semibold">
                        {event.title}
                      </h2>
                      <p className="text-center">Description</p>
                    </div>
                    <Link href={`/events/${event.title.toLowerCase()}`}>
                      <button className="pb-5 tracking-widest duration-300 hover:scale-105 hover:text-green-300">
                        {`Know More >>`}
                      </button>
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mx-auto   flex max-w-[1600px] flex-wrap items-center justify-center gap-16 rounded-2xl   xl:hidden">
            {events.map((event, index) => (
              <div key={index}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Events;
