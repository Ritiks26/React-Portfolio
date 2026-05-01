import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./PageNavigation.css";

export function PageNavigation() {
  const location = useLocation();
  const pageNavRef = useRef();
  const prevPath = useRef(null);

  const gridSize = () => {
    const width = window.innerWidth;

    if (width < 640) return 80;
    if (width < 1024) return 160;
    return 300;
  };

  useGSAP(
    () => {
      if (prevPath.current === null) {
        prevPath.current = location.pathname;
        return;
      }

      if (prevPath.current !== location.pathname) {
        const tl = gsap.timeline();

        gsap.set(pageNavRef.current, {
          display: "grid",
          opacity: 1,
        });

        gsap.set(".page-nav-child", {
          opacity: 1,
          scale: 1,
        });

        tl.to(".page-nav-child", {
          opacity: 0,
          scale: 0.5,
          duration: 0.25,
          ease: "bounce.inOut",
          stagger: {
            grid: [10, 30],
            each: 0.015,
            from: "random",
          },
        })
          .to(".page-nav-child", {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: "bounce.inOut",
            stagger: {
              grid: [10, 30],
              each: 0.015,
              from: "random",
            },
          })
          .to(
            pageNavRef.current,
            {
              opacity: 1,
            },
            "-=0.3",
          )
          .to(
            pageNavRef.current,
            {
              opacity: 0,
            },
            "-=0.3",
          )
          .set(pageNavRef.current, {
            display: "none",
          });
      }

      prevPath.current = location.pathname;
    },
    {
      scope: pageNavRef,
      dependencies: [location.pathname],
    },
  );

  return (
    <section className="page-navigation" ref={pageNavRef}>
      {Array.from({ length: gridSize() }).map((_, i) => (
        <div key={i} className="page-nav-child"></div>
      ))}
    </section>
  );
}
