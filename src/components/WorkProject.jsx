import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { projectDetail } from "../constant";
import "./WorkProject.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function WorkProject() {
  useGSAP(() => {
    const projectCardElem = gsap.utils.toArray(".project-card");

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
              attr: { "stroke-width": 100 },
              duration: 1,
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
              attr: { "stroke-width": 15 },
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
                  width="190"
                  height="226"
                  viewBox="0 0 190 226"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.7294 7.50104C13.7294 20.5011 -14.2706 45.501 34.7294 45.501C83.7294 45.501 152.729 7.50104 152.729 34.501C152.729 61.501 -0.270634 95.501 34.7294 119.501C69.7294 143.501 124.729 39.501 174.729 89.501C224.729 139.501 -10.2706 135.501 23.7294 193.501C57.7294 251.501 130.729 148.501 152.729 175.501C174.729 202.501 112.729 218.501 112.729 218.501"
                    stroke="#FE9437"
                    stroke-width="15"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="svg-stroke svg-stroke-2">
                <svg
                  width="261"
                  height="255"
                  viewBox="0 0 261 255"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50201 186.208C7.50201 186.208 34.502 257.208 49.502 235.208C64.502 213.208 -15.498 62.2084 34.502 96.2084C84.502 130.208 63.8022 245.212 134.502 247.208C219.474 249.608 -21.498 74.3577 87.502 37.3577C196.502 0.357672 136.502 286.717 225.502 229.463C314.502 172.208 160.502 104.507 176.502 37.3577C192.502 -29.7915 234.502 37.3577 234.502 37.3577"
                    stroke="#377DFE"
                    stroke-width="15"
                    stroke-linecap="round"
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
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#000"
                      className="link-arrow-before"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    DISCOVER{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#000"
                      className="link-arrow-after"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
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
