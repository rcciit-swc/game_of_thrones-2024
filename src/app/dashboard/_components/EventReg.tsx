"use client";
import { useGame } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface formDataType {
  team_lead_phone: string;
  teamName: string;
  Transaction_id: string;
}

const EventReg = () => {
  const members = 11;
  const [membersPhone, setMembersPhone] = useState<string[]>(
    Array(members).fill(""),
  );
  const [file, setFile] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<formDataType>({
    team_lead_phone: "",
    teamName: "",
    Transaction_id: "",
  });
  const gameName = useGame((state) => state.gameName);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index: number, phoneNumber: string) => {
    const updatedMembersPhone = [...membersPhone];
    updatedMembersPhone[index] = phoneNumber;
    setMembersPhone(updatedMembersPhone);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
    const { data: eventsData } = await supabase
      .from("events")
      .select()
      .eq("event_name", gameName);
    // console.log(eventData![0].id);
    const { data, error } = await supabase.from("teams").insert([
      {
        event_id: eventsData![0].id,
        team_name: formValues.teamName,
        Transaction_id: formValues.Transaction_id,
        team_lead_phone: formValues.team_lead_phone,
      },
    ]);
    const { data: teamData } = await supabase.from("teams").select("team_id");
    // console.log(teamData);
    console.log(membersPhone);
    for (const item of membersPhone) {
      const { error: participantError } = await supabase
        .from("participations")
        .insert({
          team_name: formValues.teamName,
          phone: item,
          team_id: teamData![0].team_id,
        });
    }
    if (error) {
      toast.error("There is something wrong.");
      return;
    }
    toast.success("Successfully registered, please wait for verification");
  };

  const renderInputField = (
    label: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    type = "text",
    placeholder = "",
  ) => (
    <div className="flex flex-row flex-wrap items-center gap-3">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-row items-center gap-2">
        {type === "number" && (
          <button className="rounded-md bg-white px-3 py-1 text-black">
            +91
          </button>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          required={type !== "file"}
          placeholder={placeholder}
          className="w-[60%] rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
    </div>
  );

  return (
    <form
      className="flex flex-col items-start gap-5 overflow-x-hidden rounded-md bg-[#252525] px-10 py-5 shadow-sm shadow-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold tracking-widest text-white">
        Event Registration
      </h1>

      {renderInputField(
        "Team Lead Phone",
        formValues.team_lead_phone,
        handleChange,
        "team_lead_phone",
        "number",
      )}
      {renderInputField(
        "Team Name",
        formValues.teamName,
        handleChange,
        "teamName",
      )}

      <div className="flex flex-col gap-2">
        {Array(members)
          .fill(0)
          .map((_, index) => (
            <div
              className="flex flex-col flex-wrap items-start gap-3"
              key={index}
            >
              <label htmlFor="">Member {index + 1} Phone</label>
              <div className="flex flex-row items-center gap-2">
                <button className="rounded-md bg-white px-3 py-1 text-black ">
                  +91
                </button>
                <input
                  type="text"
                  value={membersPhone[index]}
                  required
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  name=""
                  id=""
                  className="w-[70%] rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
                />
              </div>
            </div>
          ))}
      </div>

      {renderInputField(
        "Transaction ID",
        formValues.Transaction_id,
        handleChange,
        "Transaction_id",
      )}
      {renderInputField(
        "Transaction ScreenShot",
        "",
        handleFileChange,
        "Transaction_SS_filename",
        "file",
      )}

      <button className="mx-auto w-1/3 rounded-md bg-primary px-5 py-2 text-center text-base font-medium hover:bg-opacity-70">
        Submit
      </button>
    </form>
  );
};

export default EventReg;
