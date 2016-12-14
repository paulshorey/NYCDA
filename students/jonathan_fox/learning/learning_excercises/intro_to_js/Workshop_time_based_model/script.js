var toggle_modal = function(){

	if (document.getElementById('sign_up').style.display == 'none') {
		document.getElementById('sign_up').style.display = 'inline-block';
	} else {
		document.getElementById('sign_up').style.display = "none";
	}
}



setTimeout(
	function(){

		console.log(document.getElementById('sign_up'));
		console.log(document.getElementById('sign_up').style.display);
			document.getElementById('sign_up').style.display = 'inline-block';
		
	},
	3000
);


/*var a = function() {   alert('do this');   }
var b = 3000;
setTimeout(a, b);*/