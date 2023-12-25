"use client";
import { useState } from "react";

interface formDataType {
  team_lead_phone: string;
  teamName: string;
  Transaction_id: string;
}
const EventReg = () => {
  const members = 11;
  const [membersPhone, setMembersPhone] = useState<any>([]);
  const [file, setFile] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<formDataType>({
    team_lead_phone: "",
    teamName: "",
    Transaction_id: "",
  });
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleMemberChange = (index: number, phoneNumber: string) => {
    const updatedMembersPhone = [...membersPhone];
    updatedMembersPhone[index] = phoneNumber;
    setMembersPhone(updatedMembersPhone);
  };

  return (
    <form className="flex flex-col items-start gap-5 px-10 py-5 bg-[#252525] rounded-md overflow-y-scroll  overflow-x-hidden">
      <h1 className="text-white font-semibold text-2xl tracking-widest">
        Event Registration
      </h1>
      <div className="flex flex-row items-center flex-wrap gap-3">
        <label htmlFor="team_lead_phone">Team Lead Phone</label>
        <div className="flex flex-row items-center gap-2">
          <button className="rounded-md bg-white px-3 py-1 text-black ">
            +91
          </button>
          <input
            type="number"
            name="team_lead_phone"
            value={formValues.team_lead_phone}
            onChange={handleChange}
            id="team_lead_phone"
            className="rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 w-[60%] md:w-[80%]"
          />
        </div>
      </div>

      <div className="flex flex-row items-center flex-wrap gap-3">
        <label htmlFor="team_name">Team Name</label>
        <input
          type="text"
          name="team_name"
          value={formValues.teamName}
          onChange={handleChange}
          id="team_name"
          className="rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 w-[60%] md:w-[80%]"
        />
      </div>
      <div className="flex flex-col gap-2">
        {Array(members)
          .fill(0)
          .map((_, index) => (
            <div
              className="flex flex-col items-start flex-wrap gap-3"
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
                  className="rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 w-[70%] md:w-[80%]"
                />
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-start flex-wrap gap-3">
        <label htmlFor="Transaction_id">Transaction ID</label>
        <input
          type="text"
          value={formValues.Transaction_id}
          onChange={handleChange}
          name="Transaction_id"
          id="Transaction_id"
          className="rounded-md border-b w-[50%] border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <div className="flex flex-row items-center flex-wrap gap-3">
        <label htmlFor="Transaction_SS_filename">Transaction ScreenShot </label>
        <input
          type="file"
          name="Transaction_SS_filename"
          onChange={handleFileChange}
          id="Transaction_SS_filename"
          className="rounded-md border-b w-[60%] border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
      <button className="mx-auto w-1/3 bg-primary rounded-md py-2 px-5 font-medium text-base text-center hover:bg-opacity-70 ">
        Submit
      </button>
    </form>
  );
};

export default EventReg;
