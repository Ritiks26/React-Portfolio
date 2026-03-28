import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/all";
import "./HeroPage.css";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

CustomEase.create("hop", "0.85, 0, 0.15, 1");

export function HeroPage() {
  const heroContainerRef = useRef();

  useGSAP(() => {
    // document.fonts.ready.then(() => {
    //   const heroHeading = SplitText.create(".hero-heading h1", {
    //     type: "chars, words, lines",
    //   });
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    tl.to(heroContainerRef.current, {
      scale: 0.87,
      filter: "blur(0.5rem)",
    });
  }, []);

  return (
    <div className="hero-container" ref={heroContainerRef}>
      <div className="hero-heading">
        <h1>frontend</h1>
        <h1>developer</h1>
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
