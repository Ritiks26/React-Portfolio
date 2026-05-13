import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import "./Connect.css";

export function Connect({ connectOpen, setConnectOpen }) {
  const tl = useRef(null);

  useGSAP(() => {
    const contactContainer = gsap.utils.toArray(".connect-container");

    gsap.set(".connect-wrapper", {
      yPercent: 200,
    });

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(".connect-wrapper", {
      yPercent: -50,
      duration: 1,
      ease: "power4.inOut",
    });
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
