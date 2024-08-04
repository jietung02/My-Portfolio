import { Montserrat, Open_Sans, } from "next/font/google";
import "../styles/globals.css";
import ParticlesBackground from "./ParticlesBackground";
import Progress from "@/app/components/Progress";


const font = Open_Sans({ subsets: ["latin"], });

export const metadata = {
  title: "Jie Min Portfolio",
  description: "Explore the portfolio of Jie Min, a dedicated Full Stack Developer showcasing projects, skills, and a passion for continuous learning and innovation.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon"  href="/favicon.ico" />
      </head>
      <body
        className={`${font.className} antialiased`}
      >
        <ParticlesBackground />
        <Progress />

        <main>
            {children}
        </main>

      </body>
    </html>
  );
}
