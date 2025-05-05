//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function () {
	const h1 = document.createElement("h1");
	h1.id = "status";
	h1.textContent = "Entered Metaverse";
	status.replaceWith(h1);
});

