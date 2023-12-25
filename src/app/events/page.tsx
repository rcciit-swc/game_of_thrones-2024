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
    <>
      <div className="mx-auto max-w-[1800px] pt-[100px]">
        <SectionHeader text="Events" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-20">
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
