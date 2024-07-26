import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import Link from "next/link";


export default function Home() {


  return (
    <section id="home" className="flex flex-col w-full bg-violet-100 h-screen ">
      <div className="flex flex-col m-auto text-custom-dark-gray">
        <h1 className="text-4xl font-medium animate-fade-slide-down">Hello, I'm <span className="font-bold">Tung Jie Min</span>.</h1>
        
        <h2 className="text-xl font-normal mx-auto py-2 animate-fade-slide-down">A Full Stack Developer</h2>
        <div className="flex w-8/12 mx-auto mt-4 h-12 items-center relative hover:ring-custom-dark-gray ring ring-white rounded-xl animate-fade-slide-right">
          <Link href='#about' className="relative flex w-full justify-center mx-auto text-lg font-normal">Discover More About Me</Link>

        </div>


      </div>

    </section>
  );
}
