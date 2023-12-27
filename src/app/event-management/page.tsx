"use client";
import React from "react";
import EventForm from "./_components/EventForm";

const EventManagement = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] py-24">
      <h1 className="mb-10 text-center text-3xl font-bold">Event Management</h1>
      <EventForm />
    </div>
  );
};

export default EventManagement;
