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
  const heroSectionRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(heroSectionRef.current, {
        scale: 0.5,
        rotate: "3deg",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
      document.fonts.ready.then(() => {
        const heroHeadingSplit = SplitText.create(".hero-content h1", {
          type: "lines, words, chars",
        });

        gsap.set(heroHeadingSplit.lines, {
          y: 100,
          clipPath: "inset(0% 0% 100% 0)",
        });

        gsap.set(imageWrapperRef.current, {
          y: 100,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        });

        gsap.set(".download", {
          opacity: 0,
        });

        gsap.set(".quote", {
          opacity: 0,
        });

        const tl = gsap.timeline({});

        tl.to(heroHeadingSplit.lines, {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
          ease: "power1.out",
        })
          .to(imageWrapperRef.current, {
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
            ease: "hop",
          })

          .to(".quote", {
            opacity: 1,
            duration: 0.5,
            ease: "hop",
          })
          .to(
            ".download",
            {
              opacity: 1,
              duration: 0.5,
              ease: "hop",
            },
            "<",
          );
      });
    },
    { scope: heroSectionRef },
  );

  return (
    <>
      <div className="hero-container" ref={heroSectionRef}>
        <div className="hero-content">
          <div className="image-wrapper" ref={imageWrapperRef}>
            <img src={glassPicture} alt="" />
          </div>
          <h1>Frontend</h1>
          <h1>Developer</h1>
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
            <a href="../public/Ritik-Singh.pdf" download>
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
