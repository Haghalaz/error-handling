import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/sonner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        classNames: {
          error: "bg-red-700",
          success: "bg-green-700",
          warning: "text-yellow-400",
          info: "bg-blue-400",
        },
      }}
    />
  </React.StrictMode>,
);
