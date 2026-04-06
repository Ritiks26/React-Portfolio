import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef, useState } from "react";
import { Header } from "../src/components/Header.jsx";
import { HomePage } from "./pages/HomePage";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useGSAP(() => {
    const parallax = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.7,
      smoothTouch: 0.1,
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
