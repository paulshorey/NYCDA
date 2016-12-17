/*
	onkeydown event:
	detect ALL keys
*/
function checkKey(event) {
	if ( event.keyCode == 27 ) {
		alert(' YOU HIT "ESCAPE" - I will now close my imaginary modal popup');
	}
}
window.onkeydown = checkKey;

/*
	onkeypress event:
	detect only the letters, numbers, and characters, 
	not special keyboard keys like "esc" and "return" and "tab"
*/
function checkKey(event) {
	console.log(event);
	//alert( "you pressed " + event.key );
}
window.onkeypress = checkKey;





















//var allStates = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];




// /*
// 	FOR LOOP:
// */

// var theBook = {"zero":"monday",  "one":"tuesday",  "two":"wednesday",  "three":"thursday",  "four":"friday",  "five":"saturday",  "six":"sunday"};

// for (var pageNumber in theBook) {
// 	var today = theBook [ pageNumber ];

// 	if (today=="sunday") {
// 		document.getElementById("for_loop").innerHTML +=  "<p style='color:red;font-weight:bold;'>today is " + today + "</p>" ;
// 	} else {
// 		document.getElementById("for_loop").innerHTML +=  "<p>today is " + today + "</p>" ;
// 	}

// }





// 	WHILE LOOP:

// 	x = 6 

// 	while(x < 10){   

// 		console.log("On number " + x)  

// 		x++; 

// 	}

// 	"
// 	99 bottles of root beer on the wall, 99 bottles of root beer...take one down, pass it around 98 bottles of root beer on the wall, 
// 	98 bottles of root beer on the wall, 98 bottles of root beer...take one down, pass it around 97 bottles of root beer on the wall,
// 	"
// 	etc., all the way to 0 bottles.


// var x = 99;

// while ( x > 0 ) {

// 	console.log( x + " bottles of beer on the wall, " + x + " bottles of beer... take one down, pass it around, " + ( x-1 ) + " bottles of beer on the wall" );

// 	x = x - 1;

// }












