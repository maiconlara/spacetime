import { cookies } from "next/headers";
import LeftDiv from "@/components/LeftDiv";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree as Bai, Roboto_Flex as Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const bai = Bai({ subsets: ["latin"], weight: "700", variable: "--font-bai" });

export const metadata: Metadata = {
  title: "Spacetime",
  description:
    "Time capsule made with React, Next.js, Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLogged = cookies().has("token");
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bai.variable} font-sans text-gray-100 bg-gray-900`}
      >
        <div className="md:hidden h-screen w-screen flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">O App ainda não está disponível para Mobile!</h1>
          <h1 className="text-lg font-bold">Peço desculpas</h1>
        </div>
        <main className="hidden md:grid md:grid-cols-2 h-screen ">
          <LeftDiv isLogged={isLogged} />
          <div className="flex h-full max-h-screen flex-col overflow-y-scroll bg-[url(../assets/stars.svg)] bg-cover">
            {children}
          </div>
        </main>

      </body>


    </html>
  );
}
