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

  // useGSAP(() => {
  //   document.fonts.ready.then(() => {
  //     const heroHeading = SplitText.create(".hero-heading h1", {
  //       type: "chars, words, lines",
  //     });

  //     const oChar = heroHeading.chars[2];
  //     const vChar = heroHeading.chars[10];
  //     const oCharSecond = heroHeading.chars[13];

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: heroContainerRef.current,
  //         start: "top top",
  //         pin: true,
  //         pinSpacing: false,
  //         scrub: true,
  //       },
  //     });

  //     tl.to(heroContainerRef.current, {
  //       scale: 0.8,
  //       yPercent: -15,
  //       rotate: -3,
  //     })
  //       .to(
  //         oChar,
  //         {
  //           filter: "blur(0.5rem)",
  //         },
  //         "<",
  //       )
  //       .to(
  //         vChar,
  //         {
  //           filter: "blur(0.5rem)",
  //         },
  //         "<",
  //       )
  //       .to(
  //         oCharSecond,
  //         {
  //           filter: "blur(0.5rem)",
  //         },
  //         "<",
  //       );
  //   });
  // }, []);

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
