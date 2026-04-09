import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PageNavigation } from "./components/PageNavigation.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageNavigation />
    <App />
  </BrowserRouter>,
);
