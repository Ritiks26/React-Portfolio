import { HeroPage } from "./HeroPage";
import { About } from "./About";
import { Skill } from "../components/Skills";
import { Work } from "./Work";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <HeroPage />
      <About />
      <Skill />
      <Work />
    </>
  );
}
