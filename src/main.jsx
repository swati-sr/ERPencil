import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-light-bg w-full h-screen">
      <AppRoutes />
    </div>
  </StrictMode>
);
