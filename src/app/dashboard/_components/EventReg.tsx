"use client";

import { useGame, useUser } from "@/lib/store/user";
import { fetchEvents } from "@/utils/functions/fetchEvents";

import { createBrowserClient } from "@supabase/ssr";
import { Modal, Dropdown } from "flowbite-react";
import Image from "next/image";

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
  registrationFees
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  registrationFees: string;
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

  const [membersPhone, setMembersPhone] = useState<string[]>(() => {
    const initialArray = Array(membersMinMax.max).fill("");
    if (user?.phone!) {
      initialArray[0] = user.phone;
    }
    return initialArray;
  });

  const [file, setFile] = useState<File | null>(null);
  const [formValues, setFormValues] = useState<formDataType>({
    team_lead_phone: user?.phone!,
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


    const { data, error } = await supabase.from("teams").insert([
      {
        event_id: eventsData![0].id,
        team_name: formValues.teamName,
        Transaction_id: formValues.Transaction_id,
        team_lead_phone: user?.phone!,
      },
    ]);

    const { data: teamData } = await supabase
      .from("teams")
      .select("team_id")
      .eq("event_id", eventsData![0].id)
      .eq("team_name", formValues.teamName)
      .eq("team_lead_phone", user?.phone!);

    const { data: uploadFile, error: uploadError } = await supabase.storage
      .from("got_2024")
      .upload(`transactions/${teamData?.[0].team_id}.png`, file!);

    if (uploadError) {
      toast.error("Screenshot upload failed,Please Contact Admin");
    }
    if (uploadFile) {
      const { data: updateFileName, error: updateError } = await supabase
        .from("teams")
        .update({ Transaction_SS_filename: `${teamData?.[0].team_id}.png` })
        .eq("team_id", teamData?.[0].team_id);
      toast.success("Screenshot uploaded successfully");
    }

    membersPhone[0] = user?.phone!;

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
    setFormValues({
      team_lead_phone: user?.phone!,
      teamName: "",
      Transaction_id: "",
    });
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
        {type !== "file" && (
          <input
            disabled={name === "team_lead_phone" ? true : false}
            type={type}
            name={name}
            value={name === "team_lead_phone" ? `${user?.phone}` : `${value}`}
            onChange={onChange}
            id={name}
            required
            placeholder={placeholder}
            className=" w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
          />
        )}
        {type === "file" && (
          <input
            type={type}
            name={name}
            onChange={onChange}
            id={name}
            required
            placeholder={placeholder}
            className=" w-full rounded-md border-b border-slate-400 bg-transparent px-5 py-1 placeholder:text-slate-400 md:w-[80%]"
          />
        )}
      </div>
    </div>
  );
  return (
    <div
      className={`${
        openModal ? "absolute" : "hidden"
      } inset-0 z-50  max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-opacity-25  md:inset-0`}
    >
      <div className="relative mx-auto my-auto flex w-full max-w-2xl items-center justify-center p-4">
        <Modal
          show={openModal}
          onClose={() => {
            setOpenModal(false);
            setSingleDouble("Singles");
          }}
          className="pt-[10vh]"
        >
          <Modal.Header className="rounded-t-md bg-body shadow-sm shadow-white ">
            Event Registration
          </Modal.Header>

          <Modal.Body className="rounded-md bg-body">
            <form
              className="flex h-[calc(100vh-30vh)] flex-col items-start gap-5 overflow-x-hidden overflow-y-scroll rounded-md bg-[#252525] px-10 py-5 shadow-sm shadow-white"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl font-semibold tracking-widest text-white">
                Event Registration
              </h1>
              {!(teamType === "Team") && (
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
              )}

              {renderInputField(
                `${
                  singleDouble === "Singles" ? "Your Phone" : "Team Lead Phone"
                }`,
                formValues.team_lead_phone,
                handleChange,
                "team_lead_phone",
                "number",
              )}
              {renderInputField(
                `${singleDouble === "Singles" ? "Your Name" : "Team Name"}`,
                formValues.teamName,
                handleChange,
                "teamName",
              )}

              <div className="flex flex-col gap-2">
                {Array(
                  singleDouble === "Singles"
                    ? membersMinMax.min
                    : membersMinMax.max,
                )
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className="flex flex-col flex-wrap items-start gap-3"
                      key={index}
                    >
                      <label htmlFor="">
                        {singleDouble === "Singles"
                          ? "Your Phone Number"
                          : `Member ${index + 1} Phone`}
                      </label>
                      <div className="flex flex-row items-center gap-2">
                        <button className="rounded-md bg-white px-3 py-1 text-black">
                          +91
                        </button>
                        <input
                          type="text"
                          value={
                            index === 0 ? user?.phone : membersPhone[index]
                          }
                          required={
                            index > membersMinMax.min - 1 ? false : true
                          }
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

              <div className="flex flex-col items-center gap-2 rounded-md border-2 border-slate-400 p-2">
                <Image
                  src={`/assets/registration/payment_qr.png`}
                  alt="qr"
                  width={200}
                  height={200}
                />
                <span className="text-center">
                  UPI ID:{" "}
                  <span className="font-semibold">iamtridibes@paytm</span>
                </span>
                <span className="text-center">
                  Scan this QR code and pay the registration fee of ₹ &nbsp;
                  {registrationFees} to the UPI ID given below.
                </span>
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
