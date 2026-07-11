import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { AppConfigProvider } from "./providers/AppConfigProvider";
import "@docs/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppConfigProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppConfigProvider>
  </StrictMode>,
);
