'use client';
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import ParticlesBackground from "./ParticlesBackground";
import Progress from "@/components/Progress";


const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "Jie Min Portfolio",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <ParticlesBackground />
        <Nav />
        <Progress />
        
        <main>
          {children}  
        </main>

        {/* make this like https://i9gwuc.csb.app/ whne scrolling, you can feel like it will auto go to certain percentage */}
        {/* <motion.div className="fixed left-0 right-0 bottom-40 h-1 bg-[#4463ec]" style={{ scaleX }} /> */}
      </body>
    </html>
  );
}
