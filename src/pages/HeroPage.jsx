import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import icon from "../../src/assets/pics/worm.png";
import circleIcon from "../../src/assets/pics/circle.png";
import { use, useRef } from "react";
import "./HeroPage.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function HeroPage() {
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitTextHeading = SplitText.create(".heading h1", {
        type: "chars, words, lines",
      });

      const alloChar = splitTextHeading.chars.filter(
        (ch) => ch.textContent.toLowerCase() === "o"
      );

      const oChar = alloChar[0];
      const oCharSecond = alloChar[1];

      gsap.set(splitTextHeading.chars, {
        yPercent: 200,
      });

      gsap.set(".oChar-icon", {
        yPercent: 200,
      });

      gsap.set(".oCharSecond-icon", {
        yPercent: 200,
      });

      const tl = gsap.timeline();

      tl.to(splitTextHeading.chars, {
        yPercent: 0,
        stagger: 0.05,
        ease: "power4.out",
      })
        .to(oChar, {
          yPercent: 200,
          ease: "back.in(2.2)",
        })
        .to(".oChar-icon", {
          yPercent: 0,
          duration: 0.75,
          opacity: 1,
          ease: "back.out(2.2)",
        })
        .to(".oChar-icon", {
          yPercent: -100,
          opacity: 0,
          ease: "back.in(2.2)",
        })
        .to(oChar, {
          yPercent: 0,
          ease: "back.out(2.2)",
        })
        .to(".oChar-icon", {
          rotate: 5,
          scale: 0.45,
          opacity: 1,
          yPercent: 32,
        })
        .to(".oChar-icon", {
          yPercent: 39,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        })
        .to(oCharSecond, {
          yPercent: -200,
          ease: "back.in(2.2)",
        })
        .to(".oCharSecond-icon", {
          yPercent: 20,
          scale: 0.95,
          ease: "back.out(2.2)",
        })
        .to(".oCharSecond-icon", {
          yPercent: 29,
          duration: 0.75,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
    });

    gsap.to(heroSectionRef.current, {
      scale: 0.85,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        scroller: "#smooth-wrapper",
        start: "top top",
        end: "+=120%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <>
      <div className="hero-container" ref={heroSectionRef}>
        <div className="hero-content">
          <div className="heading">
            <h1>
              Fr
              <span className="oChar">
                o
                <img className="oChar-icon" src={icon} alt="" />
              </span>
              ntend
            </h1>
            <h1>
              devel
              <span className="oCharSecond">
                o
                <img className="oCharSecond-icon" src={circleIcon} alt="" />
              </span>
              per
            </h1>
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
