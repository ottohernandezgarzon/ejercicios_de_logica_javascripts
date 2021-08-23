import hamburgerMenu from "./hamburger_menu_dom.js";
import { alarm, digitalClick } from "./reloj_digital_y_alarma_sonora.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responive"

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClick("#reloj", "#active-reloj", "#desactive-reloj");
  alarm("../assets/alarma.mp3", "#active-alarm", "#desactive-alarm");
  countdown("countdown", "Aug 18, 2021, 20:14:00", "Feliz cumple años");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia("youtube", "(min-width:1024)", `<a href="https://youtu.be/6IwUl-4pAzc">ver video</a>`, "Contenido Escritorio");
  responsiveMedia("gmaps", "(min-width:1024)", `<a href="https: //maps.app.goo.gl/mxZ22dQsiShSzvmdA">ver mapa de Colombia</a>`, "Contenido Escritorio");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

  darkTheme(".dark-theme-btn", "dark-mode");
