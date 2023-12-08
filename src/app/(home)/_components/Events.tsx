"use client";
import { useState } from "react";
import { SectionHeader } from "@/components";
import events from "@/utils/events";

const Events = () => {
  const [hover, setHover] = useState(false);
  return (
    <section>
      <div className="mx-auto w-full ">
        <SectionHeader text="Events" />

        <div className="mt-[10px] h-full w-full">
          <ul className="accordion flex-wrap">
            {
              events.map((event) => (
<li
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
                  <button className="tracking-widest hover:text-green-300 hover:scale-105 duration-300 pb-5">
                    {`Know More >>`} 
                  </button>
                </span>
              </div>
            </li>
              ))
            }
            
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Events;
