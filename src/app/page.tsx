import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SystemMap from "@/components/SystemMap";
import Activity from "@/components/Activity";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SystemMap />
        <Activity />
        <Work />
        <Timeline />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
