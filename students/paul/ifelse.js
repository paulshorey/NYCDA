// var donut = 1;

// if ( ! donut ) {
// 	console.log('I have NO donuts');

// }  else if ( donut == 1 ) {
// 	console.log('I have ONE donut');

// } else if ( donut == 2 ) {
// 	console.log('I have TWO donuts');

// } else {
// 	console.log('I have MORE THAN TWO donuts');
// }



/*
	VARIABLE TYPES

	boolean: 			true, false
	number: 			0, 0.25, 1, 2, 30000000
	string:				"some text"
	array:				[ "one", "two" ]
	object:				{ "first":"thingone", "second":"thingtwo" }
	function:			function(){  }
	undefined:

*/


/*

	What kind of music do you listen to if you are feeling....

	happy?

	sad?

	tired?

	None of the above?

*/

var listen_to_music = function(IAM) {

	if ( IAM == "happy" ) {
		alert('listen to Matt & Kim');
	}

	else if ( IAM == "relaxed" ) {
		alert('listen to Air');
	}

	else if ( IAM == "adventurous" ) {
		alert('listen to The Flaming Lips');
	}

	else {
		alert('listen to random stuff on 8Tracks');
	}

}