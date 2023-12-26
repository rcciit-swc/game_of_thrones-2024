"use client";
import { SectionHeader } from "@/components";
import events from "@/utils/events";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CoordinatorCard } from "../_components/CoordinatorCard";
import { useGame, useUser } from "@/lib/store/user";
import EventReg from "@/app/dashboard/_components/EventReg";
import { useRouter } from "next/navigation";
import { checkUserDetails } from "@/utils/functions/checkUserDetails";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase-client";
import { checkIfUserRegistered } from "@/utils/functions/checkIfUserRegistered";

type Params = {
  params: {
    event: string;
  };
};

const fetchEvent = (eventdata: any) => {
  const eventObj = events.find(
    (event) => event.title.toLowerCase() === eventdata.toLowerCase(),
  );
  return eventObj;
};

const checkEventRegistered = (eventTitle: any) => {};

const Page = ({ params: { event } }: Params) => {
  const user = useUser((state) => state.user);

  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const setGame = useGame((state) => state.setGame);

  const eventTitle = decodeURIComponent(event);
  const eventObj = fetchEvent(eventTitle);

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
      setGame(eventObj?.title, eventObj?.teamType);
    }
  };

  useEffect(() => {
    if (user && user.phone) {
      checkIfUserRegistered({
        phone_param: user.phone,
      }).then((data) => {
        console.log(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="mx-auto mt-[100px] flex max-w-[1600px] flex-col items-center justify-between gap-12 overflow-x-hidden px-3 md:px-10">
        <SectionHeader text={eventTitle} />

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
            alt={eventTitle}
          />
        </div>
        <h1 className="font-got text-2xl font-semibold">Rules :</h1>
        <div
          className="rounded-2xl border-b-2 border-t-2 bg-[#252525] px-10 py-5 text-justify"
          dangerouslySetInnerHTML={{ __html: eventObj!.rules }}
        />
        {user && (
          <button
            className="w-fit rounded-md bg-violet-800 px-3 py-2 font-medium"
            onClick={handleRegister}
          >
            Register Now
          </button>
        )}
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
