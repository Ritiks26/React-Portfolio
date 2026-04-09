import laptopImage1 from "../assets/pics/mockups/laptop-1.jpg";
import laptopImage2 from "../assets/pics/mockups/laptop-2.jpg";
import laptopImage3 from "../assets/pics/mockups/laptop-3.jpg";
import mobile1 from "../assets/pics/mockups/mobile-1.jpg";
import mobile2 from "../assets/pics/mockups/mobile-2.jpg";

export const menus = [
  {
    id: "/playground",
    title: "Playground",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

export const freelanceWorkSummary = [
  {
    website: "Trinity - College",
    websiteLink: "#",
    summary: [
      "Designed and developed the complete frontend for the college website, building responsive layouts for academic sections, admissions, and general information. Created reusable React components to ensure maintainability and scalability, while ensuring smooth navigation and a consistent user interface across all pages. Optimized the website for high performance and seamless cross-device compatibility.",
    ],
    techstack: "REACT.JS, HTML, AND CSS",
  },
];

export const projectDetail = [
  {
    website: "TRINITY - COLLEGE, COLLEGE WEBSITE",
    projectLink: "https://trinity-sandy.vercel.app/",
    Image: laptopImage1,
    isFreeLance: "FREELANCE",
    content: "College Platform",
  },
  {
    website: "INKSPIRE STUDIO - DESIGNING AGENCY STUDIO",
    projectLink: "https://the-inkspire-studio.vercel.app/",
    Image: laptopImage2,
    isFreeLance: "AWWWARDS TYPE",
    content: "Creative Studio",
  },
  {
    website: "RSNB, E - COMMERCE WEBSITE",
    projectLink: "https://react-project-three-olive-69.vercel.app/",
    Image: laptopImage3,
    content: "Online Platform",
  },
  {
    website: "INTELLIQUIZ, MOBILE QUIZ APP",
    projectLink: "https://intelli-quiz-pi.vercel.app/",
    Image: mobile1,

    content: "Quiz Application",
  },
  {
    website: "TASK TRACKRR, TASK MANAGEMENT MOBILE APP",
    projectLink: "https://react-todo-six-black.vercel.app/",
    Image: mobile2,

    content: "Task Manager",
  },
];
