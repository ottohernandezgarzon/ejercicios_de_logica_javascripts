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
  responsiveMedia("youtube", "(min-width:1024)", `<a href="https://youtu.be/6IwUl-4pAzc">ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/9fwQY6JOHaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia(
		"gmaps",
		"(min-width:1024)",
		`<a href="https: //maps.app.goo.gl/mxZ22dQsiShSzvmdA">ver mapa de Colombia</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3928103627!2d-74.24789180268826!3d4.648625933059621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1629924381591!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
	);
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

  darkTheme(".dark-theme-btn", "dark-mode");
