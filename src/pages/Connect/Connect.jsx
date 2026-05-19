import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./Connect.css";

export function Connect({ connectOpen, setConnectOpen }) {
  const tl = useRef(null);

  useGSAP(() => {
    gsap.set(".connect-wrapper", {
      yPercent: 200,
      scale: 0.25,
    });

    gsap.set(
      [
        ".connect-top p",
        ".connect-top .studio-name",
        ".connect-address p",
        ".social-links a",
        ".connect-middle h2",
        ".line",
        ".person-card h3",
        ".person-card div p",
        ".close-connect",
      ],
      {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      },
    );

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(".connect-wrapper", {
      yPercent: -50,
      scale: 1,
      duration: 1,
      ease: "power4.inOut",
    });

    tl.current.to(
      ".connect-top p:not(.studio-name)",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.3",
    );

    tl.current.to(
      ".studio-name",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.4",
    );

    tl.current.to(
      [".connect-address p", ".social-links a"],
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
        stagger: 0.08,
      },
      "-=0.3",
    );

    tl.current.to(
      ".connect-middle h2",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.3",
    );

    tl.current.fromTo(
      ".line",
      { clipPath: "inset(0% 100% 0% 0%)", yPercent: 0 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.25,
        ease: "power2.inOut",
      },
      "-=0.2",
    );

    tl.current.to(
      ".person-card h3",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
        stagger: 0.12,
      },
      "-=0.2",
    );

    tl.current.to(
      ".person-card div p",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
        stagger: 0.07,
      },
      "-=0.3",
    );

    tl.current.to(
      ".close-connect",
      {
        clipPath: "inset(0% 0% 0% 0%)",
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.2",
    );
  }, []);

  useGSAP(() => {
    if (!tl.current) return;
    if (connectOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [connectOpen]);

  return (
    <div className="connect-wrapper">
      <section className="connect-container">
        <div className="connect-top">
          <p>CONTACT US</p>
          <p className="studio-name">RITIK SINGH</p>
          <div className="connect-address">
            <p>NEW DELHI</p>
            <p>INDIA</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/ritik-singh-899977318/"
                target="_blank"
              >
                LINKEDIN
              </a>
              <a href="https://www.facebook.com/RitikSingh2608" target="_blank">
                FACEBOOK
              </a>
            </div>
          </div>
        </div>

        <div className="connect-middle">
          <h2>
            Have a project, an idea,
            <br />
            or just want to say hello?
          </h2>
        </div>

        <div className="line"></div>

        <div className="connect-bottom">
          <div className="person-card">
            <h3>RITIK SINGH</h3>
            <div>
              <p>FRONTEND DEVELOPER</p>
              <p>hritikesingh2608@gmail.com</p>
              <p>+91 99718 73310</p>
            </div>
          </div>
          <div className="person-card">
            <h3>AVAILABLE FOR</h3>
            <div>
              <p>FREELANCE</p>
              <p>INTERNSHIPS</p>
              <p>FULL TIME ROLES</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="close-connect"
        onClick={() => setConnectOpen(!connectOpen)}
      >
        close
      </div>
    </div>
  );
}
