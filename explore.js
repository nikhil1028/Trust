function openNav() {
    document.getElementById("myNav").style.width = "100%";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the explore */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}