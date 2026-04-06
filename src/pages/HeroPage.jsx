import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import "./HeroPage.css";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

CustomEase.create("hop", "0.85, 0, 0.15, 1");

export function HeroPage() {
  const heroContainerRef = useRef();

  return (
    <div className="hero-container" ref={heroContainerRef}>
      <p className="hero-text hero-left">modern interfaces</p>
      <p className="hero-text hero-right">built different</p>

      <div className="hero-image">
        <img
          src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/cd64cd667b2f99df533be29a125c1486/068a0bc80d7497247680be22_rw_1920.jpg?h=caf1bae525adcdf6078e05f640f368b5"
          alt=""
        />
        <img
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/cd64cd667b2f99df533be29a125c1486/902aa768d3c155a50a7e5b92_rw_1920.jpg?h=31e85fde8cafd2c30dc003d0aff87d87"
          alt=""
        />
      </div>
    </div>
  );
}
