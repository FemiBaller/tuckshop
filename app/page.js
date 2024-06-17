import Hero from "@/app/Components/Hero";
import Solutions from "@/app/Components/Solutions";
import Implentation from "./Components/Implementation";
import Benefits from "./Components/Benefits";
import { OurModules } from "./Components/Modules";
export default function Home() {
  return (
  <> 
    <Hero/>
    <Solutions />
    <Implentation />
    <OurModules />
    <Benefits />
  </>
  );
}
