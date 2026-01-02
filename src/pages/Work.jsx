import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useRef } from "react";
import { WorkProject } from "../components/WorkProject";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Work() {
  const workRef = useRef(null);
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitWorkPara = SplitText.create(".work-content p", {
        type: "chars, words, lines",
      });

      gsap.set(splitWorkPara.lines, {
        clipPath: "inset(0% 0% 100% 0)",
        y: 20,
      });

      gsap.to(splitWorkPara.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: workRef.current,
          scroller: "#smooth-wrapper",
          start: "top 75%",
          end: "+=120%",
        },
      });
    });
  }, []);
  return (
    <>
      <div className="work-section" ref={workRef}>
        <div className="work-container">
          <ul>
            <li>WORK</li>
          </ul>
          <div className="work-content">
            <h3>
              Work I've <span>done</span>
            </h3>
            <p>
              From real-world freelance work to hands-on practice projects,
              these projects reflect my approach to building clean, interactive,
              and scalable frontend interfaces.
            </p>
          </div>
          <WorkProject />
        </div>
      </div>
    </>
  );
}
