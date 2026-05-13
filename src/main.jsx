import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageNavigation } from "./components/PageNavigation.jsx";
import App from "./App.jsx";
import { Connect } from "./pages/Connect/Connect.jsx";
import "./index.css";

function Root() {
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <BrowserRouter>
      <PageNavigation />
      <App connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
      <Connect connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
