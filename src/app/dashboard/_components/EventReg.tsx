"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Modal, Dropdown } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import * as Sentry from "@sentry/nextjs";

import { useEvent, useUser, supabase } from "@/lib";
import {
  fetchEvents,
  validateTeamPhoneNumbers,
  SINGLES,
  DOUBLES,
  TEAM,
} from "@/utils";

interface formDataType {
  team_lead_phone: string;
  teamName: string;
  transaction_id: string;
}

const EventReg = ({
  openModal,
  setOpenModal,
  registrationFees,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  registrationFees: string;
}) => {
  const user = useUser((state) => state.user);
  const router = useRouter();

  const [eventsData, setEventsData] = useState<any>([]);
  const eventId = useEvent((state) => state.eventId);
  const teamType = useEvent((state) => state.teamType);
  const [singleDouble, setSingleDouble] = useState<string>(SINGLES);

  useEffect(() => {
    const fetchEventsData = async () => {
      const events = await fetchEvents(eventId);
      setEventsData(events);
    };
    fetchEventsData();
  }, [eventId]);

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
    transaction_id: "",
  });

  const setEvent = useEvent((state) => state.setEvent);

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

    const teamId = uuidv4();

    const { data: uploadFile, error: uploadError } = await supabase.storage
      .from("fests")
      .upload(
        `Game of Thrones/2024/${eventId}/transactions/${teamId}.png`,
        file!,
      );

    if (uploadError) {
      toast.error("File upload failed! Register Again!");
      Sentry.captureException(uploadError);
      return;
    }

    const regexPhone =
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let toastError = 0;

    if (!regexPhone.test(formValues.team_lead_phone)) {
      toast.error("Invalid Phone Number");
      toastError++;
    }

    if (formValues.teamName === user?.name) {
      toast.error("Team name cannot be your name");
      toastError++;
    }

    const checkTeamPhone = validateTeamPhoneNumbers(membersPhone);
    if (checkTeamPhone === 1) {
      toast.error("One of your team member's phone is invalid");
      toastError++;
    }

    if (toastError > 0) {
      setFormValues({
        team_lead_phone: user?.phone!,
        teamName: "",
        transaction_id: "",
      });
      toastError = 0;
      return;
    }

    if (uploadFile) {
      const { error: teamsInsertError } = await supabase.from("teams").insert([
        {
          event_id: eventId,
          team_name:
            singleDouble === SINGLES ? user?.name : formValues.teamName,
          transaction_id: formValues.transaction_id,
          team_lead_phone: user?.phone!,
          team_id: teamId,
          transaction_ss_filename: `${teamId}.png`,
        },
      ]);

      if (teamsInsertError) {
        toast.error("Error uploading registration details! Register Again!");
        Sentry.captureException(teamsInsertError);
        return;
      }
    }

    const postTeamMembers = [];

    const temp = membersPhone.splice(1, membersPhone.length - 1);

    for (const item of temp) {
      postTeamMembers.push(
        supabase.from("participations").insert({
          phone: item,
          team_id: teamId,
        }),
      );
    }

    const response = await Promise.all(postTeamMembers);

    response.forEach(({ error }) => {
      if (error) {
        Sentry.captureException(error);
      }
    });

    toast.success("Successfully registered, please wait for verification");

    setOpenModal(false);

    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
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
            disabled={
              (name === "team_lead_phone" || "team_name") &&
              name !== "transaction_id"
                ? singleDouble === SINGLES && teamType !== TEAM
                  ? true
                  : false
                : false
            }
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
      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          setSingleDouble(SINGLES);
        }}
        style={{
          backdropFilter: "blur(2px) contrast(80%) brightness(80%)",
          height: "auto",
        }}
      >
        <Modal.Header className="rounded-t-md bg-body shadow-sm shadow-white ">
          Event Registration
        </Modal.Header>

        <Modal.Body className="rounded-md bg-body">
          <form
            className="flex h-[calc(100vh-30vh)] flex-col items-start gap-5 overflow-x-hidden overflow-y-scroll rounded-b-md bg-[#252525] px-10 py-5 shadow-sm shadow-white"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-semibold tracking-widest text-white">
              Event Registration
            </h1>
            {!(teamType === TEAM || teamType === SINGLES) && (
              <Dropdown
                className="border-none bg-body text-white "
                label={singleDouble}
                dismissOnClick={false}
              >
                <Dropdown.Item
                  onClick={() => setSingleDouble(SINGLES)}
                  className="hover:bg-slate-400"
                >
                  Singles
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSingleDouble(DOUBLES)}
                  className="hover:bg-slate-400"
                >
                  Doubles
                </Dropdown.Item>
              </Dropdown>
            )}

            {renderInputField(
              `${
                singleDouble === SINGLES && teamType !== TEAM
                  ? "Your Phone"
                  : "Team Lead Phone"
              }`,
              formValues.team_lead_phone,
              handleChange,
              "team_lead_phone",
              "number",
            )}
            {renderInputField(
              `${
                singleDouble === SINGLES && teamType !== TEAM
                  ? "Your Name"
                  : "Team Name/College Name"
              }`,
              `${
                singleDouble === SINGLES && teamType !== TEAM
                  ? user?.name
                  : formValues.teamName
              }`,
              handleChange,
              "teamName",
            )}

            <div className="flex flex-col gap-2">
              {Array(
                singleDouble === SINGLES && teamType !== TEAM
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
                      {singleDouble === SINGLES && teamType !== TEAM
                        ? "Your Phone Number"
                        : `Member ${index + 1} Phone`}
                    </label>
                    <div className="flex flex-row items-center gap-2">
                      <button className="rounded-md bg-white px-3 py-1 text-black">
                        +91
                      </button>
                      <input
                        type="text"
                        value={index === 0 ? user?.phone : membersPhone[index]}
                        required={index > membersMinMax.min - 1 ? false : true}
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
                UPI ID: <span className="font-semibold">iamtridibes@paytm</span>
              </span>
              <span className="text-center">
                Scan this QR code and pay the registration fee of ₹ &nbsp;
                {registrationFees} to the UPI ID given below.
              </span>
            </div>

            {renderInputField(
              "Transaction id",
              formValues.transaction_id,
              handleChange,
              "transaction_id",
            )}
            {renderInputField(
              "Transaction ScreenShot",
              "",
              handleFileChange,
              "transaction_ss_filename",
              "file",
            )}

            <button className="mx-auto rounded-md bg-primary px-5 py-2 text-center text-base font-medium hover:bg-opacity-70 md:w-1/3">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventReg;
