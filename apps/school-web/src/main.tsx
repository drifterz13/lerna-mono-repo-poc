import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { canAccessSelfCurriculumPanel, isTeacherRole } from "@drifterz13/acl";

console.log(
  "canAccessCurriculumPanel",
  canAccessSelfCurriculumPanel("student")
);

console.log("isTeacherRole", isTeacherRole("teacher"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
