"use client";

import { useGame, useUser } from "@/lib/store/user";
import { fetchEvents } from "@/utils/functions/fetchEvents";

import { createBrowserClient } from "@supabase/ssr";
import { Modal, Dropdown } from "flowbite-react";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface formDataType {
  team_lead_phone: string;
  teamName: string;
  Transaction_id: string;
}

const EventReg = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}) => {
  const [eventsData, setEventsData] = useState<any>([]);
  const gameName = useGame((state) => state.gameName);
  const teamType = useGame((state) => state.teamType);
  const [singleDouble, setSingleDouble] = useState<string>("Singles");

  const user = useUser((state) => state.user);

  useEffect(() => {
    const fetchEventsData = async () => {
      const events = await fetchEvents(gameName);
      setEventsData(events);
    };
    fetchEventsData();
  }, [gameName]);

  const membersMinMax = {
    min: eventsData?.min_team_member,
    max: eventsData?.max_team_member,
  };

  const [membersPhone, setMembersPhone] = useState<string[]>(
    Array(membersMinMax.max).fill(""),
  );

  const [file, setFile] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<formDataType>({
    team_lead_phone: "",
    teamName: "",
    Transaction_id: "",
  });

  const setGame = useGame((state) => state.setGame);

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
    setGame("", "");
    setFormValues({ team_lead_phone: "", teamName: "", Transaction_id: "" });
    setOpenModal(false);
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
          disabled={name === "team_lead_phone" ? true : false}
          type={type}
          name={name}
          value={name === "team_lead_phone" ? `${user?.phone}` : `${value}`}
          onChange={onChange}
          id={name}
          required={type !== "file"}
          placeholder={placeholder}
          className=" w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
        />
      </div>
    </div>
  );
  return (
    <div
      className={`${
        openModal ? "absolute" : "hidden"
      } inset-0 z-50  max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-25  md:inset-0`}
    >
      <div className="relative mx-auto my-auto flex h-screen w-full max-w-2xl items-center justify-center p-4 ">
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="pt-[10vh]"
        >
          <Modal.Header className="rounded-t-md bg-body shadow-sm shadow-white ">
            Event Registration
          </Modal.Header>

          <Modal.Body className="bg-body">
            <form
              className="flex flex-col items-start gap-5 overflow-x-hidden overflow-y-scroll rounded-md bg-[#252525] px-10 py-5 shadow-sm shadow-white"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl font-semibold tracking-widest text-white">
                Event Registration
              </h1>
              {!(teamType === "Team") && (
                <div className="overflow-hidden border-none md:ml-10">
                  <Dropdown
                    className="border-none bg-body text-white "
                    label={singleDouble}
                    dismissOnClick={false}
                  >
                    <Dropdown.Item
                      onClick={() => setSingleDouble("Singles")}
                      className="hover:bg-slate-400"
                    >
                      Singles
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setSingleDouble("Doubles")}
                      className="hover:bg-slate-400"
                    >
                      Doubles
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              )}

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
                {Array(membersMinMax.max)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className="flex flex-col flex-wrap items-start gap-3"
                      key={index}
                    >
                      <label htmlFor="">Member {index + 1} Phone</label>
                      <div className="flex flex-row items-center gap-2">
                        <button className="rounded-md bg-white px-3 py-1 text-black">
                          +91
                        </button>
                        <input
                          type="text"
                          value={index === 0 ? user?.phone : membersPhone[index]}
                          required
                          onChange={(e) =>
                            handleMemberChange(index, e.target.value)
                          }
                          disabled={index === 0 ? true : false}
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
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default EventReg;
