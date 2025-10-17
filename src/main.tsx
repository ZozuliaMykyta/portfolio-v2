import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SectionProvider } from "./components/contexts/SectionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </StrictMode>
);
