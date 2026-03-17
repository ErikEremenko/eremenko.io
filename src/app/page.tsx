import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Seminars from "@/components/Seminars";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Seminars />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
