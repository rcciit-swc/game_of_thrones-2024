"use client";
import Image from "next/image";
import Link from "next/link";
import { navRoutes } from "@/utils/constant";
import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import { useUser } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const pathname = usePathname();

  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[40] w-screen lg:w-full lg:overflow-x-hidden`}
      >
        <div
          className={`${
            scrolling || isMenuOpen ? "bg-body" : "bg-transparent"
          } items-center justify-around  gap-20 px-2 py-2 overflow-hidden md:mb-20 max-md:border-b md:flex lg:px-10`}
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

          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-8 top-7 cursor-pointer text-3xl md:hidden"
          >
            {isMenuOpen ? (
              <h1 className="text-2xl font-semibold">X</h1>
            ) : (
              <Image
                src={"/assets/navbar/hamburger.svg"}
                height={24}
                width={24}
                alt=""
              />
            )}
          </div>

          <ul
            className={`absolute z-[-1] w-full border-white bg-body pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:border-b md:bg-transparent md:pb-0 md:pl-0 ${
              isMenuOpen ? "right-0" : "right-[-790px]"
            }`}
          >
            {navRoutes.map((link, index) => (
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                key={index}
              >
                <li className="my-4 pt-2 font-semibold duration-500 ease-linear md:my-0 md:ml-4 lg:ml-8 md:hover:scale-105 md:hover:text-yellow-300 xl:text-xl">
                  <h1 className="cursor-pointer p-2 transition">{link.name}</h1>
                </li>
              </Link>
            ))}

             <div className="overflow-hidden md:ml-10 border-none">
             
              <Dropdown
                className="bg-body border-none text-white "
                label={
                  <Image
                    src={user?.user_metadata?.avatar_url}
                    className="w-12 rounded-full cursor-pointer pr-2 duration-500 ease-in-out hover:scale-105"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                }
                dismissOnClick={false}
              >
                <Dropdown.Item className="hover:bg-slate-400">
                  Show Profile
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={handleLogout}
                  className="hover:bg-slate-400"
                >
                  Logout
                </Dropdown.Item>
              </Dropdown>
            </div>
              {!user && (
              <li className="max-md:mt-10 md:ml-6 lg:ml-20 ">
                <button
                  className="text-md rounded-xl border bg-[#2D3493] px-14 py-2 font-semibold hover:bg-[#242975] md:px-10"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
