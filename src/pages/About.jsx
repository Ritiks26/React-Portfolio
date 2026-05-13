import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../components/SectionHeading";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      /* ===============================
       ABOUT SECTION
    =============================== */
      const splitPara = SplitText.create(".about-content p", {
        type: "lines",
        linesClass: "split-line",
      });

      gsap.set(splitPara.lines, {
        clipPath: "inset(0% 0% 100% 0)",
        y: 20,
      });

      gsap.to(splitPara.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      });

      /* ===============================
       HIGHLIGHTS SECTION
    =============================== */

      const highlightSplitText = SplitText.create(".highlight-contents ul li", {
        type: "lines",
        linesClass: "split-line",
      });

      gsap.set(highlightSplitText.lines, {
        opacity: 0,
        yPercent: 50,
      });

      gsap.to(highlightSplitText.lines, {
        opacity: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: ".projects-built",
          start: "top 75%",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="about-section" id="about-section">
        <div className="about-container">
          <SectionHeading heading={"ABOUT"} />
          <div className="about-content">
            <p>
              Frontend Web Developer with hands-on experience building
              responsive, interactive web applications using React Js,
              JavaScript, GSAP, HTML, and CSS I specialize in crafting modern
              UIs with smooth animations and clean, scalable code — with a
              strong grasp of component-based architecture and real-world
              project experience across e-commerce, quiz, and task management
              apps.
            </p>
            <p>
              I'm detail-oriented, UX-focused, and passionate about turning
              concepts into polished digital experiences while staying current
              with modern frontend trends.
            </p>
            {/* <p>
              Frontend Web Developer with hands-on experience building
              responsive, interactive web applications using{" "}
              <span>React Js, JavaScript, GSAP, HTML,</span> and{" "}
              <span>CSS</span>. I specialize in crafting modern UIs with smooth
              animations and clean, scalable code — with a strong grasp of
              component-based architecture and real-world project experience
              across e-commerce, quiz, and task management apps. I'm
              detail-oriented, UX-focused, and passionate about turning concepts
              into polished digital experiences while staying current with
              modern frontend trends.
            </p> */}
          </div>

          <div className="highlight-contents">
            <ul>
              <li> &#8500; React focused frontend development </li>
              <li> &#8500; Strong JavaScript DOM fundamentals </li>
              <li> &#8500; Real world project experience </li>
              <li> &#8500; Smooth GSAP based animations </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
