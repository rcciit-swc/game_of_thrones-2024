"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createBrowserClient } from "@supabase/ssr";

import { validate, valuesType } from "@/utils";
import { useUser } from "@/lib";

const RegForm = () => {
  const router = useRouter();

  const initialValues: valuesType = {
    username: "",
    phone: "",
    college: "",
    roll: "",
    gender: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const user = useUser((state) => state.user);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const { username, phone, college, gender, roll } = formValues;
    let toastError = 0;
    let formErrors = validate(formValues);
    if (formErrors.phone.length > 0) {
      toast.error("Phone number is invalid");
      toastError++;
    }
    if (formErrors.username.length > 0) {
      toast.error("Name is invalid");
      toastError++;
    }
    if (formErrors.roll.length > 0) {
      toast.error("Invalid College Roll");
      toastError++;
    }
    if (formErrors.college.length > 0) {
      toast.error("Invalid College Name");
      toastError++;
    }
    if (toastError > 0) {
      formErrors = {
        username: "",
        phone: "",
        college: "",
        roll: "",
        gender: "",
      };
      toastError = 0;
      return;
    }
    try {
      const { error } = await supabase
        .from("users")
        .update({ college, phone, name: username, gender, college_roll: roll })
        .eq("id", user?.id);
      if (error) {
        toast.error("There is something wrong");
        console.log(error);
        throw error;
      }
      toast.success("Form submitted successfully.");
      router.push("/events");
    } catch (error) {
      console.log("Error occurred", { error });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-screen rounded-2xl bg-[#252525] py-10"
    >
      <div className="flex flex-col gap-10 px-10">
        <div className="flex w-full flex-col items-start gap-5">
          <h1 className="my-6 font-got text-xl font-semibold tracking-wider max-md:mx-auto lg:text-3xl">
            Registration
          </h1>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            value={formValues.username}
            onChange={handleChange}
            required
            placeholder="Full Name"
            name="username"
            id="username"
            className="w-[95%] rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
          />
        </div>
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-5 md:w-[60%]">
            <label htmlFor="phone">Phone Number</label>
            <div className="flex flex-row gap-3">
              <button className="rounded-md bg-white p-3 text-black">
                +91
              </button>
              <input
                type="number"
                value={formValues.phone}
                onChange={handleChange}
                required={true}
                name="phone"
                id="phone"
                placeholder="94XXXXXXXX"
                className="w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-5">
            <label htmlFor="college">College Name</label>
            <input
              type="text"
              name="college"
              value={formValues.college}
              onChange={handleChange}
              required={true}
              id="college"
              placeholder="College Name"
              className="w-[95%] rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-5">
            <label htmlFor="roll">College Roll Number</label>
            <input
              type="text"
              name="roll"
              value={formValues.roll}
              onChange={handleChange}
              required={true}
              id="roll"
              placeholder="College Roll Number"
              className="w-[95%] rounded-md  border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="gender">Gender</label>
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-16">
              <label className="flex flex-row items-center gap-1">
                <input
                  name="gender"
                  type="radio"
                  value="male"
                  className="text-primary"
                  checked={formValues.gender === "male"}
                  onChange={handleChange}
                  required={true}
                />
                Male
              </label>
              <label className="flex flex-row items-center gap-1">
                <input
                  name="gender"
                  type="radio"
                  value="female"
                  className="text-primary"
                  checked={formValues.gender === "female"}
                  onChange={handleChange}
                  required={true}
                />
                Female
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="mx-auto w-[80%] rounded-full bg-primary py-3 font-semibold tracking-wider"
          />
        </div>
      </div>
    </form>
  );
};

export default RegForm;
