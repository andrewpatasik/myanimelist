import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import App from "./App.tsx";

const rootStyle = css({
  ":root": {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,

    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={rootStyle} />
    <App />
  </React.StrictMode>
);
function rgba(arg0: number, arg1: number, arg2: number, arg3: number) {
  throw new Error("Function not implemented.");
}

