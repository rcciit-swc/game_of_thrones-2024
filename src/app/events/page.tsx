import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetaData({
  title: "Events | GOT RCCIIT",
});

const EventsPage = () => {
  return <div>eventsPage</div>;
};

export default EventsPage;
