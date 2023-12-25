import Image from "next/image";
import EventReg from "./EventReg";

const Dashboard = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto lg:w-3/4">
      <div className="sticky flex flex-col justify-between pt-3 md:flex-row md:px-10 md:pt-10">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex flex-row items-center gap-3">
          <Image
            src={"/assets/dashboard/Search.svg"}
            className="w-8 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
            width={0}
            height={0}
            alt="logo"
          />
          <input
            type="text"
            name=""
            id=""
            className="rounded-md bg-body px-5 py-1 max-md:w-[80%]"
            placeholder="Search Events..."
          />
        </div>
      </div>

      <div className="mt-10 flex h-full w-full items-center justify-center">
        <EventReg />
      </div>
    </div>
  );
};

export default Dashboard;
