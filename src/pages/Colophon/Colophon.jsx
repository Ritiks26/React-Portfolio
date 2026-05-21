import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./Colophon.css";
import { SectionHeading } from "../../components/SectionHeading";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Colophon() {
  const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const targets = containerRef.current.querySelectorAll(
  //       ".colophon-child h1, .tech-used h1, .design-section h1",
  //     );

  //     targets.forEach((heading) => {
  //       const split = new SplitText(heading, { type: "lines" });

  //       gsap.set(split.lines, {
  //         clipPath: "inset(0 0 100% 0)",
  //         y: 40,
  //       });

  //       gsap.to(split.lines, {
  //         clipPath: "inset(0 0 0% 0)",
  //         y: 0,
  //         duration: 0.75,
  //         ease: "back.inOut",
  //         stagger: 0.12,
  //         scrollTrigger: {
  //           trigger: heading,
  //           start: "top 85%",
  //         },
  //       });
  //     });
  //   },
  //   { scope: containerRef },
  // );
  useGSAP(
    () => {
      const targets = containerRef.current.querySelectorAll(
        ".colophon-child h1, .tech-used h1, .design-section h1",
      );

      targets.forEach((heading) => {
        const split = new SplitText(heading, { type: "lines" });
        const isColophon = heading.closest(".colophon-child");

        gsap.set(split.lines, {
          clipPath: "inset(0 0 100% 0)",
          y: 40,
        });

        gsap.to(split.lines, {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: isColophon ? 1.5 : 0,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        });
      });
    },
    { scope: containerRef },
  );
  return (
    <section className="colophon-container" ref={containerRef}>
      <div className="colophon-child">
        <h1>colophon</h1>
      </div>

      <div className="tech-used">
        <h3>technology</h3>
        <h1>
          <span style={{ color: "#353532" }}>Built with React JS, GSAP,</span>
          <br />{" "}
          <span style={{ color: "#aeaeae" }}>
            and Lenis — smooth animations, clean
          </span>
          <br />
          <span style={{ color: "#aeaeae" }}>design, deployed on Vercel</span>
        </h1>
      </div>

      <div className="design-section">
        <h3>design</h3>
        <h1>
          <span style={{ color: "#353532" }}>
            Minimal design, strong typography
          </span>
          <br />{" "}
          <span style={{ color: "#aeaeae" }}>
            with Satoshi and Barlow Condensed,
          </span>
          <br />
          <span style={{ color: "#aeaeae" }}>
            {" "}
            icons via Heroicons and TechIcons.
          </span>
        </h1>
      </div>

      <div className="inspire-section">
        <h3>inspired</h3>
        <h1>
          <span style={{ color: "#353532" }}>
            Inspired by modern portfolios
          </span>
          <br />{" "}
          <span
            style={{
              color: "#aeaeae",
              paddingLeft: "0.75rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            khoa phan
          </span>
          <br />
          <span
            style={{
              color: "#aeaeae",
              paddingLeft: "0.75rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {" "}
            codegrid
          </span>
          <br />
          <span
            style={{
              color: "#aeaeae",
              paddingLeft: "0.75rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {" "}
            sashasatchi
          </span>
        </h1>
      </div>
    </section>
  );
}
