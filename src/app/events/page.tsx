import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import events from "@/utils/events";
import { SectionHeader } from "@/components";
import EventCard from "./_components/EventCard";
export const metadata: Metadata = constructMetaData({
  title: "Events | GOT RCCIIT",
});

const EventsPage = () => {
  return (
    <div className="pt-[100px]">
     <SectionHeader text="Events" />
     <div className="flex flex-row flex-wrap gap-20 justify-center items-center">
     {
        events.map((event , index) => (
          <EventCard key={index} event={event} />
        ))
     }
     </div>
     
    </div>
    );
};

export default EventsPage;
