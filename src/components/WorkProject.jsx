import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectDetail } from "../constant";
import "./WorkProject.css";

gsap.registerPlugin(ScrollTrigger);

export function WorkProject() {
  return (
    <>
      <div className="projects-grid">
        {projectDetail.map((project, i) => (
          <div key={i} className="project-card">
            <div className="projects-child">
              <img className="parallax-image" src={project.Image} alt="" />
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
                      fill="#dadada"
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
                      fill="#dadada"
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
