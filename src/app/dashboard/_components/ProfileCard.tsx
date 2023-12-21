import { Dropdown } from "flowbite-react";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="block lg:hidden">
      <Dropdown
        className="bg-body  text-white "
        label={
          <Image
            src={""}
            className="w-9  cursor-pointer pr-2 rounded-full transition-colors duration-500 ease-in-out hover:scale-105  "
            width={0}
            height={0}
            alt="logo"
          />
        }
        dismissOnClick={false}
      >
        {/* <Dropdown.Item>Show Profile</Dropdown.Item> */}

        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ProfileCard;
