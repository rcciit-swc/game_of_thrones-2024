import React from "react";

export const CoordinatorCard = ({ event }: { event: any }) => {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-md border-b-2 border-t-2 bg-[#252525] p-5 ">
      <h1 className="font-got text-xl font-semibold ">Coordinators</h1>
      <div className="flex flex-col items-start gap-2">
        {event.coordinators.map((coordinator: any, index: number) => (
          <div key={index} className="flex flex-row flex-wrap items-center">
            <h1 className="font-serif text-lg font-semibold">
              {coordinator.name} :{" "}
            </h1>
            <a
              href={`tel:${coordinator.phone}`}
              className="font-sans text-lg font-semibold hover:text-green-400"
            >
              &nbsp;{coordinator.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
