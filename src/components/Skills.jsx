import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { coreSkills } from "../constant/index.jsx";
import { SectionHeading } from "./SectionHeading";
import "./Skill.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Skill() {
  useGSAP(() => {
    const skillCard = gsap.utils.toArray(".skills");

    skillCard.forEach((card) => {
      const svg = card.querySelector(".icon-wrap svg");
      if (!svg) return;

      const rotation = gsap.to(card, {
        "--glow-deg": "270deg",
        duration: 8,
        repeat: -1,
        ease: "none",
        paused: true,
      });

      const fadetl = gsap.timeline({ paused: true });

      gsap.set(svg, { filter: "grayscale(100%) opacity(0.5)" });

      fadetl
        .to(card, {
          "--glow-opacity": 1,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          svg,
          {
            filter: "grayscale(0%) opacity(1)",
            duration: 0.5,
            ease: "power2.inOut",
          },
          0,
        );

      card.addEventListener("mouseenter", () => {
        rotation.resume();
        fadetl.play();
      });
      card.addEventListener("mouseleave", () => {
        rotation.pause();
        fadetl.reverse();
      });
    });
  }, []);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const skillHeading = SplitText.create(".skill-container h1", {
        type: "chars",
      });
      const skillText = SplitText.create(".heading-text", {
        type: "chars",
      });
      const triggerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill-container",
          start: "top 45%",
        },
      });

      gsap.set(".skills-content", {
        filter: "blur(2rem)",
      });

      gsap.set(skillHeading.chars, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      gsap.set(skillText.chars, {
        clipPath: "inset(0% 0% 100% 0%)",
        yPercent: 100,
      });

      triggerTl
        .to(skillHeading.chars, {
          clipPath: "inset(0% 0% 0% 0%)",
          yPercent: 0,
          ease: "back.inOut",
        })
        .to(skillText.chars, {
          clipPath: "inset(0% 0% 0% 0%)",
          yPercent: 0,
          ease: "back.inOut",
        })
        .to(".skills-content", {
          filter: "blur(0rem)",
          duration: 1,
          ease: "back.inOut",
          stagger: 0.025,
        });
    });
  }, []);

  return (
    <div className="skill-container">
      <h1>TECHSTACK</h1>
      <p className="heading-text">Tools behind the build.</p>
      <div className="skills-grid">
        {coreSkills.map((skill, i) => (
          <div className="skills" key={i}>
            {" "}
            <div className="skills-content">
              <div className="icon-wrap">{skill.icon}</div>
              <p>{skill.tech}</p>
            </div>
            <div className="skill-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
