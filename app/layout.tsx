import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/shared/Footer";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Veevents",
  description:
    "Explore a world of possibilities, effortlessly organize, and seamlessly connect with your audience. Elevate your event experience today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${baiJamjuree.className} bg-[#09090b] text-white overflow-x-hidden 2xl:max-w-[1470px] 2xl:m-auto`}
        >
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
