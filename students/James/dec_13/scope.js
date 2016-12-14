function show_text1() {
	document.getElementById("button1_text").style.display = "block";
}
function hide_text1() {
	document.getElementById("button1_text").style.display = "none";
}
function show_text2() {
	document.getElementById("button2_text").style.display = "block";
}
function hide_text2() {
	document.getElementById("button2_text").style.display =  "none";
}

function hover1() {
	alert ("Hey! I told you not to hover over me");
}

window.onkeydown = function(event) {
	console.log(event);
	
	var keypress = document.getElementById("keypresses");
	if (event.key == "Backspace") {
		keypress.innerHTML = keypress.innerHTML.substring(0,keypress.innerHTML.length - 1);
	} else {
		keypress.innerHTML += event.key;
	}
}

function dosubmit() {
	var form_fields = document.getElementsByTagName("input");
	console.log(form_fields);

	for (var i = 0; i < form_fields.length; i++) {
		var current_input = form_fields[i];
	}
	
	if (form_fields.password_1.value != "12345678") {
		alert ("Incorrect!");
	}
		var count_numbers = 0;
		for (var i in form_fields.username.value) {
			if (!isNaN(form_fields.username.value[i])) {
				count_numbers = count_numbers + 1;
			}
			
		}

		if (count_numbers == 0) {
				alert ("There are no numbers in your username!!");
		}
	
}





// for (var i =0; i < form_fields.username.value.length; i++) {
// }
