import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "../src/components/Header.jsx";
import { HomePage } from "./pages/HomePage";
import { Playground } from "./pages/Playground/Playground.jsx";
import { Colophon } from "./pages/Colophon/Colophon.jsx";
import { NotFound } from "./components/NotFound.jsx";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
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

  function MainLayout() {
    return (
      <>
        <Header />
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

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/colophon" element={<Colophon />} />
        </Route>

        <Route element={<EmptyLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
