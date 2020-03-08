function toggle_pancake() {
	document.getElementById("pancake").classList.toggle("change");
	var nav = document.getElementById("main-nav");
	var x = document.getElementById("menu");
	var body = document.body;
	x.classList.toggle("change");

	if (x.style.display === "none") {
		x.style.display = "block";
		nav.style.height = "100%";
		nav.style.backgroundColor = "#FFF";
		body.style.overflow = "hidden";
	} 
	else {
		x.style.display = "none";
		nav.style.height = "auto";
		nav.style.backgroundColor = "transparent";
		body.style.overflow = "scroll";
	}
}