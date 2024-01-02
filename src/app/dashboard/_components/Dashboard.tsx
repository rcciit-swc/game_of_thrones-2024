"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@/lib";
import { checkIfUserRegistered, events } from "@/utils";
import { SectionHeader } from "@/components";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<any>([]);
  const user = useUser((state) => state.user);
  useEffect(() => {
    const handleDashboard = async () => {
      const data = await checkIfUserRegistered({
        phone_param: user?.phone!,
      });
      const eventIdsInArr2 = new Set(data.map((d: any) => d.event_id));
      const new_events = events
        .filter((d) => eventIdsInArr2.has(d.id))
        .map((item) => ({
          ...item,
          transaction_verified: data.find((d: any) => d.event_id === item.id)
            .transaction_verfied,
        }));
      console.log(new_events);
      setDashboardData(new_events);
    };
    handleDashboard();
  }, [user]);
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto">
      <SectionHeader text="Dashboard" />
      <div className="md: sticky mx-auto flex flex-col justify-between pt-3 md:flex-col md:px-10 md:pt-10">
        <div className="flex flex-row items-center gap-3">
          <>
          {dashboardData.length === 0 && (
            <h1 className="text-center text-2xl font-bold">
              You have not registered for any events yet
            </h1>
          )}
            {dashboardData.map((value: any, index: number) => (
              <Link href={`/`} key={index}>
                <div className="card relative w-[300px] cursor-pointer overflow-hidden rounded-md md:h-[250px] md:w-[350px]">
                  <Image
                    src={value.hoverImage}
                    alt="football"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                  />
                  <div className="card-body absolute bottom-[-100%] flex h-full w-full flex-col items-center justify-center bg-[#1f3d4738] backdrop-blur-[5px] duration-500">
                    <h1 className="pt-2 text-center font-got font-semibold md:text-2xl">
                      {value.title}
                    </h1>
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
              </Link>
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
    </div>
  );
};

export default Dashboard;
