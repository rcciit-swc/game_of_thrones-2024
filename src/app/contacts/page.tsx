
import { SectionHeader } from "@/components";
import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Location from "./_components/Location";
import Committee from "./_components/Committee";
import Image from "next/image";
import Block from "./_components/Block";

export const metadata: Metadata = constructMetaData({
  title: "Contacts | GOT RCCIIT",
});

const ContactUs = () => {
  return(
    <>
    <Block />
    </>
  )
};

export default ContactUs;
