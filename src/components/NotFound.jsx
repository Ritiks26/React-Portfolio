import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const VIDEO_URLS = [
  "https://player.vimeo.com/progressive_redirect/playback/1077893624/rendition/1440p/file.mp4?loc=external&signature=60c26da84a4b43cfdaba0f8a5fcfce611537a4816e1387c561a4a9c9ead202f5",
  "https://player.vimeo.com/progressive_redirect/playback/878952409/rendition/2160p/file.mp4?loc=external&signature=995091a9a19b7f137094eeabbcc4c6b60e7b2834f31dd4ea57b38e309abc3dea",
  "https://player.vimeo.com/progressive_redirect/playback/1078744918/rendition/2160p/file.mp4?loc=external&signature=eb30ab40291de30d2ae05df93126c7579ad9a2662c1cc421376454ef1f590a30",
];

export function NotFound() {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.5 });

    const headings = document.querySelectorAll(".error-message h1");
    const paragraphs = document.querySelectorAll(".error-message p");
    const reels = document.querySelectorAll(".reel-container video");
    const backLink = document.querySelector(".back-to-home");

    gsap.set([headings, paragraphs, backLink], { opacity: 0, yPercent: 100 });
    gsap.set(reels, { opacity: 0 });

    tl.to(headings, {
      opacity: 1,
      yPercent: 0,
      ease: "power2.inOut",
      stagger: 0.05,
    })
      .to(paragraphs, {
        opacity: 1,
        yPercent: 0,
        ease: "power2.inOut",
        stagger: 0.05,
      })
      .to(reels, { opacity: 1, ease: "power2.inOut", stagger: 0.55 })
      .to(backLink, { opacity: 1, yPercent: 0, ease: "power2.out" });
  }, []);

  return (
    <section className="not-found-container">
      <div className="not-found">
        <div className="error-message-container">
          <div className="error-message">
            <h1>error</h1>
            <h1>404</h1>
          </div>
          <div className="error-message">
            <p>page not found</p>
            <p>but we did find a nice looking reel</p>
          </div>
        </div>

        <div className="reel-container">
          {VIDEO_URLS.map((src) => (
            <video key={src} autoPlay playsInline loop muted src={src} />
          ))}
        </div>

        <Link to="/" className="back-to-home">
          <p>back to home</p>
        </Link>
      </div>
    </section>
  );
}
