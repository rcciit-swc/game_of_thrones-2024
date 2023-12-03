import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetaData({
  title: "Contacts | GOT RCCIIT",
});

const ContactUs = () => {
  return <div>contactUs</div>;
};

export default ContactUs;
