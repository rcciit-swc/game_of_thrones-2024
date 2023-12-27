import { SectionHeader } from "@/components";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto mt-[100px] flex h-screen w-full flex-col items-center justify-center">
      <SectionHeader text="404 Not Found" />
      <Link href={"/"}>
        <button className="rounded-2xl bg-violet-600 px-10 py-5 text-white hover:shadow-sm hover:shadow-white ">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
