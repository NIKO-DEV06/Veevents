import type { Metadata } from "next";
import Header from "@/components/shared/Header";

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
    <html lang="en">
      <body className="bg-[#09090b] text-white overflow-x-hidden 2xl:max-w-[1470px] 2xl:m-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
