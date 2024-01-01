"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "flowbite-react";

import { navRoutes, handleLogin, checkIfUserRegistered } from "@/utils";
import { useUser, supabase } from "@/lib";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [userImg, setUserImg] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
    router.push("/");
  };

  useEffect(() => {
    const readUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data) {
        setUserImg(data?.session?.user.user_metadata?.avatar_url);
      }
    };
    const handleDashboard = async () => {
      const data = await checkIfUserRegistered({
        phone_param: user?.phone!,
      });
      if (data.length > 0) {
        setShowDashboard(true);
        return;
      }
      setShowDashboard(false);
    };
    handleDashboard();

    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    readUserSession();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  return (
    <>
      <div className="fixed left-0 top-0 z-[40] w-screen lg:w-full lg:overflow-x-hidden">
        <div
          className={`${
            scrolling || isMenuOpen ? "bg-body" : "bg-transparent"
          } flex flex-row items-center justify-between gap-20 overflow-hidden py-2 pl-2 pr-4 max-md:border-b md:mb-20 md:flex lg:px-10
          `}
        >
          <div className="flex cursor-pointer items-center font-[Poppins] text-2xl font-bold text-gray-800">
            <span className="mr-1 pt-2 text-3xl text-indigo-600">
              <Link href={"/"}>
                <Image
                  src={"/assets/navbar/logo.svg"}
                  className="w-36 cursor-pointer transition-colors duration-500 ease-in-out hover:scale-105"
                  width={0}
                  height={0}
                  alt="logo"
                />
              </Link>
            </span>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-4 md:flex-row">
            <div
              className="flex h-full w-8 cursor-pointer flex-col items-center justify-center gap-[6px]
             md:hidden
            "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-[2px] w-7 bg-neutral transition-all duration-500
              ${isMenuOpen ? "translate-y-2 rotate-45" : ""}
              `}
              ></span>
              <span
                className={`block h-[2px] w-7 bg-neutral transition-all duration-500
              ${isMenuOpen ? "translate-x-44 " : "translate-x-0"}
              `}
              ></span>
              <span
                className={`block h-[2px] w-7 bg-neutral transition-all duration-500
              ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}
              `}
              ></span>
            </div>

            <ul
              className={`absolute top-16 z-[-1] w-full border-white bg-body pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0  ${
                isMenuOpen ? "right-0" : "right-[-790px]"
              }`}
            >
              {navRoutes.map((link, index) => (
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  key={index}
                >
                  <li
                    className={`my-4 pt-2 font-semibold duration-200 ease-linear md:my-0 md:ml-4 md:hover:scale-105 md:hover:text-yellow-300 lg:ml-8 xl:text-xl ${
                      pathname === link.href && "text-yellow-300"
                    }`}
                  >
                    <h1 className="cursor-pointer p-2 transition">
                      {link.name}
                    </h1>
                  </li>
                </Link>
              ))}
              {showDashboard && (
                <Link href="/dashboard">
                  <li
                    className={`my-4 pt-2 font-semibold duration-200 ease-linear md:my-0 md:ml-4 md:hover:scale-105 md:hover:text-yellow-300 lg:ml-8 xl:text-xl ${
                      pathname === "/dashboard" && "text-yellow-300"
                    }`}
                  >
                    <h1 className="cursor-pointer p-2 transition">Dashboard</h1>
                  </li>
                </Link>
              )}
            </ul>
            {user && (
              <div className="overflow-hidden border-none ">
                <Dropdown
                  className="bg-body text-white "
                  label={
                    <Image
                      src={userImg}
                      width={40}
                      height={40}
                      className="mr-2 rounded-full"
                      alt="user"
                    />
                  }
                  style={{
                    border: "none",
                  }}
                  dismissOnClick={false}
                >
                  <Dropdown.Item className="hover:bg-slate-400">
                    <Link href="/profile">Show Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleLogout}
                    className="hover:bg-slate-400"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown>
              </div>
            )}
            {!user && (
              <div className="">
                <button
                  className="rounded-md border bg-[#2D3493] px-5 py-2 text-sm font-normal hover:bg-[#242975] 
                  md:px-10"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
