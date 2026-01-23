import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { menus } from "../constant";
import "./Header.css";

export function Header() {
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
        <p>Ritik Singh</p>
      </div>
      <div className="nav">
        <ul>
          {menus.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
