import { useEffect, useRef, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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

function MainLayout({ connectOpen, setConnectOpen }) {
  return (
    <>
      <Header connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
      <Outlet />
    </>
  );
}

function EmptyLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App({ connectOpen, setConnectOpen }) {
  const appContainerRef = useRef(null);
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

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(appContainerRef.current, {
      transform: "scale(1.05)",
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
    <div className="app-container">
      <div className="app-wrapper" ref={appContainerRef}>
        <Routes>
          <Route
            element={
              <MainLayout
                connectOpen={connectOpen}
                setConnectOpen={setConnectOpen}
              />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/colophon" element={<Colophon />} />
          </Route>

          <Route element={<EmptyLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
