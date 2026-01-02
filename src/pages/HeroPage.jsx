import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import icon from "../../src/assets/pics/worm.png";
import circleIcon from "../../src/assets/pics/circle.png";
import { useRef } from "react";
import "./HeroPage.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Hero() {
  const heroSectionRef = useRef(null);
  // useGSAP(() => {
  //   const splitHeading = SplitText.create(".heading-first", {
  //     type: "chars, words, lines",
  //     linesClass: "heading-line",
  //   });

  //   const splitText = SplitText.create(".heading-second", {
  //     type: "chars, words, lines",
  //     linesClass: "heading-line",
  //   });

  //   // const oCharHeading = splitHeading.chars[2];
  //   // const oCharText = splitText.chars[5];
  //   const oCharHeading = splitHeading.chars.find(
  //     (ch) => ch.textContent.toLowerCase() === "o"
  //   );

  //   const oCharText = splitText.chars.find(
  //     (ch) => ch.textContent.toLowerCase() === "o"
  //   );

  //   const iconElem = document.querySelector(".icon");
  //   const circleIconElem = document.querySelector(".circle-icon");

  //   const oCharHeadingElem = oCharHeading.getBoundingClientRect();
  //   const oCharHeadingParentElem =
  //     oCharHeading.parentElement.getBoundingClientRect();

  //   const oCharTextElem = oCharText.getBoundingClientRect();
  //   const oCharTextParentElem = oCharText.parentElement.getBoundingClientRect();

  //   gsap.set(iconElem, {
  //     left: oCharHeadingElem.left - oCharHeadingParentElem.left,
  //     top: oCharHeadingElem.top - oCharHeadingParentElem.top,
  //   });

  //   gsap.set(circleIconElem, {
  //     left: oCharTextElem.left - oCharTextParentElem.left,
  //     top: oCharTextElem.top - oCharTextParentElem.top,
  //   });

  //   gsap.set(splitHeading.words, {
  //     clipPath: "inset(0% 0% 100% 0%)",
  //     y: 20,
  //   });

  //   gsap.set(splitText.words, {
  //     clipPath: "inset(0% 0% 100% 0%)",
  //     y: 20,
  //   });

  //   const t1 = gsap.timeline({
  //     defaults: { ease: "power3.out" },
  //   });

  //   t1.to(splitHeading.words, {
  //     clipPath: "inset(0% 0% 0% 0)",
  //     y: 0,
  //     stagger: 0.15,
  //     duration: 0.75,
  //     ease: "Power4.out",
  //   })
  //     .to(
  //       splitText.words,
  //       {
  //         clipPath: "inset(0% 0% 0% 0)",
  //         y: 0,
  //         stagger: 0.15,
  //         duration: 0.75,
  //         ease: "Power4.out",
  //       },
  //       "<"
  //     )
  //     .to(oCharHeading, {
  //       yPercent: 100,
  //       ease: "back.in(3)",
  //     })
  //     .to(iconElem, {
  //       opacity: 1,
  //     })
  //     .to(iconElem, {
  //       opacity: 0,
  //     })
  //     .to(
  //       oCharHeading,
  //       {
  //         yPercent: 0,
  //         ease: "back.out(3)",
  //       },
  //       "<"
  //     )
  //     .to(iconElem, {
  //       yPercent: 35,
  //       opacity: 1,
  //       scale: 0.5,
  //     })
  //     .to(iconElem, {
  //       y: -5,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //     })
  //     .to(
  //       oCharText,
  //       {
  //         yPercent: 100,
  //         ease: "back.in(3)",
  //       },
  //       "<"
  //     )
  //     .to(circleIconElem, {
  //       yPercent: 30,
  //       opacity: 1,
  //     })
  //     .to(circleIconElem, {
  //       y: -7,
  //       duration: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "power1.inOut",
  //     });

  //   gsap.to(heroSectionRef.current, {
  //     scale: 0.85,
  //     rotate: 3,
  //     scrollTrigger: {
  //       trigger: heroSectionRef.current,
  //       start: "top top",
  //       end: "+=120%",
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   });
  // });

  return <></>;
}
