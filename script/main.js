function toggle_pancake() {
	var x = document.getElementById("menu");
	var nav = document.getElementById("main-nav");
	if (x.style.display === "none") {
		x.style.display = "block";
		nav.style.height = "100%";
		nav.style.backgroundColor = "#FFF";
	} 
	else {
		x.style.display = "none";
		nav.style.height = "auto";
		nav.style.backgroundColor = "transparent";
	}
}