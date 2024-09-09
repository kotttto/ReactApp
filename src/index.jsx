import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoveGoldfish } from "./MoveGoldfish";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MoveGoldfish />
  </StrictMode>
);
