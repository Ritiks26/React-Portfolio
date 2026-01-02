import { HeroPage } from "./HeroPage";
import { About } from "./About";
import { Work } from "./Work";
import { Contact } from "./Contact";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <HeroPage />
      <About />
      <Work />
      <Contact />
    </>
  );
}
