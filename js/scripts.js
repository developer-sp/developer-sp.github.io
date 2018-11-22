function openNav() {
	
	var x = document.getElementById('navigation');

	if (x.className === "navigation") {
		x.className += " menujs";
		document.getElementById('threeline-icon').innerHTML = "&#8593;";
	} else {
		x.className = "navigation";
		document.getElementById('threeline-icon').innerHTML = "&#9776;";
	}
}