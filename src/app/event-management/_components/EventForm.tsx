"use client";
import { createBrowserClient } from "@supabase/ssr";
import dynamic from "next/dynamic";
import React, { useMemo, useState, ChangeEvent, FormEvent } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface valuesType {
  name: string;
  imageUrl: string;
  description: string;
  minMembers: number;
  maxMembers: number;
  fees: number;
  gender: string;
}

const EventForm = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const [formValues, setFormValues] = useState<valuesType>({
    name: "",
    imageUrl: "",
    description: "",
    minMembers: 0,
    maxMembers: 0,
    fees: 0,
    gender: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("events").insert({
        fest_name: "Game of Thrones",
        year: 2024,
        event_name: formValues.name,
        event_image_url: formValues.imageUrl,
        desc: formValues.description,
        min_team_member: formValues.minMembers,
        max_team_member: formValues.maxMembers,
        registration_fees: formValues.fees,
      });
      if (error) {
        toast.error("Error occurred while adding event.");
      } else {
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
  ];

  const inputField = (
    label: string,
    name: keyof valuesType,
    type: string,
    placeholder: string,
  ) => (
    <div className="flex flex-col items-start gap-5">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={formValues[name]}
        onChange={handleChange}
        required={true}
        id={name}
        placeholder={placeholder}
        className="w-[95%] rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap items-center gap-10 px-10 md:flex-row"
    >
      {inputField("Event Name", "name", "text", "Event Name")}
      {inputField("Event Image Url", "imageUrl", "text", "Event Image Url")}
      {inputField("Minimum Members", "minMembers", "text", "Minimum Members")}
      {inputField("Maximum Members", "maxMembers", "text", "Maximum Members")}
      {inputField("Registration Fees", "fees", "number", "Registration Fees")}

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="gender">Gender</label>
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-16">
          {["male", "female", "mixed"].map((gen) => (
            <label key={gen} className="flex flex-row items-center gap-1">
              <input
                name="gender"
                type="radio"
                value={gen}
                className="text-primary"
                checked={formValues.gender === gen}
                onChange={handleChange}
                required={true}
              />
              {gen.charAt(0).toUpperCase() + gen.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={formValues.description}
        modules={modules}
        formats={formats}
        onChange={(value: any) =>
          setFormValues({ ...formValues, description: value })
        }
        className="w-full rounded-md border-b border-slate-400 bg-transparent bg-white p-5 text-black  placeholder:text-slate-400 md:w-full"
      />

      <button
        type="submit"
        className="rounded-md bg-primary px-5 py-2 text-white"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
