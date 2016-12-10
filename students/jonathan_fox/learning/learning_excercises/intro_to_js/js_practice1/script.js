var profile = {Age: "25", Lives: "Herriman, Utah", Works: "Student"};
var food = ["Pizza", "Chocolate", "Pasta"];

function show_profile() {
	document.getElementById("profile_items").classList.toggle("clicked");
}

function fav_foods() {
	document.getElementById("food").classList.toggle("clicked");
}

for (var i in profile) {
	document.getElementById("profile_items").innerHTML += i + ": ";
	document.getElementById("profile_items").innerHTML += profile[i] + "<br />";
}

for (var i in food) {
	document.getElementById("food").innerHTML += food[i] + "<br />";
}