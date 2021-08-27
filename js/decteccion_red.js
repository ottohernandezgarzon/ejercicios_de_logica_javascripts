const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const isOnline = () => {
    const $div =d.createElement("div");

    if (n.onLine) {
      $div.textContent = "conexion restablecida";
      $div.classList.add("online");
      $div.classList.remove("offine")
    } else {
      $div.textContent = "conexion restablecida";
      $div.classList.add("offine");
      $div.classList.remove("online");
    }
    d.body.insertAdjacentElement("afterbegin", $div);
    setTimeout(() => d.body.removeChild($div), 2000);
  }
  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("online", (e) => isOnline());
}