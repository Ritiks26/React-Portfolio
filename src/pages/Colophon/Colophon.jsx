import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { SectionHeading } from "../../components/SectionHeading";
import "./Colophon.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Colophon() {
  const bottomHeading = useRef();
  useGSAP(() => {}, []);

  const inspiredDevs = [
    { name: "Khoa Phan", URL: "https://www.pldkhoa.dev/" },
    { name: "sashasatchi.com", URL: "https://sashasatchi.com/" },
    { name: "Codegrid", URL: "https://www.youtube.com/@codegrid" },
  ];
  return (
    <section className="colophon-container">
      <div className="colophon-child">
        <h1 ref={bottomHeading}>colophon</h1>
      </div>
      <div className="tech-used-container">
        <p>
          This website is built with React JS using a component-based structure
          for scalability and maintainability. It uses modern JavaScript (ES6+)
          for dynamic interactions
        </p>
        <p>
          {" "}
          GSAP enables smooth animations, while Lenis improves scrolling. Styled
          with HTML5 and CSS3, it features a clean, responsive design and is
          deployed on Vercel for performance.
        </p>
        <h1>Technology</h1>
      </div>
      <div className="design-container">
        <p>
          The design focuses on minimalism, clarity, and a smooth user
          experience, keeping projects as the main focus. Typography uses
          Satoshi for body text and Barlow Condensed for headings, creating a
          strong visual hierarchy.
        </p>
        <p>
          {" "}
          The color palette is modern with a personal touch. Icons from
          Heroicons and TechIcons ensure visual consistency, built with React
          and GSAP.
        </p>
        <h1>design</h1>
      </div>

      <div className="inspired-container">
        <p>
          The design and overall direction of this website were influenced by
          various developers, designers, and platforms I came across while
          exploring modern web portfolios.
        </p>
        <p style={{ color: "var(--font-primary)" }}>Khoa Phan</p>
        <p style={{ color: "var(--font-primary)" }}>CodeGrid</p>
        <p style={{ color: "var(--font-primary)" }}>sashasatchi.com</p>
        <p>
          {" "}
          Their work helped shape the visual style, layout ideas, and
          interaction approach used throughout this site.
        </p>
        <h1>inspired</h1>
      </div>
    </section>
  );
}
