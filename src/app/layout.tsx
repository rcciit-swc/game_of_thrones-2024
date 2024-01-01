import { Poppins } from "next/font/google";
import "./globals.css";
import { constructMetaData } from "@/utils/metadata";
import SessionProvider from "@/components/session-provider";
import { Navbar, Footer } from "@/components";
import { Toaster } from "sonner";
import { Suspense } from "react";

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
        className={`min-h-screen ${poppins.className} bg-body text-neutral`}
      >
        <Navbar />
        <Suspense fallback={null}>
          <Toaster position="bottom-center" />
        </Suspense>
        {children}
        <Footer />
        <SessionProvider />
      </body>
    </html>
  );
}
