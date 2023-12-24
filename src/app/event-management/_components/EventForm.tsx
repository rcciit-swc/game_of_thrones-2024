"use client";
import { createBrowserClient } from "@supabase/ssr";
import React, { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";

interface valuesType {
  name: string;
  imageUrl: string;
  description: string;
  minMembers: number;
  maxMembers: number;
  fees: number;
}

const EventForm = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const [formValues, setFormValues] = React.useState<valuesType>({
    name: "",
    imageUrl: "",
    description: "",
    minMembers: 0,
    maxMembers: 0,
    fees: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {data,error} = await supabase.from("events").insert({
        fest_name: "Game of Thrones",
        year: 2024,
        event_name: formValues.name,
        event_image_url: formValues.imageUrl,
        desc: formValues.description,
        min_team_member: formValues.minMembers,    
        max_team_member: formValues.maxMembers,
        registration_fees: formValues.fees,
      });
      if (error){
        toast.error("Error occurred while adding event.");
      }
      else{
        toast.success("Event added successfully.");
      }
    } catch (error) {
      console.log("Error occurred", { error });
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: "1" },
            { header: "2" },
            { header: [3, 4, 5, 6] },
            { font: [] },
          ],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link"],
          ["clean"],
        ],
      },
    }),
    [],
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "color",
    "background",
    "align",
    "link",
    "image",
    "video",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-10 flex-wrap px-10"
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
        <label htmlFor="minMembers">Minimum Members</label>
        <input
          type="text"
          name="minMembers"
          value={formValues.minMembers}
          onChange={handleChange}
          required={true}
          id="minMembers"
          placeholder="Minimum Members"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="maxMembers">Maximum Members</label>
        <input
          type="text"
          name="maxMembers"
          value={formValues.maxMembers}
          onChange={handleChange}
          required={true}
          id="maxMembers"
          placeholder="Maximum Members"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <label htmlFor="fees">Registration Fees</label>
        <input
          type="number"
          name="fees"
          value={formValues.fees}
          onChange={handleChange}
          required={true}
          id="fees"
          placeholder="Registration Fees"
          className="w-[95%] rounded-xl  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>

      <ReactQuill
        theme="snow"
        value={formValues.description}
        modules={modules}
        formats={formats}
        onChange={(value) =>
          setFormValues({ ...formValues, description: value })
        }
        className="w-full rounded-xl text-black bg-white border-b border-slate-400 bg-transparent p-5  placeholder:text-slate-400 md:w-full"
      />

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
