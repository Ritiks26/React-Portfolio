import { Hero } from "./HeroPage";
import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
