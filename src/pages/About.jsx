import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  // useGSAP(() => {
  //   /* ===============================
  //      ABOUT SECTION
  //   =============================== */
  //   const splitPara = SplitText.create(".about-content p", {
  //     type: "lines",
  //     linesClass: "split-line",
  //   });

  //   gsap.set(splitPara.lines, {
  //     clipPath: "inset(0% 0% 100% 0)",
  //     y: 20,
  //   });

  //   gsap.to(splitPara.lines, {
  //     clipPath: "inset(0% 0% 0% 0)",
  //     y: 0,
  //     stagger: 0.08,
  //     duration: 0.6,
  //     ease: "Power4.out",
  //     scrollTrigger: {
  //       trigger: ".about-section",
  //       scroller: "#smooth-wrapper",
  //       start: "top 50%",
  //     },
  //   });

  //   /* ===============================
  //      HIGHLIGHTS SECTION
  //   =============================== */

  //   const highlights = SplitText.create(".highlight-contents ul", {
  //     type: "chars, words, lines",
  //   });

  //   gsap.set(highlights.lines, {
  //     clipPath: "inset(0% 0% 100% 0%)",
  //     y: 20,
  //   });

  //   gsap.to(highlights.lines, {
  //     clipPath: "inset(0% 0% 0% 0%)",
  //     y: 0,
  //     stagger: 0.08,
  //     duration: 0.6,
  //     ease: "Power4.out",
  //     scrollTrigger: {
  //       trigger: ".highlight-contents",
  //       scroller: "#smooth-wrapper",
  //       start: "top 50%",
  //     },
  //   });

  //   /* ===============================
  //      WORKS SECTION
  //   =============================== */

  //   const projectSplitText = SplitText.create(".projects-built p", {
  //     type: "chars, words, lines",
  //     linesClass: "split-line",
  //   });

  //   gsap.set(projectSplitText.lines, {
  //     clipPath: "inset(0% 0% 100% 0)",
  //     y: 20,
  //   });

  //   gsap.to(projectSplitText.lines, {
  //     clipPath: "inset(0% 0% 0% 0)",
  //     y: 0,
  //     stagger: 0.08,
  //     duration: 0.6,
  //     ease: "Power4.out",
  //     scrollTrigger: {
  //       trigger: ".projects-built",
  //       scroller: "#smooth-wrapper",
  //       start: "top 50%",
  //     },
  //   });

  //   /* ===============================
  //      SKILLS SECTION
  //   =============================== */

  //   const techSkillsSplit = SplitText.create(".tech-skills p", {
  //     type: "chars, words, lines",
  //     linesClass: "split-line",
  //   });

  //   gsap.set(techSkillsSplit.lines, {
  //     clipPath: "inset(0% 0% 100% 0)",
  //     y: 20,
  //   });

  //   gsap.to(techSkillsSplit.lines, {
  //     clipPath: "inset(0% 0% 0% 0)",
  //     y: 0,
  //     stagger: 0.08,
  //     duration: 0.6,
  //     ease: "Power4.out",
  //     scrollTrigger: {
  //       trigger: ".tech-skills",
  //       scroller: "#smooth-wrapper",
  //       start: "top 80%",
  //     },
  //   });
  // }, []);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      /* ===============================
       ABOUT SECTION
    =============================== */
      const splitPara = SplitText.create(".about-content p", {
        type: "lines",
        linesClass: "split-line",
      });

      gsap.set(splitPara.lines, {
        clipPath: "inset(0% 0% 100% 0)",
        y: 20,
      });

      gsap.to(splitPara.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: ".about-section",
          scroller: "#smooth-wrapper",
          start: "top 75%",
        },
      });

      /* ===============================
       HIGHLIGHTS SECTION
    =============================== */

      const highlights = SplitText.create(".highlight-contents ul", {
        type: "chars, words, lines",
      });

      gsap.set(highlights.lines, {
        clipPath: "inset(0% 0% 100% 0%)",
        y: 20,
      });

      gsap.to(highlights.lines, {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: ".highlight-contents",
          scroller: "#smooth-wrapper",
          start: "top 75%",
        },
      });

      /* ===============================
       WORKS SECTION
    =============================== */

      const projectSplitText = SplitText.create(".projects-built p", {
        type: "chars, words, lines",
        linesClass: "split-line",
      });

      gsap.set(projectSplitText.lines, {
        clipPath: "inset(0% 0% 100% 0)",
        y: 20,
      });

      gsap.to(projectSplitText.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: ".projects-built",
          scroller: "#smooth-wrapper",
          start: "top 75%",
        },
      });

      /* ===============================
       SKILLS SECTION
    =============================== */

      const techSkillsSplit = SplitText.create(".tech-skills p", {
        type: "chars, words, lines",
        linesClass: "split-line",
      });

      gsap.set(techSkillsSplit.lines, {
        clipPath: "inset(0% 0% 100% 0)",
        y: 20,
      });

      gsap.to(techSkillsSplit.lines, {
        clipPath: "inset(0% 0% 0% 0)",
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "Power4.out",
        scrollTrigger: {
          trigger: ".tech-skills",
          scroller: "#smooth-wrapper",
          start: "top 75%",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <ul>
            <li>ABOUT</li>
          </ul>

          <div className="about-content">
            <p>
              I am a Frontend Web Developer with hands-on experience building
              responsive and interactive web applications using{" "}
              <span> React.JS, JavaScript, GSAP, HTML, and CSS. </span> I have
              worked on real-world projects including e-commerce platforms, quiz
              applications, and task management tools, focusing on clean UI,
              smooth animations, and scalable code. I enjoy solving UI
              challenges, improving user experience, and continuously learning
              modern frontend technologies. I pay close attention to detail
              while building interfaces and enjoy collaborating on ideas that
              turn into meaningful digital experiences.
            </p>
          </div>

          <div className="highlight-contents">
            <ul>
              <li> &#8500; React focused frontend development </li>
              <li> &#8500; Strong JavaScript DOM fundamentals </li>
              <li> &#8500; Real world project experience </li>
              <li> &#8500; Smooth GSAP based animations </li>
            </ul>
          </div>
          <div className="about-grid">
            <div className="projects-built">
              <h3>What I've built</h3>

              <div className="projects-content">
                <p>
                  Designed and built a modern, responsive college website
                  focused on structured content delivery, usability, and
                  cross-device compatibility. <span>(FREELANCE WORK)</span>
                </p>
                <p>
                  An online clothing store with a smooth add-to-cart system and
                  automatic bill generation.
                </p>
                <p>
                  Designed and built a mobile-friendly to-do list app, with a
                  clean UI and smooth task management.
                </p>
                <p>
                  Developed a dynamic quiz application with category-based
                  quizzes.
                </p>
                <p>
                  High-end design agency Inkspire Studio × Awwwards style.
                  <span> (LAUNCHING SOON)</span>
                </p>
              </div>
            </div>
            <div className="tech-skills">
              <h3>Technical skills</h3>

              <div className="projects-content">
                <p>GSAP (GreenSock Animation Platform)</p>
                <p>Responsive web design</p>
                <p>React.JS</p>
                <p>JavaScript</p>
                <p> HTML</p>
                <p>CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
