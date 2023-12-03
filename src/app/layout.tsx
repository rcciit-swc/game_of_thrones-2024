import { Poppins } from "next/font/google";
import "./globals.css";
import { constructMetaData } from "@/utils/metadata";
import { Navbar, Footer } from "@/components";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${poppins.className} bg-body text-neutral `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
