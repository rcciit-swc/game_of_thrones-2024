import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import events from "@/utils/events";
import { SectionHeader } from "@/components";
import EventCard from "./_components/EventCard";
import RegModal from "./_components/RegModal";
import { useState } from "react";
export const metadata: Metadata = constructMetaData({
  title: "Events | GOT RCCIIT",
});

const EventsPage = () => {
  
  return (
    <>
     <div className="pt-[100px]">
      <SectionHeader text="Events" />
      <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
        {events.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
    
    </>
   
  );
};

export default EventsPage;
