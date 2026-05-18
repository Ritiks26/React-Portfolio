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
      <div className="colophon-content-container">
        <p>
          This website is built with React JS using a component-based structure
          and modern JavaScript (ES6+) for dynamic interactions.
        </p>
        <p className="light-color">
          GSAP and Lenis create smooth animations and scrolling, while HTML5 and
          CSS3 provide a clean, responsive design deployed on Vercel.
        </p>
        <h1>Technology</h1>
        <p>
          The design focuses on minimalism, clarity, and a smooth user
          experience, keeping projects as the main focus.
        </p>
        <p className="light-color">
          Typography uses Satoshi and Barlow Condensed for a strong visual
          hierarchy, while Heroicons and TechIcons maintain visual consistency
          with React and GSAP.
        </p>
        <h1>design</h1>
        <p>
          The design and direction of this website were inspired by modern
          portfolio creators and platforms like
        </p>
        <p className="light-color">Khoa Phan</p>
        <p className="light-color">CodeGrid</p>
        <p className="light-color">sashasatchi.com</p>
        <h1>inspired</h1>
      </div>
    </section>
  );
}
