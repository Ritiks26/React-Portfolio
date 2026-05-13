import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Playground.css";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Playground() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalProjects, setTotalProjects] = useState(null);

  useGSAP(() => {
    const spotlight = gsap.utils.toArray(".spotlight");

    spotlight.forEach((section) => {
      const projectIndexElem = section.querySelector(".project-index");

      const projectImagesContainer = section.querySelector(".project-images");

      const projectImages = section.querySelectorAll(".project-image");

      const projectNamesContainer = section.querySelector(".project-names");

      const projectNames = section.querySelectorAll(".project-names p");

      const videoElem = section.querySelector("video");

      const totalProjectCount = projectImages.length;
      setTotalProjects(totalProjectCount);

      const spotlightSectionHeight = section.offsetHeight;
      const spotlightSectionPadding = parseFloat(
        getComputedStyle(section).padding,
      );

      const projectIndexHeight = projectIndexElem.offsetHeight;
      const projectNamesContainerHeight = projectNamesContainer.offsetHeight;
      const imagesHeight = projectImagesContainer.offsetHeight;

      const moveDistanceIndex =
        spotlightSectionHeight -
        spotlightSectionPadding * 2 -
        projectIndexHeight;

      const moveDistanceNames =
        spotlightSectionHeight -
        spotlightSectionPadding * 2 -
        projectNamesContainerHeight;

      const moveDistanceImages = window.innerHeight - imagesHeight;

      const imageActivationThreshold = window.innerHeight / 2;

      ScrollTrigger.create({
        trigger: ".spotlight",
        start: "top top",
        end: `+=${window.innerHeight * 5}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * totalProjectCount) + 1,
            totalProjectCount,
          );
          setCurrentIndex(newIndex);

          gsap.set(projectIndexElem, {
            y: progress * moveDistanceIndex,
          });

          gsap.set(projectImagesContainer, {
            y: progress * moveDistanceImages,
          });

          projectImages.forEach((img) => {
            const imgRect = img.getBoundingClientRect();
            const imgTop = imgRect.top;
            const imgbottom = imgRect.bottom;

            if (
              imgTop <= imageActivationThreshold &&
              imgbottom >= imageActivationThreshold
            ) {
              gsap.set(img, {
                opacity: 1,
              });
            } else {
              gsap.set(img, {
                opacity: 0.5,
              });
            }
          });

          projectNames.forEach((p, index) => {
            const startProgress = index / totalProjectCount;
            const endProgress = (index + 1) / totalProjectCount;
            const projectProgress = Math.max(
              0,
              Math.min(
                1,
                (progress - startProgress) / (endProgress - startProgress),
              ),
            );

            gsap.set(p, {
              y: -projectProgress * moveDistanceNames,
            });

            if (projectProgress > 0 && projectProgress < 1) {
              gsap.set(p, {
                color: "var(--clr-main)",
              });
            } else {
              gsap.set(p, {
                color: "var(--font-primary)",
              });
            }
          });
        },
      });
    });
  }, []);

  return (
    <section className="playground-container">
      <section className="intro">
        <h1>playground</h1>
      </section>

      <section className="spotlight">
        <div className="project-index">
          <h1>
            {String(currentIndex).padStart(2, "0")}/
            {String(totalProjects).padStart(2, "0")}
          </h1>
        </div>
        <div className="project-images">
          <div className="project-image">
            <video
              playsInline
              autoPlay
              loop
              muted
              src="https://ik.imagekit.io/xlqvbmkcc/scroll-eft.mp4"
            ></video>
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
          <div className="project-image">
            <img
              src="https://cdn.sanity.io/images/92bwk9y2/production/df5652dfa5f37896581b2c635f81f77501f24a63-3856x2080.png?auto=format&fit=max&q=90&w=1446"
              alt=""
            />
          </div>
        </div>
        <div className="project-names">
          <p>Center Pull Scroll</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
          <p>Underdevelopment</p>
        </div>
      </section>
      <section className="outro">
        <p>Creativity has no limits</p>
      </section>
    </section>
  );
}
