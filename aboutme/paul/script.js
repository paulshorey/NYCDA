var content_foods = ["tiramisu", "aged gouda cheese", "smoked salmon", "cheeseburgers", "asparagus"];
var content_colors = ["orange", "leaf green", "sky blue", "light yellow", "sage green"];


for (var i in content_foods) {
	document.getElementById('content_foods').innerHTML += content_foods[i]+'<br />';
}
for (var i in content_colors) {
	document.getElementById('content_colors').innerHTML += content_colors[i]+'<br />';
}

function show_foods(){
	document.getElementById('button_foods').classList.add("selected");
	document.getElementById('content_foods').style.display = "block";
}
function hide_foods(){
	document.getElementById('button_foods').classList.remove("selected");
	document.getElementById('content_foods').style.display = "none";
}

function show_colors(){
	document.getElementById('button_colors').classList.add("selected");
	document.getElementById('content_colors').style.display = "block";
}
window.hide_colors = function(){
	document.getElementById('button_colors').classList.remove("selected");
	document.getElementById('content_colors').style.display = "none";
}