import hamburgerMenu from "./hamburger_menu_dom.js";
import { alarm, digitalClick } from "./reloj_digital_y_alarma_sonora.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClick("#reloj","#active-reloj", "#desactive-reloj");
  alarm("../assets/alarma.mp3", "#active-alarm", "#desactive-alarm");
});