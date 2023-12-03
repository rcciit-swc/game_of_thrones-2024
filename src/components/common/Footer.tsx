import Image from "next/image";
import Link from "next/link";

import { links, socials } from "@/utils/constant";

export default function Footer() {
  return (
    <footer className="border-t-2 border-white bg-primary p-4 text-center text-sm text-white">
      <div className="mb-2 flex items-center justify-center">
        <Image src="/throne.png" alt="Throne" width={92} height={74} />
        <Image
          src="/footer.png"
          alt="G.O.T"
          width={110}
          height={58}
          className="pt-3"
        />
      </div>
      <div className="pointer-events-none mb-4 font-got text-xs">
        ONE FOR ALL, ALL FOR ONE
      </div>
      <div className="mb-4 flex flex-wrap justify-center font-medium">
        {links.map((link, index) => (
          <span
            key={index}
            className="mx-2 my-1"
            style={{
              borderRight:
                index < links.length - 1 ? "2px solid white" : "none",
            }}
          >
            <Link href={link.url} target="_blank">
              <span className="pr-4 transition-all duration-300 ease-in-out hover:text-[#6B240C]/70">
                {link.text}
              </span>
            </Link>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        {socials.map((socials, index) => (
          <Link key={index} href={`${socials.url}`} target="_blank">
            <Image
              src={`/${socials.src}`}
              alt={`${socials.src}`}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}
