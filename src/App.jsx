import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "../src/components/Header.jsx";
import { HomePage } from "./pages/HomePage";
import { Playground } from "./pages/Playground/Playground.jsx";
import { Colophon } from "./pages/Colophon/Colophon.jsx";
import { NotFound } from "./components/NotFound.jsx";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App({ connectOpen, setConnectOpen }) {
  const appContainerRef = useRef(null);
  const location = useLocation();
  ``;
  const is404 = !["/", "/playground", "/colophon"].includes(location.pathname);

  const tl = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!is404 && (
        <Header connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/colophon" element={<Colophon />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
