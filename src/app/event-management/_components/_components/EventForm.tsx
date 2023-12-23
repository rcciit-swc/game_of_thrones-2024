"use client";
import React from "react";

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

const EventForm = () => {
  const [formValues, setFormValues] = React.useState<valuesType>({
    name: "",
    imageUrl: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    fees: 0,
    prizePool: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action=""
      className="flex flex-col md:flex-row items-center gap-10 flex-wrap pl-10"
    >
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="name">Event Name</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required={true}
          id="name"
          placeholder="Event Name"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="imageUrl">Event Image Url</label>
        <input
          type="text"
          name="imageUrl"
          value={formValues.imageUrl}
          onChange={handleChange}
          required={true}
          id="imageUrl"
          placeholder="Event Image Url"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="description">Event Description</label>
        <input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          required={true}
          id="description"
          placeholder="Event Description"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="date">Event Date</label>
        <input
          type="text"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required={true}
          id="date"
          placeholder="Event Date"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="time">Event Time</label>
        <input
          type="text"
          name="time"
          value={formValues.time}
          onChange={handleChange}
          required={true}
          id="time"
          placeholder="Event Time"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="time">Event Venue</label>
        <input
          type="text"
          name="venue"
          value={formValues.venue}
          onChange={handleChange}
          required={true}
          id="venue"
          placeholder="Event Venue"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="fees">Registration Fees</label>
        <input
          type="text"
          name="fees"
          value={formValues.fees}
          onChange={handleChange}
          required={true}
          id="fees"
          placeholder="Registration Fees"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>

      <div className="flex flex-col items-start gap-5">
        <label htmlFor="prizePool">Prize Pool</label>
        <input
          type="text"
          name="prizePool"
          value={formValues.prizePool}
          onChange={handleChange}
          required={true}
          id="prizePool"
          placeholder="Prize Pool"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-5 py-2 rounded-xl"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
