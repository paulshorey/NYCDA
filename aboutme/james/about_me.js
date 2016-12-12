var info_deserts = ["blueberry muffin","rasberry cheescake","chocolate chip cookie"];
var	info_sports = ["skiing","snowboarding","bowling","football"];

function show_deserts() {
	document.getElementById("deserts").classList.add("selected");
	document.getElementById("info_deserts").classList.add("selected");
}

function hide_deserts() {
	document.getElementById("deserts").classList.remove("selected");
	document.getElementById("info_deserts").classList.remove("selected");	
}

function show_sports() {
	document.getElementById("sports").classList.add("selected");
	document.getElementById("info_sports").classList.add("selected");
}

function hide_sports() {
		document.getElementById("sports").classList.remove("selected");
		document.getElementById("info_sports").classList.remove("selected");
}

for(var i in info_deserts) {
	document.getElementById("info_deserts").innerHTML += info_deserts[i] + "<br />";
}
for(var i in info_sports) {
	document.getElementById("info_sports").innerHTML += info_sports[i] + "<br />";
}