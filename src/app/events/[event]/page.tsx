"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { SectionHeader } from "@/components";
import { events, checkUserDetails, checkIfUserRegistered } from "@/utils";
import { useEvent, useUser, supabase } from "@/lib";

import { CoordinatorCard } from "../_components/CoordinatorCard";

const EventReg = dynamic(() => import("@/app/dashboard/_components/EventReg"), {
  ssr: false,
});

type Params = {
  params: {
    event: string;
  };
};

const fetchEvent = (eventId: string) => {
  const eventObj = events.find((event) => event.id === eventId);
  return eventObj;
};

const Page = ({ params: { event } }: Params) => {
  const user = useUser((state) => state.user);

  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const setEvent = useEvent((state) => state.setEvent);

  const eventId = decodeURIComponent(event);
  const eventObj = fetchEvent(eventId);

  const handleRegister = async () => {
    const { data } = await supabase.auth.getSession();

    const userDetails = await supabase
      .from("users")
      .select()
      .eq("id", data.session?.user.id);

    if (!checkUserDetails(userDetails?.data?.[0])) {
      toast.error("Please complete your profile first");
      router.push("/profile");
    } else {
      setOpenModal(true);
      setEvent(eventObj?.id, eventObj?.teamType);
    }
  };

  const checkEventRegistered = (eventReg: any) => {
    if (eventObj?.teamType === "Singles & Doubles") {
      const eventRegistered = eventReg?.filter(
        (event: any) => event.event_id === eventObj?.id,
      );
      if (eventRegistered?.length === 2) {
        setIsRegistered(true);
      }
    } else {
      const eventRegistered = eventReg?.filter(
        (event: any) => event.event_id === eventObj?.id,
      );
      if (eventRegistered?.length === 1) {
        setIsRegistered(true);
      }
    }
  };

  useEffect(() => {
    if (user && user.phone) {
      checkIfUserRegistered({
        phone_param: user.phone,
      }).then((data) => {
        checkEventRegistered(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="mx-auto mt-[100px] flex max-w-[1600px] flex-col items-center justify-between gap-12 overflow-x-hidden px-3 md:px-10">
        <SectionHeader text={eventObj?.title ?? ""} />

        <div className=" flex flex-row flex-wrap-reverse items-center justify-between gap-5 md:gap-10">
          <div className="flex flex-col gap-8 font-got text-xl font-semibold md:text-2xl">
            <h1>
              Registration Fees :{" "}
              <span className="font-sans font-medium">
                {eventObj?.regFees == ""
                  ? "Yet to be Announced"
                  : eventObj?.regFees}
              </span>
            </h1>
            <h1>
              Total Prize Pool :{" "}
              <span className="font-sans font-medium">
                {eventObj?.prize == ""
                  ? "Yet to be Announced"
                  : eventObj?.prize}
              </span>
            </h1>
            <h1>
              Venue :{" "}
              <span className="font-sans font-medium">
                {eventObj?.venue == ""
                  ? "Yet to be Announced"
                  : eventObj?.venue}
              </span>
            </h1>
            <h1>
              Date :{" "}
              <span className="font-sans font-medium">
                {eventObj?.date == "" ? "Yet to be Announced" : eventObj?.date}
              </span>
            </h1>

            <CoordinatorCard event={eventObj} />
          </div>

          <Image
            src={eventObj!.hoverImage}
            width={0}
            height={0}
            className="w-[700px] rounded-lg max-2xl:mx-auto md:h-[400px]"
            alt={eventObj?.title ?? "event poster"}
          />
        </div>
        <h1 className="font-got text-2xl font-semibold">Rules :</h1>
        <div
          className="rounded-2xl border-b-2 border-t-2 bg-[#252525] px-10 py-5 text-justify"
          dangerouslySetInnerHTML={{ __html: eventObj!.rules }}
        />
        {user &&
          (isRegistered ? (
            <button
              className="w-fit rounded-md bg-violet-800 px-3 py-2 font-medium"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              className="w-fit rounded-md bg-violet-800 px-3 py-2 font-medium"
              onClick={handleRegister}
            >
              Register Now
            </button>
          ))}
      </div>

      <EventReg
        openModal={openModal}
        setOpenModal={setOpenModal}
        registrationFees={eventObj?.regFees!}
      />
    </>
  );
};

export default Page;
