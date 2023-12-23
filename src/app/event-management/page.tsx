import React from "react";
import EventForm from "./_components/EventForm";

interface valuesType {
  name: string;
  imageUrl: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  fees: number;
  prizePool: string;
}

const EventManagement = () => {
  return (
    <div className="w-full py-24">
      <h1 className="text-3xl font-bold text-center mb-10">Event Management</h1>

      <EventForm />
    </div>
  );
};

export default EventManagement;
