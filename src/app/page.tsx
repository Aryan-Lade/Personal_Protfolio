import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import StackSection from "@/components/sections/stack";
import ProjectsSection from "@/components/sections/projects";
import ContactFooter from "@/components/sections/contact-footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grid-background" />
      <div className="background-blur" />
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ContactFooter />
      </main>
    </div>
  );
}
