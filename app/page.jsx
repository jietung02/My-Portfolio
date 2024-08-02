
import Nav from "@/components/Nav";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { SectionProvider } from "./SectionContext";


export default function App() {



  return (

    <>
      <SectionProvider>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
      </SectionProvider>

    </>
  );
}
