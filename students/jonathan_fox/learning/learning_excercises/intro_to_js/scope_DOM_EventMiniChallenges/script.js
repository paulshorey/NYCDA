var show_button_1 = function(){
	document.getElementById('button_1').style.display = 'block';
	document.getElementById('button_2').style.display = 'none';
}

var show_button_2 = function(){
	document.getElementById('button_1').style.display = 'none';
	document.getElementById('button_2').style.display = 'block';
}

var hover_alert = function(){
	alert("Hey, I told you not to hover over me!");
}

window.document.onkeydown = function(event){
	var keyed_header = document.getElementById('keyed_header');

	if(event.key == 'Delete' || event.key == 'Backspace'){	
		
		keyed_header.innerHTML = keyed_header.innerHTML.substring(0, keyed_header.innerHTML.length-1);
	
	} else if (event.key =='Shift'){
		
	} else {
		keyed_header.innerHTML += event.key;
	}
}



document.getElementById('pw_check').onclick = function(){
	var password_value = document.getElementById('password').value;
	var count_numbers = 0;
	
	for(i in password_value){
		
		if(!isNaN(password_value[i])){
			count_numbers = count_numbers + 1;
		}	
	}

	if(password_value.length >= 8 && count_numbers > 0) {

	} else if (password_value.length < 8) {
		alert("Your password must contain at least 8 characters.");

	} else if (count_numbers < 1){
		alert("Your password must contain at least 1 number.");
	} else {
		
	}
}