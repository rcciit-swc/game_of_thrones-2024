"use client";
import React from "react";
import EventForm from "./_components/EventForm";

const EventManagement = () => {
  return (
    <div className="w-full py-24 max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Event Management</h1>
      <EventForm />
    </div>
  );
};

export default EventManagement;
