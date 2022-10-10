import { createRoot } from "react-dom/client";
import browser from "webextension-polyfill";
import { Popup } from "./component";

// // // //

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  const container = document.getElementById("popup");

  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(<Popup />);
});
