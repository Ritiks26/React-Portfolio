import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { menus } from "../constant/index.jsx";
import "./Header.css";

export function Header({ connectOpen, setConnectOpen }) {
  useGSAP(() => {
    const menusElem = document.querySelectorAll(".nav li");

    menusElem.forEach((menu) => {
      const menuSplitText = SplitText.create(menu, {
        type: "chars, words",
      });

      menu.addEventListener("mouseover", () => {
        gsap.to(menuSplitText.chars, {
          yPercent: 100,
          stagger: 0.03,
          ease: "expo.out",
        });
      });

      menu.addEventListener("mouseleave", () => {
        gsap.to(menuSplitText.chars, {
          yPercent: 0,
          stagger: 0.03,
          ease: "expo.out",
        });
      });
    });
  });
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <p>Ritik Singh</p>
        </Link>
      </div>
      <div className="portfolio-of">frontend developer</div>
      <div className="nav">
        <ul>
          {menus.map((link) => (
            <Link to={link.id}>
              <li key={link.id}>{link.title}</li>
            </Link>
          ))}
          <li onClick={() => setConnectOpen(!connectOpen)}>Connect</li>
        </ul>
      </div>
    </header>
  );
}
