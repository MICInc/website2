function toggle_pancake() {
	var body = document.body;
	var nav = document.getElementById("main-nav");
	var menu = document.getElementById("menu");
	document.getElementById("pancake").classList.toggle("change");

	if (menu.style.display !== "block") {
		menu.style.display = "block";
		nav.style.height = "100%";
		nav.style.backgroundColor = "#FFF";
		body.style.overflow = "hidden";
	} 
	else {
		menu.style.display = "none";
		nav.style.height = "auto";
		nav.style.backgroundColor = "transparent";
		body.style.overflow = "scroll";
	}
}