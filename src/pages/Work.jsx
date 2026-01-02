import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useRef } from "react";
import { WorkProject } from "../components/WorkProject";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

export function Work({ workSummary, setWorkSummary }) {
  // const workContainerRef = useRef(null);
  useGSAP(() => {
    if (workSummary) {
      gsap.to(".project", {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
        display: "flex",
      });

      gsap.fromTo(
        ".project-summary",
        { scale: 0.9, y: 30 },
        {
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(".project-summary", {
        scale: 0.9,
        duration: 0.4,
        ease: "power3.in",
      });

      gsap.to(".project", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [workSummary]);

  // useGSAP(() => {
  //   gsap.to(workContainerRef.current, {
  //     scale: 0.85,
  //     rotate: 3,
  //     scrollTrigger: {
  //       trigger: workContainerRef.current,
  //       start: "bottom 100%",
  //       end: "+=120%",
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   });
  // });

  return (
    <>
      <div className="work-section">
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
          <WorkProject
            setWorkSummary={setWorkSummary}
            workSummary={workSummary}
          />
        </div>
      </div>
    </>
  );
}
