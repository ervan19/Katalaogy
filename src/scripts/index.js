import "regenerator-runtime";
import "../styles/style.scss";
import "./view/components/headerBrand/header_brand";
import "./view/components/headerLink/header_link";
import "./view/components/navbar/navbar";
import "./view/components/footerContainer/footerContainer";
import swRegister from "./utils/sw-register";
import App from "./view/app";

const app = new App({
  button: document.querySelector(".hamburger-menu"),
  drawer: document.querySelector("nav"),
  content: document.querySelector("#main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("DOMContentLoaded", async () => {
  app.renderPage();
  await swRegister();
});
