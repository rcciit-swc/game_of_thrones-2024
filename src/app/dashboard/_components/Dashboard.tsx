"use client";
import { useUser } from "@/lib/store/user";
import { checkIfUserRegistered } from "@/utils/functions/checkIfUserRegistered";
import Image from "next/image";
import { useEffect, useState } from "react";
import events from "@/utils/events";
import { SectionHeader } from "@/components";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<any>([]);
  const user = useUser((state) => state.user);
  useEffect(() => {
    const handleDashboard = async () => {
      let registeredEvents: any = [];

      if (user && user.phone) {
        const data = await checkIfUserRegistered({ phone_param: user.phone });

        for (const event of data) {
          const matchedEvent = events.find((e) => e.id === event.event_id);

          if (matchedEvent) {
            registeredEvents.push({
              ...event,
              hoverImage: matchedEvent.hoverImage,
              teamType: matchedEvent.teamType,
            });
          }
        }
      }

      setDashboardData(registeredEvents);
    };
    handleDashboard();
  }, [user]);

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <SectionHeader text="Dashboard" />
      <div
        className=" mx-auto flex flex-col justify-center gap-10 pt-3 md:flex-row md:flex-wrap md:gap-10 md:px-20
       md:pt-10"
      >
        <>
          {dashboardData.length === 0 && (
            <h1 className="text-center text-2xl font-bold">
              You have not registered for any events yet
            </h1>
          )}
          {dashboardData.map((value: any, index: number) => (
            <div
              className="card relative w-[300px] cursor-pointer overflow-hidden rounded-md md:h-[250px] md:w-[350px]"
              key={index}
            >
              <Image
                src={value.hoverImage}
                alt="football"
                className="h-full w-full object-cover"
                width={0}
                height={0}
              />
              <div className="card-body absolute bottom-[-100%] flex h-full w-full flex-col items-center justify-center bg-[#1f3d4738] backdrop-blur-[5px] duration-500">
                <h1 className="pt-2 text-center font-got font-semibold md:text-2xl">
                  {value.event_name}
                </h1>
                {value.teamType === "Singles & Doubles" &&
                  (user?.name! === value.team_name && value.is_team_lead ? (
                    <p className="px-4 py-2">Singles</p>
                  ) : (
                    <p className="px-4 py-2">Doubles</p>
                  ))}
                <p className="px-4 py-2">
                  Verification Status:{" "}
                  <span
                    className={`${
                      value.transaction_verified
                        ? "text-green-500"
                        : "text-red-700"
                    } font-bold`}
                  >
                    {value.transaction_verified ? "Verified" : "Pending"}
                  </span>
                </p>
              </div>
            </div>
          ))}
          {/* <Link href={`/`}>
              <div className="card relative w-[300px] cursor-pointer overflow-hidden rounded-md md:h-[250px] md:w-[350px]">
                <Image
                  src={"/assets/events/badminton2.svg"}
                  alt="football"
                  className="h-full w-full object-cover"
                  width={0}
                  height={0}
                />
                <div className="card-body absolute bottom-[-100%] flex h-full w-full flex-col items-center justify-center bg-[#1f3d4738] backdrop-blur-[5px] duration-500">
                  <h1 className="pt-2 text-center font-got font-semibold md:text-2xl">
                    hi
                  </h1>
                  <p className="px-4 py-2">Volleyball</p>
                  <div className="flex flex-row justify-between gap-5  px-5 pt-3"></div>
                </div>
              </div>
            </Link> */}

          {/* <EventReg openModal={openModal} setOpenModal={setOpenModal} /> */}
        </>
      </div>
    </div>
  );
};

export default Dashboard;
