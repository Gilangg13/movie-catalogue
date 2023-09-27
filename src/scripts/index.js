import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";

// eslint-disable-next-line import/extensions
import App from "./views/app.js";

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

// console.log(app.renderPage());
