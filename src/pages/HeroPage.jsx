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
      <div className="hero-image">
        <div className="left-hero-image">
          <img
            src="https://images.prismic.io/malvah-v2/aZhSN8FoBIGEgmDl_WorkThumbnail_BitterCreek.jpg?auto=format,compress"
            alt=""
          />
        </div>
        <div className="right-hero-image">
          <img
            src="https://images.prismic.io/malvah-v2/aZhk7sFoBIGEgmU__WorkThumbnail_Boring.jpg?auto=format,compress"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
