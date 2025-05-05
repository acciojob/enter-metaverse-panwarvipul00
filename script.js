//your JS code here. If required.
const parag = document.getElementById("para");
const btn = document.getElementById("butt");

btn.addEventListener("click", function () {
	const h1 = document.createElement("h1");
	h1.id = "para";
	h1.textContent = "Entered Metaverse";
	parag.replaceWith(h1);
});

