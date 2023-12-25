import Image from "next/image";
import EventReg from "./EventReg";

const Dashboard = () => {
  return (
    <div className="flex flex-col  h-full  lg:w-3/4 overflow-y-auto">
      <div className="sticky flex flex-col md:flex-row justify-between  md:px-10 pt-3 md:pt-10">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex flex-row items-center gap-3">
          <Image
            src={"/assets/dashboard/Search.svg"}
            className="w-8  cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105  "
            width={0}
            height={0}
            alt="logo"
          />
          <input
            type="text"
            name=""
            id=""
            className="bg-body max-md:w-[80%]  px-5 py-1 rounded-md"
            placeholder="Search Events..."
          />
        </div>
      </div>

      <div className="flex  justify-center items-center w-full h-full mt-10">
        <EventReg />
      </div>
    </div>
  );
};

export default Dashboard;
