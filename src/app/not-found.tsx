import { SectionHeader } from "@/components";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-[100px] w-full h-screen mx-auto flex flex-col items-center justify-center">
    <SectionHeader text="404 Not Found" />
    <Link href={"/"}><button className="bg-violet-600 text-white px-10 py-5 rounded-2xl hover:shadow-sm hover:shadow-white ">Go Back to Home</button></Link>
    </div>
  )
};

export default NotFound;
