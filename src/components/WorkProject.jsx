import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { projectDetail } from "../constant/index.jsx";
import { useRef } from "react";
import "./WorkProject.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function WorkProject() {
  useGSAP(() => {
    const projectCardElem = gsap.utils.toArray(".project-card");

    gsap.set(projectCardElem, {
      opacity: 0,
      scale: 0.85,
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: projectCardElem,
        start: "top 50%",
      },
    });

    t1.to(projectCardElem, {
      opacity: 1,
      scale: 1,
      stagger: 0.125,
      ease: "power3.inOut",
    });

    projectCardElem.forEach((project) => {
      const projectChildElem = project.querySelector(".projects-child");

      const projectContentElem = project.querySelector(".project-content");

      const splitContent = SplitText.create(projectContentElem, {
        type: "words",
      });

      gsap.set(splitContent.words, {
        yPercent: 500,
      });

      const cardPath = project.querySelectorAll(".svg-stroke path");

      cardPath.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });

      let tl;

      projectChildElem.addEventListener("mouseenter", () => {
        if (tl) tl.kill();
        tl = gsap.timeline();

        cardPath.forEach((path) => {
          tl.to(
            path,
            {
              strokeDashoffset: 0,
              attr: { "stroke-width": 50 },
              duration: 2,
              ease: "power2.out",
            },
            0,
          ).to(
            splitContent.words,
            {
              yPercent: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.075,
            },
            0.35,
          );
        });
      });

      projectChildElem.addEventListener("mouseleave", () => {
        if (tl) tl.kill();
        tl = gsap.timeline();

        cardPath.forEach((path) => {
          const length = path.getTotalLength();
          tl.to(
            path,
            {
              strokeDashoffset: length,
              attr: { "stroke-width": 10 },
              duration: 1,
              ease: "power2.out",
            },
            0,
          ).to(
            splitContent.words,
            {
              yPercent: 500,
              duration: 0.5,
              ease: "power3.out",
              stagger: { each: 0.5, from: "end" },
            },
            0,
          );
        });
      });
    });
  }, []);

  return (
    <>
      <div className="projects-grid">
        {projectDetail.map((project, i) => (
          <div key={i} className="project-card">
            <div className="projects-child">
              <img src={project.Image} alt="" />
              <div className="project-content">
                <h1>{project.content}</h1>
              </div>
              <div className="svg-stroke svg-stroke-1">
                <svg
                  width="141"
                  height="137"
                  viewBox="0 0 141 137"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.6169 117.747C27.6169 117.747 35.6169 136.883 46.1169 129.247C56.6169 121.61 -11.0855 72.5511 8.61695 54.08C28.3194 35.609 54.7837 143.747 84.1169 121.747C113.45 99.7467 -3.38305 37.7467 30.6169 10.7467C64.6169 -16.2533 104.117 135.747 130.117 121.747C156.117 107.747 82.6169 24.7467 93.1169 10.7467C103.617 -3.25327 108.117 12.7467 108.117 12.7467"
                    stroke="#7541FE"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="svg-stroke svg-stroke-2">
                <svg
                  width="189"
                  height="166"
                  viewBox="0 0 189 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.547 17.3655C28.547 17.3655 4.54704 34.3655 18.547 43.3655C32.547 52.3655 136.047 -20.1345 154.547 14.3655C186.945 74.7829 -22.4529 31.8655 8.04705 93.8655C36.991 152.702 168.446 -4.28074 178.047 76.3655C183.047 118.365 -11.2065 102.721 33.547 155.865C53.3365 179.365 183.047 103.365 183.047 124.866C183.047 133.866 148.047 147.365 148.047 147.365"
                    stroke="#FD4C2E"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="project-details">
              <p>
                {project.website} <strong>{project.isFreeLance}</strong>{" "}
                <strong>{project.isLaucnhed}</strong>
              </p>

              {project.projectLink && (
                <a href={project.projectLink} target="_blank">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      width: "fit-content",
                    }}
                  >
                    DISCOVER{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                      <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                    </svg>
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
