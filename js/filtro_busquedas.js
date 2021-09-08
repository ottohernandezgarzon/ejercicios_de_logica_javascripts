const d = document;

export default function searchFilter(input, selector) {
	d.addEventListener("keyup", (e) => {
		if (e.target.matches(input)) {
			if (e.key === "Escape") e.target.value = "";
			d.querySelectorAll(selector).forEach((item) =>
				item.textContent.toLowerCase().includes(e.target.value)
					? item.classList.remove("filter")
					: item.classList.add("filter"),
			);
		}
	});
}
