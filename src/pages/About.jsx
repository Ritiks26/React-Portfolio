import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../components/SectionHeading";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export function About() {
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
          start: "top 75%",
        },
      });

      /* ===============================
       WORKS SECTION
    =============================== */

      const projectSplitText = SplitText.create(".projects-built p", {
        type: "lines",
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
          start: "top 75%",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="about-section" id="about-section">
        <div className="about-container">
          <SectionHeading heading={"ABOUT"} />
          <div className="about-content">
            <p>
              {" "}
              I am a Frontend Web Developer with hands-on experience building
              responsive and interactive web applications using{" "}
              <span>React.JS, JavaScript, GSAP, HTML, and CSS.</span> I enjoy
              creating modern user interfaces that are visually appealing,
              responsive, and easy to use across different devices and screen
              sizes. I have worked on real-world projects including e-commerce
              platforms, quiz applications, and task management tools, where I
              focused on building clean UI structures, smooth animations, and
              scalable code. Through these projects, I developed a strong
              understanding of component-based architecture and modern frontend
              development practices.
            </p>

            <p>
              {" "}
              I enjoy solving UI challenges, improving user experience, and
              continuously learning modern frontend technologies to stay updated
              with industry trends. I pay close attention to detail while
              designing layouts and interactions to ensure a polished and
              consistent interface. I also enjoy collaborating on ideas and
              turning concepts into meaningful digital experiences that provide
              real value to users.
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

                <p>High-end design agency Inkspire Studio × Awwwards style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
