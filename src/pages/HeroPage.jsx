import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/all";
import glassPicture from "../../src/assets/pics/glass.png";
import { useRef } from "react";
import "./HeroPage.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

CustomEase.create("hop", "0.85, 0, 0.15, 1");

export function HeroPage() {
  return (
    <div className="hero-container">
      <div className="hero-heading">
        <h1>Modern</h1>
        <h1>Interfaces</h1>
      </div>

      <div className="hero-content-and-resume">
        <div className="hero-text">
          <p>React developer building smooth, GSAP-powered web experiences.</p>
        </div>

        <a href="/Ritik-Singh.pdf" download>
          <div className="get-resume">
            <button>Get Resume</button>
          </div>
        </a>
      </div>
    </div>
  );
}
