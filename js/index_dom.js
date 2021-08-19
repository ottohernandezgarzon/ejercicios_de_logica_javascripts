import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./hamburger_menu_dom.js";
import { alarm, digitalClick } from "./reloj_digital_y_alarma_sonora.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClick("#reloj","#active-reloj", "#desactive-reloj");
  alarm("../assets/alarma.mp3", "#active-alarm", "#desactive-alarm");
  countdown("countdown", "Aug 18, 2021, 20:14:00", "Feliz cumple años");
});

d.addEventListener("keydown", (e)=>{
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
})