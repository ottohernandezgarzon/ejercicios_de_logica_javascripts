const d = document,
	n = navigator;

export default function getGeolocalizaction(id) {
	const $id = d.getElementById(id),
		option = {
			enableHightAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};
	const success = (position) => {
		let coords = position.coords;
		$id.innerHTML = `
    <p>Tu posición actual es: </p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud:  <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},1z" target="_blank", rel="noopener" >En Google maps</a>
    `;
	};

	const error = (err) => {
		$id.innerHTML = `<p>
      <mark> Error ${err.code}: ${err.message} </mark>
    </p>`;
	};

	n.geolocation.getCurrentPosition(success, error, option);
}
