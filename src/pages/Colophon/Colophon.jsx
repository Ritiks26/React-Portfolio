import { SectionHeading } from "../../components/SectionHeading";
import "./Colophon.css";

export function Colophon() {
  const inspiredDevs = [
    { name: "Khoa Phan", URL: "https://www.pldkhoa.dev/" },
    { name: "sashasatchi.com", URL: "https://sashasatchi.com/" },
    { name: "Codegrid", URL: "https://www.youtube.com/@codegrid" },
  ];
  return (
    <section className="colophon-container">
      <div className="colophon-child">
        <p></p>
        <p>
          This website is built{" "}
          <img
            className="in-between-image"
            src="https://the-inkspire-studio.vercel.app/assets/hero-pic-2-Be16eK_c.jpeg"
            alt=""
          />{" "}
          by Ritik Singh as a space to showcase projects, experiments, and
          creative web development work.
        </p>{" "}
        <h1>Colophon</h1>
      </div>

      <div className="technology-section">
        <SectionHeading heading={"technology"} />

        <div className="technology-content">
          <p>
            This website is built using <span>React.Js,</span> a modern
            JavaScript library for creating fast and interactive user
            interfaces. Its component-based architecture allows the site to be
            organized into reusable parts, making the development process more
            scalable and maintainable. The core functionality is powered by
            modern JavaScript (ES6+), enabling dynamic behavior and smooth user
            interactions. Animations and page transitions are implemented using{" "}
            <span>GSAP (GreenSock Animation Platform),</span> providing
            high-performance motion and precise animation control to create
            smooth navigation and engaging visual experiences.{" "}
            <span>Lenis</span> is used to enhance the{" "}
            <span>scrolling experience,</span> delivering smooth and fluid
            scroll behavior throughout the site.
          </p>

          <p>
            For structure and styling, the site uses{" "}
            <span>HTML5 and CSS3,</span> focusing on a clean, minimal layout and
            responsive design. The website is deployed on <span>Vercel,</span> a
            platform optimized for modern frontend applications, ensuring fast
            builds, reliable performance, and quick loading times.
          </p>
        </div>
      </div>

      <div className="design-section">
        <SectionHeading heading={"design"} />

        <div className="design-content">
          <p>
            The design of this website focuses on minimalism, clarity, and a
            smooth user experience. The goal was to create a clean interface
            where the projects and content remain the main focus while
            maintaining a visually engaging layout.
          </p>

          <p>
            For typography, the site uses <span>Satoshi</span> as the primary
            font for body text and{" "}
            <span className="barlow-font">Barlow Condensed</span> for headings
            and navigation. This combination helps create a balance between
            readability and strong visual hierarchy while giving the interface a
            modern and distinctive feel.
          </p>
          <p>
            The color palette was inspired by various modern portfolio and
            creative developer websites, with a few personal adjustments to
            match the overall aesthetic of the project. The layout follows a
            responsive and structured design approach, ensuring the site works
            smoothly across different screen sizes while keeping navigation
            simple and intuitive.
          </p>
        </div>
      </div>

      <div className="inspiration-section">
        <SectionHeading heading={"inspirations"} />

        <div className="inspiration-content">
          <p>
            The design and overall direction of this website were influenced by
            various developers, designers, and platforms I came across while
            exploring modern web portfolios. Their work helped shape the visual
            style, layout ideas, and interaction approach used throughout this
            site.
          </p>

          <div className="inspired-devs">
            <ul>
              {inspiredDevs.map((dev) => (
                <>
                  <a href={dev.URL} target="_blank">
                    {" "}
                    <li>
                      {dev.name}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                        <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                      </svg>
                    </li>
                  </a>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
