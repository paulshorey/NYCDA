var theBook = {"zero":"monday",  "one":"tuesday",  "two":"wednesday",  "three":"thursday",  "four":"friday",  "five":"saturday",  "six":"sunday"};

for (var pageNumber in theBook) {
	var today = theBook [ pageNumber ];

	if (today=="sunday") {
		document.getElementById("for_loop").innerHTML +=  "<p style='color:red;font-weight:bold;'>today is " + today + "</p>" ;
	} else {
		document.getElementById("for_loop").innerHTML +=  "<p>today is " + today + "</p>" ;
	}

}



/*

	WHILE LOOP:

	x = 6 

	while(x < 10){   

		console.log("On number " + x)  

		x++; 

	}

	"
	99 bottles of root beer on the wall, 99 bottles of root beer...take one down, pass it around 98 bottles of root beer on the wall, 
	98 bottles of root beer on the wall, 98 bottles of root beer...take one down, pass it around 97 bottles of root beer on the wall,
	"
	etc., all the way to 0 bottles.
*/

var x = 99;

while ( x > 0 ) {

	console.log( x + " bottles of beer on the wall, " + x + " bottles of beer... take one down, pass it around, " + ( x-1 ) + " bottles of beer on the wall" );

	x = x - 1;

}










