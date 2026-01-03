import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef, useState } from "react";
import { Header } from "../src/components/Header.jsx";
import { HomePage } from "./pages/HomePage";
import { freelanceWorkSummary } from "../src/constant";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [workSummary, setWorkSummary] = useState(false);
  const followballRef = useRef(null);
  const followballbackRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  // useEffect(() => {
  //   if (workSummary) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // }, [workSummary]);

  useGSAP(() => {
    const parallax = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.7,
      smoothTouch: 0.1,
    });

    parallax.effects(".parallax-image", {
      speed: 0.75,
      lag: 0.18,
      start: "top bottom",
      end: "bottom top",
    });
  });

  return (
    <>
      <div id="smooth-wrapper" ref={smoothWrapperRef}>
        <Header />
        <div id="smooth-content" ref={smoothContentRef}>
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
