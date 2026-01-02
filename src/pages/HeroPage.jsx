import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import icon from "../../src/assets/pics/worm.png";
import circleIcon from "../../src/assets/pics/circle.png";
import { useRef } from "react";
import "./HeroPage.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HeroPage() {
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

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="heading">
            <h1>Frontend</h1>
            <h1>developer</h1>
          </div>
        </div>

        <div className="links-and-quote">
          <div className="quote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 78"
              aria-hidden="true"
              height="50"
              width="50"
            >
              <path
                fill="black"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
              ></path>
            </svg>
            React developer building smooth, GSAP-powered web experiences.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 78"
              aria-hidden="true"
              height="50"
              width="50"
              style={{ rotate: "180deg" }}
            >
              <path
                fill="black"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
              ></path>
            </svg>
          </div>

          <div className="download">
            <a href="/" download>
              Get Resume
              <div className="download-icon">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 11"
                  aria-hidden="true"
                  height="10"
                  width="10"
                >
                  <path
                    fill="black"
                    d="M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
